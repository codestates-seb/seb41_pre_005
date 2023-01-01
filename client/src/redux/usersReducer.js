import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "", userId: "" };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
