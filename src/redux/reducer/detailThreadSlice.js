import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: null,
  status: "",
};

export const replyThread = createAsyncThunk(
  "detailThread/replyThread",
  async ({ id, content }, thunkAPI) => {
    try {
      const {
        authUser: { token },
      } = thunkAPI.getState();

      const response = await axios.post(
        `https://forum-api.dicoding.dev/v1/threads/${id}/comments`,
        JSON.stringify({ content }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      // kondisi ketika promise resolved dg status code >200 dan promise rejected
      if (error.response.data) return error.response.data;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDetailThread = createAsyncThunk(
  "detailThread/fetchDetailThread",
  async (threadId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://forum-api.dicoding.dev/v1/threads/${threadId}`
      );

      return response.data;
    } catch (error) {
      // kondisi ketika promise resolved dg status code >200 dan promise rejected
      if (error.response.data) return error.response.data;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const detailThreadSlice = createSlice({
  name: "detailThread",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailThread.fulfilled, (state, action) => {
      state.entities = action.payload.data.detailThread || null;
      state.status = action.payload.status;
      alert(action.payload.message);
    });
    builder.addCase(fetchDetailThread.rejected, (_, action) => {
      alert(action.payload);
    });
    builder.addCase(replyThread.fulfilled, (state, action) => {
      if (action.payload.status === "success") {
        state.entities.comments.push(action.payload.data.comment);
      }
      alert(action.payload.message);
    });
    builder.addCase(replyThread.rejected, (_, action) => {
      alert(action.payload);
    });
  },
});

export default detailThreadSlice.reducer;
