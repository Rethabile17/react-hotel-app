import { async } from "@firebase/util";
import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../configure/firebase'; // Firestore config

const initialState = {
  data: [],
  loading: false,
  error: null,
};
// Create Firestore data slice
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
      state.data.push(action.payload); // Add the new booking to the data array
      state.loading = false;
    }
  },
});
export const { setLoading, setData, setError, addBookingToState } = dataSlice.actions;
export default dataSlice.reducer;

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Room")); // Ensure "test" collection exists
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data)); // Dispatch data after fetching
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

