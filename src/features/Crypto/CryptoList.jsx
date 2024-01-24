import "../../css/CryptoList.css";
import Search from "../../components/Search";
import CryptoCoin from "./CryptoCoin";
import { useCryptoData } from "./useCryptoData";
import { useState } from "react";
import CryptoModal from "../../components/CryptoModal";
import Modal from "../../ui/Modal"

function CryptoList({ query, setQuery }) {
  const { isLoading, cryptoData } = useCryptoData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [coinId, setCoinId] = useState("")

  function handleOpenModal(coin) {
    setIsOpenModal(true);
    setCoinId(coin.id)
    console.log(isOpenModal)
    console.log(coin.id)
  }

  return (
    <>
      <Search query={query} setQuery={setQuery} placeholder={"search coins..."} />
      <div className="crypto__coins">
        {!cryptoData && <div>fuck it</div>}
        {cryptoData &&
          cryptoData.map((coin) => (
            <CryptoCoin coin={coin} key={coin.id} onClick={() => handleOpenModal(coin)} />
          ))}
      </div>
      {isOpenModal && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
    </>
  );
}

export default CryptoList;
