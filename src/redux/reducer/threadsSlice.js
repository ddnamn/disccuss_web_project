import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  threadsData: [],
  category: [],
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
      state.category = action.payload
        .filter((obj, index, self) => {
          // Filter hanya objek dengan title yang belum ada di x
          return (
            self.findIndex((item) => item.category === obj.category) === index
          );
        })
        .map((obj) => obj.category);
    }),
      builder.addCase(fetchThreads.rejected);
  },
});

export default threadSlice.reducer;
