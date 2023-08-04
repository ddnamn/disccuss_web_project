import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  threadsData: [],
};

export const fetchThreads = createAsyncThunk(
  "threads/fetchThreads",
  async () => {
    const url = "https://forum-api.dicoding.dev/v1/threads";
    try {
      const response = await axios.get(url);
      return console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
);

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.threadsData = action.payload;
    }),
      builder.addCase(fetchThreads.rejected, (action) => {
        console.log("get data rejected");
        console.log(action.payload);
      });
  },
});

export default threadSlice.reducer;
