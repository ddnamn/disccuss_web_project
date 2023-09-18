import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  token: null,
  error: null,
};

export const fetchToken = createAsyncThunk("login/fetchToken", (data) =>
  axios
    .post("https://forum-api.dicoding.dev/v1/login", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data.data.token)
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchToken.pending, (state) => {
      state.loading = true;
      state.token = null;
      state.error = null;
    }),
      builder.addCase(fetchToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
        state.error = null;
        alert("login success");
      }),
      builder.addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
