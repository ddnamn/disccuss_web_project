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
    if (error.response.data) return error.response.data;
    return thunkAPI.rejectWithValue(error.message);
  }
});

// up Vote
const upVoteAsync = createAsyncThunk(
  "threads/upVoteAsync",
  async (threadId, { getState, dispatch, rejectWithValue }) => {
    const { threads, authUser } = getState();
    const token = authUser.token;
    const userId = authUser.profile.id;

    if (!token) return rejectWithValue("Login Dulu Yuk 😁");

    const thread = threads.entities.find((t) => t.id === threadId);
    const isVotedDown = thread.downVotesBy.includes(userId);
    const isVotedUp = thread.upVotesBy.includes(userId);

    if (isVotedUp) {
      try {
        const response = await axios.post(`${BASE_URL}/threads/${threadId}/neutral-vote`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return { message: response.data.message, userId, threadId, isVotedDown, isVotedUp };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/threads/${threadId}/up-vote`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return { message: response.data.message, userId, threadId, isVotedDown, isVotedUp };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

// down Vote
export const downVoteAsync = createAsyncThunk(
  "threads/downVoteAsync",
  async (threadId, { getState, dispatch, rejectWithValue }) => {
    const { threads, authUser } = getState();
    const token = authUser.token;
    const userId = authUser.profile.id;

    if (!token) return rejectWithValue("Login Dulu Yuk 😁");

    const thread = threads.entities.find((t) => t.id === threadId);
    const isVotedDown = thread.downVotesBy.includes(userId);
    const isVotedUp = thread.upVotesBy.includes(userId);

    if (isVotedDown) {
      try {
        const response = await axios.post(`${BASE_URL}/threads/${threadId}/neutral-vote`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return { message: response.data.message, userId, threadId, isVotedDown, isVotedUp };
      } catch (error) {
        if (error.response.data) return error.response.data;
        return rejectWithValue(error.message);
      }
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/threads/${threadId}/down-vote`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return { message: response.data.message, userId, threadId, isVotedDown, isVotedUp };
      } catch (error) {
        if (error.response.data) return error.response.data;
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addThread = createAsyncThunk(
  "threads/addThread",
  async (data, { dispatch, getState, rejectWithValue }) => {
    dispatch(log(data));
    try {
      const {
        authUser: { token },
      } = getState();

      if (token === null) return rejectWithValue("Login Dulu Ya 🥰");

      const response = await axios.post(`${BASE_URL}/threads`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      return rejectWithValue(error.message);
    }
  }
);

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    log: (state, action) => {
      console.log("log from async thunk => ", action.payload);
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
        state.error = action.error;
        alert(action.payload);
      })
      // UP_VOTE
      .addCase(
        upVoteAsync.fulfilled,
        (state, { payload: { userId, threadId, isVotedDown, isVotedUp, message } }) => {
          const threadIndex = state.entities.findIndex((t) => t.id === threadId);

          if (isVotedDown) {
            // kondisi from unlike to like
            const userIdIndex = state.entities[threadIndex].downVotesBy.findIndex((id) => id === userId);
            state.entities[threadIndex].downVotesBy.splice(userIdIndex, 1);
            state.entities[threadIndex].upVotesBy.push(userId);
          } else if (isVotedUp) {
            // kondisi from like to neutral
            const userIdIndex = state.entities[threadIndex].upVotesBy.findIndex((id) => id === userId);
            state.entities[threadIndex].upVotesBy.splice(userIdIndex, 1);
          } else {
            // kondisi pertama kali like
            state.entities[threadIndex].upVotesBy.push(userId);
          }
          alert(message);
        }
      )
      .addCase(upVoteAsync.rejected, (state, action) => {
        alert(action.payload);
      })
      // DOWN VOTE
      .addCase(
        downVoteAsync.fulfilled,
        (state, { payload: { userId, threadId, isVotedDown, isVotedUp, message } }) => {
          const threadIndex = state.entities.findIndex((t) => t.id === threadId);

          if (isVotedUp) {
            // kondisi from like to unlike
            const userIdIndex = state.entities[threadIndex].upVotesBy.findIndex((id) => id === userId);
            state.entities[threadIndex].upVotesBy.splice(userIdIndex, 1);
            state.entities[threadIndex].downVotesBy.push(userId);
          } else if (isVotedDown) {
            // kondisi from like to neutral
            const userIdIndex = state.entities[threadIndex].downVotesBy.findIndex((id) => id === userId);
            state.entities[threadIndex].downVotesBy.splice(userIdIndex, 1);
          } else {
            // kondisi pertama kali like
            state.entities[threadIndex].downVotesBy.push(userId);
          }
          alert(message);
        }
      )
      .addCase(downVoteAsync.rejected, (state, action) => {
        alert(action.payload);
      })
      // ADD THREAD
      .addCase(addThread.fulfilled, (state, action) => {
        // const thread = action.payload.data.thread;
        // if (Object.keys(thread).length !== 0) state.entities.push(user);
        // alert(action.payload.message);
        console.log("fullfilled scope");
        console.log(action.payload.message);
      })
      .addCase(addThread.rejected, (state, action) => {
        // alert(action.payload);
        console.log("rejected scope");
        console.log(action.payload);
      });
  },
});

export default threadSlice.reducer;
export { fetchThreads, upVoteAsync };
export const { log } = threadSlice.actions;
