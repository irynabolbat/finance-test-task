import { useEffect, useState } from "react";
import { Ticker } from "../Ticker/Ticker";
import "./TicketsList.css";
import { useSelector, useDispatch } from 'react-redux';
import { send, socketConnect, socketDisconnect } from "../../redux/slices/socketSlice";

export const TicketsList = () => {
  const [prevTickerPrice, setPrevTickerPrice] = useState(0);

  const { tickers } = useSelector((state) => state.tickers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(socketConnect());

    dispatch(send({ type: 'tickers' }));

    return () => {
      dispatch(socketDisconnect());
    }
  }, []);

  useEffect(() => {
    if (tickers.length > 0) {
      setPrevTickerPrice(tickers[0].price);
    }
  }, [tickers]);

  return (
    <div>
      <ul className="list">
        {tickers.map(ticker => (
          <li key={ticker.ticker}>
            <Ticker ticker={ticker} different={(ticker.price - prevTickerPrice)} />
          </li>
        ))}
      </ul>
    </div>
  )
}