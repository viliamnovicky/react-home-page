import { useEffect, useState } from "react"

export default function CryptoModal({coinData, setError}) {
    const [coinModalData, setCoinModalData] = useState("")

    useEffect(
        function () {
          
          const controller = new AbortController();
    
          async function fetchCoinData() {
            try {
              const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinData}`);
              const data = await res.json();
              if (data.error) return;
              setCoinModalData([data]);
              console.log(coinModalData)
            } catch (err) {
              if (err.name !== "AbortError") setError(err.message);
            }
          }
          fetchCoinData();
          return function () {
            controller.abort();
          };
        },
        [coinData]
      );
    return(
        <div className="crypto__modal">
            <h1 className="header">#{coinModalData[0].market_cap_rank} {coinModalData[0].id}</h1>
            <div className="crypto__modal-stats">
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
                <div className="crypto__modal-stat">asd</div>
            </div>
        </div>
    )
}