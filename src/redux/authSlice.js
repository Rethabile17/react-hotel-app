import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../configure/firebase";

const initialState = {
  user: null,
  loading: false,
  error: null,
  logged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.logged = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.logged = false;
      localStorage.removeItem("user");
    },
    initializeUser(state) {
      const userData = localStorage.getItem("user");
      if (userData) {
        state.user = JSON.parse(userData);
        state.logged = true;
      }
    },
  },
});

export const { setLoading, setUser, setError, logout, initializeUser } = authSlice.actions;

// Updated signUp function
export const signUp = ({ email, password, fullName }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create a document reference for the user's profile
    const profileRef = doc(db, "users", userCredential.user.uid); // Reference the user document
    
    // Set user profile data in the user's document
    await setDoc(profileRef, {
      fullName,
      email,
      role: "client",
    });
    
    dispatch(setUser({ uid: userCredential.user.uid, email }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent.");
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Fetch user role directly from the users collection
    const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
    
    // Check if the user document exists
    if (userDoc.exists()) {
      const userData = userDoc.data();
      dispatch(setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        role: userData.role // Assuming 'role' is a field in the users collection
      }));
    } else {
      dispatch(setError("User not found."));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(logout());
    alert("You have been logged out successfully.");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

export default authSlice.reducer;
