import "../css/Crypto.css";

export default function Crypto({ coin }) {
  return (
    <div className="crypto__coin" id={coin.id} data-position={coin.market_cap_rank}>
      <h1 className="crypto__header">
        #{coin.market_cap_rank} {coin.symbol.toUpperCase()}
      </h1>
      <h3 className="crypto__paragraph">Actual price: <span>{parseFloat(coin.current_price).toFixed(2)}$</span></h3>

      {coin.price_change_percentage_24h <= 0 ? (
        <h3 className="crypto__paragraph red">
          Difference (24h): <span> {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</span>
        </h3>
      ) : (
        <h3 className="crypto__paragraph green">
          Difference (24h): <span> {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</span>
        </h3>
      )}
      <h3 className="crypto__paragraph">ATH: <span>{parseFloat(coin.ath)}$</span></h3>
      <img className="crypto__img" src={coin.image} alt={coin.id} width="100px" />
    </div>
  );
}
