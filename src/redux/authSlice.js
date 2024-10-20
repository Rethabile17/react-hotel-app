import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../configure/firebase';
import { auth } from '../configure/firebase';
const initialState = {
  user: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { setLoading, setUser, setError } = authSlice.actions;
export const signUp = ({ email, password, fullName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setUser(userCredential.user));
    try {
      const docRef = await addDoc(collection(db, "user"), {
        fullName: fullName,
        email: email,
        role: "Client"
      }); 
    } catch (error) {
      
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert(" user check your email")
    dispatch(setUser());
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export default authSlice.reducer;