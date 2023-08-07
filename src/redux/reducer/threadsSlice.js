import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  threadsData: [],
};

export const fetchThreads = createAsyncThunk("threads/fetchThreads", () => {
  return axios
    .get("https://forum-api.dicoding.dev/v1/threads")
    .then((res) => res.data.data.threads);
});

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThreads.pending);
    builder.addCase(fetchThreads.fulfilled, (state, { payload }) => {
      state.threadsData = payload;
    });
    builder.addCase(fetchThreads.rejected);
  },
});

export default threadSlice.reducer;
