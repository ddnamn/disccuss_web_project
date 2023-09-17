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

// up Vote
const upVoteAsync = createAsyncThunk("threads/upVoteAsync", async (threadId, { getState, dispatch }) => {
  const { threads, token, register } = getState();
  const authUserId = register.data.id; // something wrong
  dispatch(log(authUserId));
  const accessToken = token; //undefined
  const thread = threads.entities.find((t) => t.id === threadId);
  const isVotedDown = thread.downVotesBy.includes((id) => id === authUserId); // true/flase
  const isVotedUp = thread.upVotesBy.includes((id) => id === authUserId); // true/flase

  // if (isVotedUp) {
  //   try {
  //     await axios.post(`${BASE_URL${thread}}/s/${thread}/neutral-vote`, null, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return { authUserId, threadId, isVotedDown, isVotedUp };
  //   } catch (error) {
  //     return error.response.data;
  //   }
  // } else {
  // try {
  //   await axios.post(`${BASE_URL}/threads/${thread}/up-vote`, null, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   return { authUserId, threadId, isVotedDown, isVotedUp };
  // } catch (error) {
  //   return error.response.data;
  // }
  // }
});

// down Vote

const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    log: (state, action) => {
      console.log("=> ", action.payload);
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
    // .addCase(upVoteAsync.fulfilled, (state, { payload: { authUserId, threadId, isVotedDown, isVotedUp } }) => {
    //   const threadIndex = state.entities.findIndex((t) => t.id === threadId);

    //   if (isVotedDown) {
    //     const userIdIndex = state.entities[threadIndex].downVotesBy.findIndex((id) => id === authUserId);
    //     state.entities[threadIndex].downVotesBy.splice(userIdIndex, 1);
    //     state.entities[threadIndex].upVotesBy.push(authUserId);
    //   } else if (isVotedUp) {
    //     const userIdIndex = state.entities[threadIndex].upVotesBy.findIndex((id) => id === authUserId);
    //     state.entities[threadIndex].upVotesBy.splice(userIdIndex, 1);
    //   } else {
    //     state.entities[threadIndex].upVotesBy.push(authUserId);
    //   }
    // })
    // .addCase(upVoteAsync.rejected, (state, action) => {
    //   alert(action.payload.message);
    // });
    // DOWN VOTE
  },
});

export default threadSlice.reducer;
export { fetchThreads, upVoteAsync };
export const { log } = threadSlice.actions;
