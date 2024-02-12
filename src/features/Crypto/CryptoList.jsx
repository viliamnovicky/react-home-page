import "../../css/CryptoList.css";
import Search from "../../ui/Search";
import CryptoCoin from "./CryptoCoin";
import { useCryptoData } from "./useCryptoData";
import { useState } from "react";
import CryptoModal from "./CryptoModal";
import Modal from "../../ui/Modal";

function CryptoList({ query, setQuery }) {
  const { isLoading, cryptoData } = useCryptoData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [coin, setCoin] = useState("");

  function handleOpenModal(coin) {
    setIsOpenModal(true);
    setCoin(coin);
  }

  return (
    <>
      <Search query={query} setQuery={setQuery} placeholder={"search coins..."} />

      {query.length === 0 && (
        <div className="crypto__coins">
          {!cryptoData && <div>fuck it</div>}
          {cryptoData &&
            cryptoData.map((coin) => (
              <CryptoCoin coin={coin} key={coin.id} onClick={() => handleOpenModal(coin)} />
            ))}
        </div>
      )}
      {query.length > 0 && <div className="crypto__coins">
          {!cryptoData && <div>fuck it</div>}
          {cryptoData &&
            cryptoData.map((coin) => (coin.id.includes(query) || coin.symbol.includes(query)) && (
              <CryptoCoin coin={coin} key={coin.id} onClick={() => handleOpenModal(coin)} />
            ))}
        </div>}
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <CryptoModal coin={coin}>
            <p>{coin.id}</p>
          </CryptoModal>
        </Modal>
      )}
    </>
  );
}

export default CryptoList;
