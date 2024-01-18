import {useState, useEffect } from "react";
import CryptoModalStat from "./CryptoModalStat";
import ErrorMessage from "./ErrorMessage";
import "../css/Modal.css";
import { useCoinData } from "../features/Crypto/useCryptoData";

export default function CryptoModal({setError, children, error, coinModalData }) {
  const {isLoading, coinData} = useCoinData(coinModalData)
  console.log(coinData)
  
  return (
    <div className="crypto__modal">
      {!coinData && <div>fuck it</div>}
      {coinData && (
        <>
          <h1 className="header">
            #{coinData.market_cap_rank} {coinData.id}
          </h1>
          <div className="crypto__modal-stats">
            <CryptoModalStat
              text="Actual price:"
              data={coinData.market_data.current_price.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Highest price (24h):"
              data={coinData.market_data.ath.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Max. supply:"
              data={
                coinData.market_data.max_supply
                  ? coinData.market_data.max_supply
                  : "Unknown"
              }
            />
            <CryptoModalStat text="ATH:" data={coinData.market_data.ath.usd} unit={"$"} />
            <CryptoModalStat
              text="Lowest price (24h):"
              data={coinData.market_data.low_24h.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Total supply:"
              data={coinData.market_data.total_supply.toFixed(0)}
              unit={coinData.symbol}
            />
            <CryptoModalStat
              text="ATL:"
              data={coinData.market_data.atl.usd.toFixed(2)}
              unit={"$"}
            />
            <CryptoModalStat
              text="Price change (24h):"
              data={coinData.market_data.price_change_24h.toFixed(2)}
              unit={"$"}
            />
            <CryptoModalStat
              text="Market cap:"
              data={coinData.market_data.market_cap.usd}
              unit={"$"}
            />
          </div>
        </>
      )}
    </div>
  );
}
