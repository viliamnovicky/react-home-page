import { useState } from "react";
import "../css/Crypto.css";

export default function Crypto({ coin, setOpenModal, setCryptoData, setModalId, modalId, setError, coinData, setCoinModalData }) {

  async function fetchCoinData(id) {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = await res.json();
      if (data.error) return;
      setCoinModalData([data]);
      console.log(data)
    } catch (err) {
      if (err.name !== "AbortError") setError(err.message);
    }
  }

  function handleSetCoinData(coin) {
    setCryptoData(coin.id);
    fetchCoinData(coin.id)
    setOpenModal(true)
  }

  return (
    <div className="crypto__coin" id={coin.id} data-position={coin.market_cap_rank} onClick={() => handleSetCoinData(coin)}>
      <h1 className="crypto__header">
        #{coin.market_cap_rank} {coin.symbol.toUpperCase()}
      </h1>
      <h3 className="crypto__paragraph">Actual price: <span>{coin.current_price ? parseFloat(coin.current_price).toFixed(2) : parseFloat(coin.market_data.current_price.usd).toFixed(2)} $</span></h3>

      {coin.price_change_percentage_24h <= 0 ? (
        <h3 className="crypto__paragraph red">
          Difference (24h): <span> {coin.price_change_percentage_24h ? parseFloat(coin.price_change_percentage_24h).toFixed(2) : parseFloat(coin.market_data.price_change_percentage_24h).toFixed(2)} %</span>
        </h3>
      ) : (
        <h3 className="crypto__paragraph green">
          Difference (24h): <span> {coin.price_change_percentage_24h ? parseFloat(coin.price_change_percentage_24h).toFixed(2) : parseFloat(coin.market_data.price_change_percentage_24h).toFixed(2)} %</span>
        </h3>
      )}
      <h3 className="crypto__paragraph">ATH: <span>{ coin.ath ? parseFloat(coin.ath) : parseFloat(coin.market_data.ath.usd).toFixed(2)} $</span></h3>
      <img className="crypto__img" src={!coin.image.large ? coin.image : coin.image.large} alt={coin.id} width="100px" />
    </div>
  );
}
