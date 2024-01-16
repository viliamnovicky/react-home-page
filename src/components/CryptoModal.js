import {useState, useEffect } from "react";
import CryptoModalStat from "./CryptoModalStat";
import ErrorMessage from "./ErrorMessage";

export default function CryptoModal({setError, children, error, coinModalData }) {


  return (
    <div className="crypto__modal">
      {/* {error && <ErrorMessage message={error} />}
      {!coinModalData && <ErrorMessage message={"No data"} />}
      {!error && coinModalData[0] && (
        <>
          <h1 className="header">
            #{coinModalData[0].market_cap_rank} {coinModalData[0].id}
          </h1>
          <div className="crypto__modal-stats">
            <CryptoModalStat
              text="Actual price:"
              data={coinModalData[0].market_data.current_price.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Highest price (24h):"
              data={coinModalData[0].market_data.ath.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Max. supply:"
              data={
                coinModalData[0].market_data.max_supply
                  ? coinModalData[0].market_data.max_supply
                  : "Unknown"
              }
            />
            <CryptoModalStat text="ATH:" data={coinModalData[0].market_data.ath.usd} unit={"$"} />
            <CryptoModalStat
              text="Lowest price (24h):"
              data={coinModalData[0].market_data.low_24h.usd}
              unit={"$"}
            />
            <CryptoModalStat
              text="Total supply:"
              data={coinModalData[0].market_data.total_supply.toFixed(0)}
              unit={coinModalData[0].symbol}
            />
            <CryptoModalStat
              text="ATL:"
              data={coinModalData[0].market_data.atl.usd.toFixed(2)}
              unit={"$"}
            />
            <CryptoModalStat
              text="Price change (24h):"
              data={coinModalData[0].market_data.price_change_24h.toFixed(2)}
              unit={"$"}
            />
            <CryptoModalStat
              text="Market cap:"
              data={coinModalData[0].market_data.market_cap.usd}
              unit={"$"}
            />
          </div>
        </>
      )} */}
    </div>
  );
}
