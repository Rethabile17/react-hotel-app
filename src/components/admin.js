import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBookings } from "../redux/dbSlice";
import { addDoc, collection, getDocs } from "firebase/firestore"; // Import getDocs for fetching bookings
import { db } from "../configure/firebase";
import "./admin.css";

function Admin() {
  const dispatch = useDispatch();

  // State for booking inputs and bookings list
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookings, setBookings] = useState([]); // State for storing fetched bookings

  // Calculate total price based on stay duration
  const calculateStayTime = (arrivalDate, leaveDate) => {
    const ArrivalDate = new Date(arrivalDate);
    const LeaveDate = new Date(leaveDate);
    const DiffTime = Math.abs(LeaveDate - ArrivalDate);
    return Math.ceil(DiffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotalPrice = () => {
    const dailyRate = 100; // Set a default rate or dynamically fetch this based on roomType
    const amountOfDays = calculateStayTime(arrivalDate, leaveDate);
    return dailyRate * amountOfDays;
  };

  const handleAddBooking = async () => {
    const price = calculateTotalPrice();
    setTotalPrice(price);

    const bookingData = {
      fullName,
      email,
      roomType,
      arrivalDate,
      leaveDate,
      totalPrice: price,
    };

    // Add booking to Firestore
    try {
      await addDoc(collection(db, "bookings"), bookingData);
      console.log("Booking added to Firestore");
      dispatch(addBookings(bookingData)); // Add booking to Redux
      fetchBookings(); // Fetch updated bookings after adding a new one
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  // Fetch bookings from Firestore
  const fetchBookings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const bookingsList = querySnapshot.docs.map((doc) => doc.data());
      setBookings(bookingsList); // Update the bookings state
    } catch (error) {
      console.error("Error fetching bookings: ", error);
    }
  };

  // Automatically fetch bookings when the component mounts
  useEffect(() => {
    fetchBookings();
  }, []); // Only run on initial render

  return (
    <div className="admin">
      <div className="admin-page">
        <div className="admin-top">
          <h1 className="admin-head">Booking List</h1>

          <div className="admin-input">
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Room Type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            />
            <input
              type="date"
              placeholder="Arrival Date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
            <input
              type="date"
              placeholder="Leave Date"
              value={leaveDate}
              onChange={(e) => setLeaveDate(e.target.value)}
            />
          </div>

          <div className="totalPrice">
            <p>Total Price: R{totalPrice.toFixed(2)}</p>
          </div>

          <div className="admin-button-body">
            <div>
              <button className="admin-button" onClick={handleAddBooking}>
                Add Booking
              </button>
            </div>

            <div>
              <button className="admin-button" onClick={fetchBookings}>
                View Bookings
              </button>
            </div>
          </div>
        </div>

        {/* Render fetched bookings */}
        <div className="bookings-list">
          <h2>Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings available.</p>
          ) : (
            <table>
              <thead >
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Room Type</th>
                  <th>Arrival Date</th>
                  <th>Leave Date</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody >
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.fullName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.roomType}</td>
                    <td>{booking.arrivalDate}</td>
                    <td>{booking.leaveDate}</td>
                    {/* Ensure booking.totalPrice is valid before calling toFixed */}
                    <td>
                      R
                      {typeof booking.totalPrice === "number" &&
                      !isNaN(booking.totalPrice)
                        ? booking.totalPrice.toFixed(2)
                        : "0.00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
