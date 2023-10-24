import { useState } from "react";
import CryptoList from "./components/CryptoList"
import Weather from "./components/Weather";
import DieselPrice from "./components/DieselPrice";

function App() {
  const [cryptoQuery, setCryptoQuery] = useState("")
  const [error, setError] = useState("");

  return (
    <div className="App">
      <CryptoList query={cryptoQuery} setQuery={setCryptoQuery} error={error} setError={setError}/>
      <Weather error={error} setError={setError}/>
      <DieselPrice error={error} setError={setError}/>
    </div>
  );
}

export default App;
