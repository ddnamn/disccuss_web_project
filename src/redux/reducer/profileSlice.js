import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  profileData: [],
};

export const fetchProfile = createAsyncThunk("profile/fetchProfile", (data) =>
  axios
    .get("https://forum-api.dicoding.dev/v1/users/me", {
      headers: { Authorization: `Bearer ${data}` },
    })
    .then((res) => res.data.data.user)
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.profileData = payload;
    });
  },
});

export default profileSlice.reducer;
