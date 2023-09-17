import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://forum-api.dicoding.dev/v1";

const initialState = {
  entities: [],
  filteredEntities: [],
  loading: "idle",
  error: false,
};

// fetchThreads
const fetchThreads = createAsyncThunk("threads/fetchThreads", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/threads`);
    return response.data;
  } catch (error) {
    error.response.data;
  }
});

// upvote

// downvote

// neutralizevote

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    log: (state, action) => {
      console.log("what happens: ", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // ALL_THREADS
      .addCase(fetchThreads.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.entities = action.payload.data.threads;
        state.error = false;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = true;
        alert(action.payload.data.message);
      });
    // UP_VOTE
    // DOWN VOTE
  },
});

export default threadSlice.reducer;
export { fetchThreads };
export const { log } = threadSlice.actions;
