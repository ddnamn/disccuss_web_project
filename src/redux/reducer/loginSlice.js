import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  token: [],
  error: null,
};

export const fetchToken = createAsyncThunk('login/fetchToken', async (data) => {
  return axios
    .post('https://forum-api.dicoding.dev/v1/login', { data })
    .then((response) => console.log(response.data.data.token));
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchToken.pending, (state) => {
      state.loading = true;
      state.token = null;
      state.error = null;
    }),
      builder.addCase(fetchToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
