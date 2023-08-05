import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./reducer/threadsSlice";
import leaderboardsReducer from "./reducer/leaderboardsSlice";
import loginReducer from "./reducer/loginSlice";
const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    token: loginReducer,
  },
});

export default Store;
