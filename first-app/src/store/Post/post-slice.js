import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  errorMessage: "",
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = "Unable to fetch posts!";
    });
  },
});

const postReducer = postSlice.reducer;

export default postReducer;
