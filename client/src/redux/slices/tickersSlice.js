import { createSlice } from '@reduxjs/toolkit';

export const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    tickers: [],
  },
  reducers: {
    addTickers: (state, action) => {
      state.tickers = action.payload;
    },
  },
})

export const { addTickers } = tickersSlice.actions;

export default tickersSlice.reducer;