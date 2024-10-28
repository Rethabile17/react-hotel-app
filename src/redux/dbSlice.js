import { async } from "@firebase/util";
import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../configure/firebase'; // Firestore config
import { useId } from "react";
import { setUser } from "./authSlice";

const initialState = {
  data: [],
  loading: false,
  error: null,
  reviews : []
};

const dataSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addBookingToState(state, action) {
      state.data.push(action.payload); 
      state.loading = false;
    },
    setReviews (state, action){
      state.reviews.push(action.payload)

    }
  },
});
export const { setLoading, setData, setError, addBookingToState,  setReviews } = dataSlice.actions;
export default dataSlice.reducer;

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Room")); 
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data)); 
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchBookings = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const bookingsList = querySnapshot.docs.map(doc => doc.data());
    dispatch(setData(bookingsList)); // Store in Redux
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const addBookings = ({fullName, email, roomType, arrivalDate, leaveDate,  totalPrice , bookingData}) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "bookings"), {
      fullName: fullName,
      email:  email,
      roomType: roomType,
      arrivalDate: arrivalDate,
      leaveDate: leaveDate,
      totalPrice:  totalPrice,
      bookingData,
    });
    console.log("Document written with ID: ", docRef.id);
    dispatch(addBookingToState({ id: docRef.id, ...bookingData }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getBookings = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addRooms = ({description, image, roomNumber, roomType, price, guests,   bookingData}) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Room"), {
      roomType: roomType,
      price:  price,
      roomNumber: roomNumber,
      description: description,
      guests: guests,
      image:  image,
      bookingData,
    });
    console.log("Document written with ID: ", docRef.id);
    dispatch(addBookingToState({ id: docRef.id, ...bookingData }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchUser = (uid) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "users", uid, "profile"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const addReview = (reviewData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Reviews"), {
      reviewData
    });

    alert("Review added successfully")
    console.log("Document written with ID: ", docRef.id);
    dispatch(addBookingToState(reviewData));
  } catch (error) {
    dispatch(setError(error.message));
  }
};