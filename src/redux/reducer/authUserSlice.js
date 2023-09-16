import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle", // "pending" "fulfilled" "rejected"
  token: null,
  user: null,
  error: false,
};

// register
const register = createAsyncThunk("authUser/register", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      "https://forum-api.dicoding.dev/v1/register",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.user;
  } catch (error) {
    // status code is outside 200
    return error.response.data.message;
  }
});

// login
const login = createAsyncThunk("authUser/login", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      "https://forum-api.dicoding.dev/v1/login",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    thunkAPI.dispatch(getProfile(response.data.data.token));
    return response.data.data.token;
  } catch (error) {
    return error.response.data.message;
  }
});

// getProfile
const getProfile = createAsyncThunk("authUser/getProfile", async (data) => {
  try {
    const response = await axios.get("https://forum-api.dicoding.dev/v1/users/me", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });

    return response.data.data.user;
  } catch (error) {
    return error.response.data.message;
  }
});

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // authUser/register
    builder.addCase(register.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.error = false;
      state.user = action.payload;
      alert("register success !");
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = true;
      alert(action.payload);
    });
    // authUser/login
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.error = false;
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = true;
      alert(action.payload);
    });
    // authUser/getProfile
    builder.addCase(getProfile.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.error = false;
      state.user = action.payload;
      alert("login success !");
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = true;
      alert(action.payload);
    });
  },
});

export default authUserSlice.reducer;
export { login, register, getProfile };
export const { logout } = authUserSlice.actions;
