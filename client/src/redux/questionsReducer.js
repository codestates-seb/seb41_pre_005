import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const questionSlice = createSlice({
  name: "questions",
  initialState: initialState,
  reducers: {
    storeQuestions: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeQuestions } = questionSlice.actions;
export default questionSlice.reducer;
