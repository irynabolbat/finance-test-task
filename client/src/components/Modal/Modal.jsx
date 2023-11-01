import "./Modal.css";
import moment from 'moment';
import nasdaq from "../../images/nasdaq.png";

export const Modal = ({active, setActive, ticker, image}) => {
  const windowClass = active ? 'modal active' : 'modal';
  const contentClass = active ? 'modal_content active' : 'modal_content';

  return (
    <div className={windowClass} onClick={() => setActive(!active)}>
      <div 
        className={contentClass}
        onClick={e => e.stopPropagation()}
      >
        <div className="close_icon" onClick={() => setActive(false)}>
            X
        </div>

        <h3 className="details_container">
          {`From ${ticker.ticker}`} 
          <img src={image} className="image" alt={ticker.ticker} /> 
          {`to ${ticker.exchange}`}
          <img src={nasdaq} className="image" alt={ticker.exchange} />
        </h3>
        <p>{`Price: ${ticker.price} $`}</p>
        <p>{`Change: ${ticker.change} $`}</p>
        <p>{`Change percent: ${ticker.change_percent} %`}</p>
        <p>{`Dividend: ${ticker.dividend} $`}</p>
        <p>{`Yield: ${ticker.yield} %`}</p>
        <p>{`Last trade time: ${moment(ticker.last_trade_time).format("DD.MM.YY HH:mm:ss")}`}</p>
      </div>
    </div>
  )
}