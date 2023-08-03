import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getThreads = createAsyncThunk("threads/fetchThreads", async () => {
  const url = "https://forum-api.dicoding.dev/v1/threads";
  try {
    const response = await axios.get(url);
    return response.data.threads;
  } catch (error) {
    console.error(error);
  }
});

export const getAllUsers = createAsyncThunk(
  "AllUsers/fetchAllUsers",
  async () => {
    const url = "https://forum-api.dicoding.dev/v1/users";
    try {
      const response = await axios.get(url);
      return response.data.users;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getLeaderboards = createAsyncThunk(
  "leaderboards/fetchLearderboards",
  async () => {
    const url = "https://forum-api.dicoding.dev/v1/leaderboards";

    async () => {
      const response = await axios.get(url);
      return response.data.leaderboards;
    };
  }
);

export const getToken = createAsyncThunk("login/fetchToken", async () => {
  const url = "https://forum-api.dicoding.dev/v1/login";

  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch {}
});
