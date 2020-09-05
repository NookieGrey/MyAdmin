import { createSlice } from "@reduxjs/toolkit";

export const name = "auth";

export const initialState = {
  token: null,
};

const reducers = {
  setProfile(state, action) {
    state.user = action.payload;
  },
  signOut: () => initialState
};

export const { reducer, actions: authActions } = createSlice({
  initialState,
  reducers,
  name
});
