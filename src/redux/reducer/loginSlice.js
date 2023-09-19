import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  token: [],
  profileData: [],
};
//FETCH PROFILE DATA
export const fetchProfile = createAsyncThunk("profile/fetchProfile", (data) =>
  axios
    .get("https://forum-api.dicoding.dev/v1/users/me", {
      headers: { Authorization: `Bearer ${data}` },
    })
    .then((res) => res.data.data.user)
);

//FETCH TOKEN
export const fetchToken = createAsyncThunk(
  "login/fetchToken",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://forum-api.dicoding.dev/v1/login",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      thunkAPI.dispatch(fetchProfile(response.data.data.token));
      // console.log(response.data.data.token);
      return response.data.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// res.data.data.token

const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.token = null;
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
        state.error = null;
        alert("login success");
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.profileData = payload;
      });
  },
});

export default loginSlice.reducer;
