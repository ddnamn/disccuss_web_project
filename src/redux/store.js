import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./reducer/threadsSlice";
import leaderboardsReducer from "./reducer/leaderboardsSlice";
import loginReducer from "./reducer/loginSlice";
import registerReducer from "../redux/reducer/registerSlice";
import profileReducer from "../redux/reducer/profileSlice";

const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    token: loginReducer,
    register: registerReducer,
    profile: profileReducer,
  },
});

export default Store;
