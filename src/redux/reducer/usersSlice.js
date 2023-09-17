import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: "idle",
  error: false,
};

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`https://forum-api.dicoding.dev/v1/users`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload.data.users;
        state.loading = "fulfilled";
        state.error = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = true;
        alert(action.payload.data.message);
      });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
