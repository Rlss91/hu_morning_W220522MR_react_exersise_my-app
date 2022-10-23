import { configureStore } from "@reduxjs/toolkit";

import usernameReducer from "./userName";

const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});

export default store;
