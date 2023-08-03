import { createSlice } from "@reduxjs/toolkit";
import { getLeaderboards } from "../utils/getData";

const initialState = {
  leaderboardsData: [],
};

const getLeaderboards = getLeaderboards();

const leaderboardsSlice = createSlice({
  name: "leaderboards",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLeaderboards.fulfilled, (state, action) => {
      state.leaderboardsData = action.payload;
    });
    builder.addCase(getLeaderboards.rejected, (action) => {
      console.log("get data rejected");
      console.log(action.payload);
    });
  },
});

module.exports = leaderboardsSlice.reducer;
// module.exports.action = leaderboardsSlice.actions
