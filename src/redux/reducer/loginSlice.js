import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: [],
  error: null,
};

export const fetchToken = createAsyncThunk("login/fetchToken", (data) =>
  axios
    .post("https://forum-api.dicoding.dev/v1/login", data)
    .then((res) => console.log(res.data.data.token))
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
        state.token = payload.payload;
        state.error = null;
        console.log("login success");
      }),
      builder.addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
