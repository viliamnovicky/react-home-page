import { useState } from "react";
import CryptoList from "./components/CryptoList"
import Search from "./components/Search";
import Weather from "./components/Weather";
import DieselPrice from "./components/DieselPrice";
import WeatherData from "./components/WeatherData";
import ErrorMessage from "./components/ErrorMessage";

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
