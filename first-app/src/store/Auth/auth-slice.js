import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAtxHG2zerJWJvm2Sc4AK0DlUtKu7q1Pn8",
  authDomain: "react-jun-23.firebaseapp.com",
});

const auth = getAuth(app);

const initialState = {
  token: null,
  isLoading: false,
  errorMessage: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("USER CRED : ", userCredentials);
    const token = await userCredentials.user.getIdToken();
    return token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.errorMessage = "Unable to create the user!";
      state.isLoading = false;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
