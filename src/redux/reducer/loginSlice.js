import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  token: [],
  error: null,
};

export const fetchToken = createAsyncThunk('login/fetchToken', (data) =>
  axios
    .post('https://forum-api.dicoding.dev/v1/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data.data.token;
    })
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchToken.pending, (state) => {
      console.log('pending');
      state.loading = true;
      state.token = null;
      state.error = null;
    }),
      builder.addCase(fetchToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
        state.error = null;
        console.log('login success');
      }),
      builder.addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
        console.log('reject');
      });
  },
});

export default loginSlice.reducer;
