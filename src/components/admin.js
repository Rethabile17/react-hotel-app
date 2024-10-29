import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRooms} from "../redux/dbSlice"; 
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../configure/firebase";
import { userLogout } from "../redux/authSlice"
import "./admin.css";
import { useNavigate } from "react-router-dom"; 

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  
  const [viewMode, setViewMode] = useState("addRoom");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [description, setDescription] = useState("");
  const [guests, setGuests] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleAddBooking = async () => {
    const bookingData = {
      roomType,
      roomNumber,
      price,
      description,
      guests,
    };

    try {
      await addDoc(collection(db, "Room"), bookingData);
      dispatch(addRooms(bookingData));
      fetchBookings();
      clearForm();
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Room"));
      const bookingsList = querySnapshot.docs.map((doc) => doc.data());
      setBookings(bookingsList);
    } catch (error) {
      console.error("Error fetching bookings: ", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const clearForm = () => {
    setRoomType("");
    setRoomNumber("");
    setPrice("");
    setDescription("");
    setGuests("");
  };

  const toggleView = () => {
    setViewMode(viewMode === "addRoom" ? "viewBookings" : "addRoom");
  };

  const handleLogout = () => {
    dispatch(userLogout()); 
    navigate("/"); 
  };

  return (
    <div className="admin">
      <div className="admin-page">
        <h1 className="admin-head">Hotel Admin Dashboard</h1>
        <button className="toggle-view-button" onClick={toggleView}>
          {viewMode === "addRoom" ? "View Bookings" : "Add Room"}
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>

        {viewMode === "addRoom" ? (
          <div className="admin-input">
            <input
              placeholder="Room Type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            />
            <input
              placeholder="Room Number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            <input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <button className="admin-button" onClick={handleAddBooking}>
              Add Room
            </button>
          </div>
        ) : (
          <div className="bookings-list">
            <h2>Bookings</h2>
            {bookings.length === 0 ? (
              <p>No bookings available.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Room Number</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Guests</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((room, index) => (
                    <tr key={index}>
                      <td>{room.roomType}</td>
                      <td>{room.roomNumber}</td>
                      <td>{room.price}</td>
                      <td>{room.description}</td>
                      <td>{room.guests}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
