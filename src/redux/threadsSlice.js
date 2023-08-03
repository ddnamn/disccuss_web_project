import { createSlice } from "@reduxjs/toolkit";
import { getThreads } from "../utils/getData";

const initialState = {
  threadsData: [],
};

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThreads.fulfilled, (state, action) => {
      state.threadsData = action.payload;
    }),
      builder.addCase(getThreads.rejected, (action) => {
        console.log("get data rejected");
        console.log(action.payload);
      });
  },
});

module.exports = threadSlice.reducer;
// module.exports.actions = threadSlice.actions;
