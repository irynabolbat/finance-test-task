import "./Ticker.css";
import apple from "../../images/apple.png";
import google from "../../images/google.png";
import msft from "../../images/msft.png";
import amazon from "../../images/amzn.png";
import fb from "../../images/fb.png";
import tesla from "../../images/tsla.png";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const Ticker = ({ ticker, different }) => {
  const [isModal, setIsModal] = useState(false);

  let image;

  switch (ticker.ticker) {
    case "AAPL": 
      image = apple;
      break;

    case "GOOGL": 
      image = google;
      break;

    case "MSFT": 
      image = msft;
      break;

    case "AMZN": 
      image = amazon;
      break;

    case "FB": 
      image = fb;
      break;

    case "TSLA": 
      image = tesla;
      break;

    default:
      break;
  }

  const arrow = ticker.change_percent > 0.5 ? '↑' : '↓';
  const statusColor = ticker.change_percent > 0.5 ? 'green' : 'red';

  const difNumber = different === 0 ? different.toFixed(0) : different.toFixed(2);
  const symbol = different > 0 ? '+' : '';
  const difClassName = different >= 0 ? 'green_text' : 'red_text';

  return (
    <div className="ticker_wrapper" onClick={() => setIsModal(true)}>
      <div className="ticker_container">
        <img src={image} alt={ticker.ticker} className="ticker_image" />
        <p>{ticker.ticker}</p>
      </div>

      <div className="ticker_info">{`${ticker.price} $`}</div>
      <div className={`ticker_info ${difClassName}`}>{`${symbol}${difNumber} $`}</div>
      <div className={statusColor}>{`${arrow} ${ticker.change_percent} %`}</div>

      <Modal active={isModal} setActive={setIsModal} ticker={ticker} image={image} />
    </div>
  )
}