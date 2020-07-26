import { createSlice } from "@reduxjs/toolkit";

export const reducerName = "auth";

export const initialState = {
  token: null,
  user: null,
};

const reducers = {
  signIn: (state, action) => {
    state.token = action.payload;
  },
  setProfile: (state, action) => {
    state.user = action.payload;
  },
  signOut: () => initialState
};

export const { reducer, actions: authActions } = createSlice({
  initialState,
  reducers,
  name: reducerName
});
