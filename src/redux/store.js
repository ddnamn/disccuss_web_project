import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";
import leaderboardsReducer from "./leaderboardsSlice";
import loginReducer from "./loginSlice";
const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    token: loginReducer,
  },
});

export default Store;
