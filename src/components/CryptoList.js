import "../css/CryptoList.css";
import Crypto from "./Crypto";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";

export default function CryptoList({ query, setQuery, error, setError, children }) {
  const [cryptoData, setCryptoData] = useState([]);

  if (query.length > 3) {
  }

  useEffect(
    function () {
      if (query.length > 3) return;
      const controller = new AbortController();

      async function fetchCryptoData() {
        try {
          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`
          );
          const data = await res.json();
          setCryptoData(data);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        }
      }
      fetchCryptoData();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(
    function () {
      if (query.length <= 3) return;
      const controller = new AbortController();

      async function fetchCoinData() {
        try {
          const res = await fetch(`https://api.coingecko.com/api/v3/coins/${query}`);
          const data = await res.json();
          if (data.error) return;
          setCryptoData([data]);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        }
      }
      fetchCoinData();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      
      
      <Search query={query} setQuery={setQuery} placeholder={"search coins..."}/>

      {!error && (
        <div className="crypto__coins">
          {cryptoData.map((coin) => (
            <Crypto coin={coin} key={coin.id} />
          ))}
        </div>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
