import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dbReducer from "./db.Slice";

const rootReducer = combineReducers ({
  auth: authReducer,
  db: dbReducer,
})

export const store = configureStore({
  reducer: rootReducer
})