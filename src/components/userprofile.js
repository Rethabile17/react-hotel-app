import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/dbSlice";
import "./UserProfile.css";

function UserProfile() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { data = [], loading = false, error = null } = useSelector((state) => state.db) || {};
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.uid) {
      dispatch(fetchUser(user.uid)); // Pass the user's uid to fetch the correct data
    }
  }, [dispatch, user]);

  const  ProfileButton = () => {
    Navigate("/", {
      state: {  },
    });
  };

  const userDetails = data.length > 0 ? data[0] : {
    fullName: "Name",
    email: user?.email || "User@gmail.com",
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }
  

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2>Profile</h2>
        <p>Email: {userDetails.email}</p>
      </div>
      <div className="profile-details">
        <h3>Profile Details</h3>
        <p>
          <strong>Full Name: {userDetails.fullName}</strong> 
        </p>
      </div>
      <div>
        <button className="profile-button" onClick={ProfileButton}>Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;
