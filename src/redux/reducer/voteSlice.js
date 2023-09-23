import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
};

const fetchVote = createAsyncThunk("vote/fetchVote", (data) => {
  axios.post(`https://forum-api.dicoding.dev/v1/threads/${data}/up-vote`, {
    headers: { Authorization: `Bearer ${data}` },
  });
});

const voteSlice = createSlice({
  name: "vote",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVote.fulfilled, () => {});
  },
});
