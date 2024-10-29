import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBookings } from "../redux/dbSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../configure/firebase";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";
import './checkoutDetails.css';

const CheckoutDetails = () => {
    const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer(); 
    const [currency, setCurrency] = useState(options.currency);

    const location = useLocation();
    const { arrivalDate, leaveDate, totalPrice, room } = location.state || {}; 

    const dispatch = useDispatch(); 

    const user = useSelector((state) => state.auth.user); 

    const bookingData = {
        firstName: user?.firstName || "Guest First Name",
        email: user?.email || "",
        roomType: room?.roomType || "Standard", 
        arrivalDate: arrivalDate,
        leaveDate: leaveDate,
    };

    const addBookingToFirestore = async (bookingData) => {
        try {
            await addDoc(collection(db, "bookings"), bookingData);
            console.log("Booking added to Firestore");
        } catch (error) {
            console.error("Error adding booking: ", error);
        }
    };

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        paypalDispatch({ 
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalPrice ? totalPrice.toFixed(2) : "0.00",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            const updatedBookingData = {
                ...bookingData,
                paid: "Yes",
                transactionId: details.id,
                payerName: details.payer.name.given_name,
                email: details.payer.email_address,
            };

            addBookingToFirestore(updatedBookingData);
            dispatch(addBookings(updatedBookingData)); 

            alert(`Transaction completed by ${details.payer.name.given_name}`);
        }).catch((err) => {
            console.error("Payment approval error: ", err);
            alert("An error occurred during the payment approval.");
        });
    }

    return (
        <div className="checkout">
            <div className='checkout-page'>
                <h2>Checkout Details</h2>
                <p><strong>Check-in:</strong> {arrivalDate || "N/A"}</p>
                <p><strong>Check-out:</strong> {leaveDate || "N/A"}</p>
                <p><strong>Total Price:</strong> R{totalPrice ? totalPrice.toFixed(2) : "0.00"}</p>
            </div>
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default CheckoutDetails;
