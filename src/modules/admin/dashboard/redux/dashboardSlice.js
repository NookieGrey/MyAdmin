import {createSlice} from "@reduxjs/toolkit";

export const reducerName = "dashboard";

export const initialState = {
  calls: [],
  goods: [],
  users: [],
};

const reducers = {
  getDashboard: (state, action) => {
    state.calls = action.payload.calls.map(item => ({x: item.type, y: item.count}));
    state.goods = action.payload.goods.map(item => ({x: item.type, y: item.count}));
    
    const users = {};
    action.payload.users.forEach(user => {
      if (!users[user.type]) users[user.type] = [];
  
      users[user.type].push({x: user.year, y: user.count})
    });
    state.users = [
      users.admin,
      users.manager,
      users.operator,
    ];
  }
};

export const {reducer, actions: dashboardActions} = createSlice({
  initialState,
  reducers,
  name: reducerName
});
