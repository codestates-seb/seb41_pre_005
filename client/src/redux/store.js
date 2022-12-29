import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersReducer";

const store = configureStore({
  reducer: userReducer,
});

export default store;
