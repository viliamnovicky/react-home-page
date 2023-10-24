import "../css/CryptoList.css";
import Crypto from "./Crypto";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Search from "./Search";
import Modal from "./Modal";
import CryptoModal from "./CryptoModal";

export default function CryptoList({ query, setQuery, error, setError, setOpenModal, children }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoModal, setCryptoModal] = useState(false);
  const [coinData, setCoinData] = useState([]);

  function handleSetCoinData(coin) {
    setCoinData(coin);
    console.log(coin);
  }

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
      <Search query={query} setQuery={setQuery} placeholder={"search coins..."} />

      {!error && cryptoData.length > 1 && (
        <div className="crypto__coins">
          {cryptoData.map((coin) => (
            <Crypto
              setOpenModal={setCryptoModal}
              coinData={coinData}
              setCoinData={setCoinData}
              coin={coin}
              key={coin.id}
              setError={setError}
            />
          ))}
        </div>
      )}
      {!error && cryptoData.length === 1 && (
        <div className="crypto__coins">
          {cryptoData.map((coin) => (
            <Crypto
              setOpenModal={setCryptoModal}
              coinData={coinData}
              setCoinData={setCoinData}
              coin={coin}
              key={coin.id}
              setError={setError}
            />
          ))}
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      {
        <Modal openModal={cryptoModal} setOpenModal={setCryptoModal}>
          <CryptoModal coinData={coinData}/>
        </Modal>
      }
    </>
  );
}
