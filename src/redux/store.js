import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./reducer/threadsSlice";
import usersReducer from "./reducer/usersSlice";
import categoriesReducer from "./reducer/categoriesSlice";
import leaderboardsReducer from "./reducer/leaderboardsSlice";
import loginReducer from "./reducer/loginSlice";
import registerReducer from "../redux/reducer/registerSlice";
import authUserReducer from "../redux/reducer/authUserSlice";
import detailThreadReducer from "./reducer/detailThreadSlice";

const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    users: usersReducer,
    categories: categoriesReducer,
    token: loginReducer,
    register: registerReducer,
    authUser: authUserReducer,
    detailThread: detailThreadReducer,
  },
});

export default Store;
