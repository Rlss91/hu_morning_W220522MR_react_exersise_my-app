import { createSlice } from "@reduxjs/toolkit";

const initialUserNameState = {
  username: "",
};

const userNameSlice = createSlice({
  name: "username",
  initialState: initialUserNameState,
  reducers: {
    addUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const usernameActions = userNameSlice.actions;
export default userNameSlice.reducer;
