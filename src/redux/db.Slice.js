import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../configure/firebase"

const initialState = {
  data: [],
  loading: false,
  error: null
}

export const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers:{
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
})

// Action creators are generated for each case reducer function
export const { setLoading, setUser, setError } = dbSlice.actions

export default dbSlice.reducer

export const fetchData = () => async (dispatch) => {
    dispatch ( setLoading ());
    try { 
        const querySnapshot = await getDocs (
            collection ( db, "room")
        );
        const data  = querySnapshot. docs.map((doc) => ({
            id:doc.id,
            ...doc .data(),
        }));
        dispatch (setData(data));
    } catch (error) {

    }
}