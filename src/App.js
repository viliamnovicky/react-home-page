import { useState } from "react";
import CryptoList from "./components/CryptoList"
import Weather from "./components/Weather";
import DieselPrice from "./components/DieselPrice";
import Modal from "./components/Modal";

function App() {
  const [cryptoQuery, setCryptoQuery] = useState("")
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(true)
  return (
    <div className="App">
      <CryptoList query={cryptoQuery} setQuery={setCryptoQuery} error={error} setError={setError} setOpenModal={setOpenModal}/>
      <Weather error={error} setError={setError}/>
      <DieselPrice error={error} setError={setError}/>
      <Modal openModal={openModal} setOpenModal={setOpenModal}></Modal>
    </div>
  );
}

export default App;
