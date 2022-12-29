import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsReducer";
import userReducer from "./usersReducer";

const store = configureStore({
  reducer: { questions: questionsReducer, currentUser: userReducer },
});

export default store;
