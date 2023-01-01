import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "", userId: "", qeustionId: "" };
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
