import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { studioReducer } from "./slices/studio";

const store = configureStore({
  reducer: {
    auth: authReducer,
    studio: studioReducer,
  },
});

export default store;
