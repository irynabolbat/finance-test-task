import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
  name: "webSocket",
  initialState: {
    connect: false,
  },
  reducers: {
    socketConnect: (state) => {
      state.connect = true;
    },
    socketDisconnect: (state) => {
      state.connect = false;
    },
    send: () => {},
  },
})
export const { socketConnect, socketDisconnect, send } = socketSlice.actions;

export default socketSlice.reducer;