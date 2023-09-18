import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://forum-api.dicoding.dev/v1";

const initialState = {
  profile: {},
  token: null,
};

export const getProfile = createAsyncThunk("authUser/getProfile", async (token, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("authUser/login", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    thunkAPI.dispatch(getProfile(response.data.data.token));

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk("authUser/register", async (data, thunkAPI) => {
  // scene 1 | register page -> login page
  try {
    const response = await axios.post(`${BASE_URL}/register`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    log: (state, action) => {
      console.log("response.data: ", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        alert(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        console.log(`Error : ${action.payload}`);
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload.data.user;
        alert(action.payload.message);
      })
      .addCase(getProfile.rejected, (state, action) => {
        console.log(`Error : ${action.payload}`);
      })
      // scene 1 | register page -> login page
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.profile = action.payload.data.user ? action.payload.data.user : null;
        alert(action.payload.message);
      })
      .addCase(register.rejected, (state, action) => {
        alert(action.payload);
      });
  },
});

export default authUserSlice.reducer;
export const { log } = authUserSlice.actions;
