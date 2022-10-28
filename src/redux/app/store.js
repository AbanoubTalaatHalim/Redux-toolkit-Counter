import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import usersReducer from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
