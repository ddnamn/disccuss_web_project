import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://forum-api.dicoding.dev/v1";

const initialState = {
  threadsData: [],
  category: [],
};
// FETCH THREADS LIST
export const fetchThreads = createAsyncThunk("threads/fetchThreads", () =>
  axios
    .get(`${BASE_URL}/threads`)
    .then((response) => response.data.data.threads)
);
// POST THREAD
export const postThreads = createAsyncThunk("threads/postThreads", (data) => {
  axios.post(`${BASE_URL}/threads`, data, {
    headers: { Authorization: `Bearer ${data}` },
  });
});

//configure to fetchThreads data
const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.threadsData = action.payload;
      state.category = action.payload
        .filter((obj, index, self) => {
          // Filter hanya objek dengan title yang belum ada di x
          return (
            self.findIndex((item) => item.category === obj.category) === index
          );
        })
        .map((obj) => obj.category);
    }),
      builder.addCase(fetchThreads.rejected);
  },
});

export default threadSlice.reducer;
