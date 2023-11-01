import { configureStore } from '@reduxjs/toolkit';
import socketReducer from './slices/socketSlice.js';
import tickersReducer from './slices/tickersSlice.js';
import { webSocketMiddleware } from './middleware.js';

const store = configureStore({
  reducer: {
    webSocket: socketReducer,
    tickers: tickersReducer,
  },
  middleware: [webSocketMiddleware],
})

export default store;
