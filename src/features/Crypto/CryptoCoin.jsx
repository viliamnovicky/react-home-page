import "../../css/Crypto.css";

function CryptoCoin({ coin, onClick }) {
  
  return (
    <div
      className="crypto__coin"
      id={coin.id}
      data-position={coin.market_cap_rank}
      onClick={onClick}
    >
      <h1 className="crypto__header">
        #{coin.market_cap_rank} {coin.symbol.toUpperCase()}
      </h1>
      <h3 className="crypto__paragraph">
        Actual price:{" "}
        <span>
          {coin.current_price
            ? parseFloat(coin.current_price).toFixed(2)
            : parseFloat(coin.market_data.current_price.usd).toFixed(2)}{" "}
          $
        </span>
      </h3>

      {coin.price_change_percentage_24h <= 0 ? (
        <h3 className="crypto__paragraph red">
          Difference (24h):{" "}
          <span>
            {" "}
            {coin.price_change_percentage_24h
              ? parseFloat(coin.price_change_percentage_24h).toFixed(2)
              : parseFloat(coin.market_data.price_change_percentage_24h).toFixed(2)}{" "}
            %
          </span>
        </h3>
      ) : (
        <h3 className="crypto__paragraph green">
          Difference (24h):{" "}
          <span>
            {" "}
            {coin.price_change_percentage_24h
              ? parseFloat(coin.price_change_percentage_24h).toFixed(2)
              : parseFloat(coin.market_data.price_change_percentage_24h).toFixed(2)}{" "}
            %
          </span>
        </h3>
      )}
      <h3 className="crypto__paragraph">
        ATH:{" "}
        <span>
          {coin.ath ? parseFloat(coin.ath) : parseFloat(coin.market_data.ath.usd).toFixed(2)} $
        </span>
      </h3>
      <img
        className="crypto__img"
        src={!coin.image.large ? coin.image : coin.image.large}
        alt={coin.id}
        width="100px"
      />
    </div>
  );
}

export default CryptoCoin;
