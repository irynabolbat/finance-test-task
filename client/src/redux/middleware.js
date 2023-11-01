import { io } from "socket.io-client";
import { addTickers } from "./slices/tickersSlice";

let socket;

export const webSocketMiddleware =(store) => {
  return (next) => {
    return(action) => {
      const webSocketState = store.getState().webSocket;

      if (!socket && webSocketState.connect === true) {
        socket = io("http://localhost:4000")
        
        socket
          .on("connect", () => {
            socket.emit("start");
            if (webSocketState.connect === false) {
              socket.disconnect();
            }
          })
          .on("connection_error", () => {
            throw new Error("Connection error");
          })
          .on("ticker", (tickers) => {
            store.dispatch(addTickers(tickers));
          })
      }
      next(action)
    }
  }
}