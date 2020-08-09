import {createSlice} from "@reduxjs/toolkit";

export const reducerName = "users";

export const initialState = {
  list: [],
  pageCount: 0,
  current: 1,
  item: {
    name: "",
    role: null,
  },
};

const reducers = {
  getList: (state, action) => {
    state.list = action.payload.list;
    state.totalCount = action.payload.totalCount;
    state.current = action.payload.current;
  },
  getItem: (state, action) => {
    state.item = action.payload;
  },
  clearItem: (state) => {
    state.item = initialState.item;
  }
};

export const {reducer, actions: usersActions} = createSlice({
  initialState,
  reducers,
  name: reducerName
});
