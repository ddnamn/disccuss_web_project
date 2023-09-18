import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./reducer/threadsSlice";
import usersReducer from "./reducer/usersSlice";
import categoriesReducer from "./reducer/categoriesSlice";
import leaderboardsReducer from "./reducer/leaderboardsSlice";
import loginReducer from "./reducer/loginSlice";
import registerReducer from "../redux/reducer/registerSlice";
import authUserReducer from "../redux/reducer/authUserSlice";

const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
    categories: categoriesReducer,
    token: loginReducer,
    register: registerReducer,
    authUser: authUserReducer,
  },
});

export default Store;
