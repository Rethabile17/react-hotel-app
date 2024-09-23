import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Single from "../images/6f7235447ca2c37edf7df110269d363b.png";
import { fetchData } from "../redux/dbSlice";
import "./rooms.css";

function Rooms() {
  const Navigate = useNavigate();
  const {
    data = [],
    loading = false,
    error = null,
  } = useSelector((state) => state.db) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);
  console.log(loading);
  console.log(error);

  const imgButton = (room) => {
    Navigate("/roomDetails", {
      state: { room },
    });
  };

  return (
    <div className="room">
      {data.map((room, index) => (
        <div className="room-page" key={index}>
          <div className="room-head">
            <div>
              <img
                className="room-top"
                src={Single}
                alt={`Room ${room.roomNumber}`}
                onClick={() => imgButton(room)} // Fix here
              />
            </div>

            <div className="room-down">
              <p>Room No: {room.roomNumber}</p>
              <p>{room.roomType}</p>
              <p>Floor: upstart</p>
              <p>Price: R{room.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rooms;
