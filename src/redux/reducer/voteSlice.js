import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://forum-api.dicoding.dev/v1";
//initial State
const initialState = {
  data: null,
};
// thunk
const fetchVote = createAsyncThunk("vote/fetchVote", (data) => {
  axios.post(`${BASE_URL}/threads/${data}/up-vote`, {
    headers: { Authorization: `Bearer ${data}` },
  });
});
// reducer
const voteSlice = createSlice({
  name: "vote",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVote.fulfilled, () => {});
  },
});
