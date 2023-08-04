// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const leaderboardsURL = "https://forum-api.dicoding.dev/v1/leaderboards";

// export const fetchThreads = createAsyncThunk(
//   "threads/fetchThreads",
//   async () => {
//     const url = "https://forum-api.dicoding.dev/v1/threads";
//     try {
//       const response = await axios.get(url);
//       return response.data.threads;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const fetchAllUsers = createAsyncThunk(
//   "AllUsers/fetchAllUsers",
//   async () => {
//     const url = "https://forum-api.dicoding.dev/v1/users";
//     try {
//       const response = await axios.get(url);
//       return response.data.users;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const fetchLearderboards = createAsyncThunk(
//   "leaderboards/fetchLearderboards",
//   async () => {
//     try {
//       const response = await axios.get(leaderboardsURL);
//       return response.data.leaderboards;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const fetchToken = createAsyncThunk("login/fetchToken", async () => {
//   const url = "https://forum-api.dicoding.dev/v1/login";

//   try {
//     const response = await axios.post(
//       url,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch {}
// });
