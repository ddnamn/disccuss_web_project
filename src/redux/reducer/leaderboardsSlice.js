import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://forum-api.dicoding.dev/v1";

const initialState = {
  leaderboardsData: [],
};

export const fetchLearderboards = createAsyncThunk(
  "leaderboards/fetchLeaderboards",
  () =>
    axios
      .get(`${BASE_URL}/leaderboards`)
      .then((response) => response.data.data.leaderboards)
);

const leaderboardsSlice = createSlice({
  name: "leaderboards",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchLearderboards.fulfilled, (state, action) => {
      state.leaderboardsData = action.payload;
    });
    builder.addCase(fetchLearderboards.rejected);
  },
});

export default leaderboardsSlice.reducer;
