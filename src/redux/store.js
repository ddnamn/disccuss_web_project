import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './reducer/threadsSlice';
import leaderboardsReducer from './reducer/leaderboardsSlice';
import loginReducer from './reducer/loginSlice';
import registerReducer from '../redux/reducer/registerSlice';

const Store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    token: loginReducer,
    register: registerReducer,
  },
});

export default Store;
