import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  threadsData: [],
};

export const fetchThreads = createAsyncThunk("threads/fetchThreads", () =>
  axios
    .get("https://forum-api.dicoding.dev/v1/threads")
    .then((response) => response.data.data.threads)
);

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.threadsData = action.payload;
      console.log(action.payload);
    }),
      builder.addCase(fetchThreads.rejected);
  },
});

export default threadSlice.reducer;
