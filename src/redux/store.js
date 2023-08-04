import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";
import leaderboardsReducer from "./leaderboardsSlice";

const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
  },
});

export default Store;
