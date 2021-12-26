import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";

export default configureStore({
  reducer: {
    auth,
  },
});
