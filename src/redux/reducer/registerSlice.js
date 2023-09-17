import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  message: "",
  data: null,
};

export const fetchRegisterData = createAsyncThunk("register/fetchRegisterData", (data) =>
  axios
    .post("https://forum-api.dicoding.dev/v1/register", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchRegisterData.pending);
    builder.addCase(fetchRegisterData.fulfilled, (state, { payload }) => {
      (state.status = payload.status),
        (state.message = payload.message),
        (state.data = payload.data.user),
        alert("register success");
    });
    builder.addCase(fetchRegisterData.rejected, ({ payload }) => alert(payload.message));
  },
});

export default registerSlice.reducer;
