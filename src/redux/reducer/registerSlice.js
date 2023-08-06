import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  message: "",
  data: [],
};

export const fetchRegisterData = createAsyncThunk(
  "register/fetchRegisterData",
  (data) =>
    axios
      .post("https://forum-api.dicoding.dev/v1/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => console.log(res.data))
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchRegisterData.pending, () =>
      console.log("register proccess is pending")
    );
    builder.addCase(fetchRegisterData.fulfilled, (state, action) => {
      // (state.status = action.status),
      //   (state.message = action.message),
      //   (state.data = action.data.user);
      console.log("success to register");
    });
    builder.addCase(fetchRegisterData.rejected, (action) =>
      console.log("it seems error happen")
    );
  },
});

export default registerSlice.reducer;
