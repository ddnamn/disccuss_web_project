import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";
import leaderboardsReducer from "./leaderboardsSlice";

const Store = configureStore({
  reducer: {
    threadState: threadsReducer,
    leaderboards: leaderboardsReducer,
  },
});

module.exports = Store;
