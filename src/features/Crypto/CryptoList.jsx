import "../../css/CryptoList.css";
import Search from "../../components/Search";
import CryptoCoin from "./CryptoCoin";
import { useCryptoData } from "./useCryptoData";

function CryptoList({query, setQuery}) {
    const {isLoading, cryptoData} = useCryptoData()

  return (
    <>
      <Search query={query} setQuery={setQuery} placeholder={"search coins..."} />
      <div className="crypto__coins">
        {cryptoData && cryptoData.map((coin) => (
          <CryptoCoin      
            coin={coin}
            key={coin.id}
          />
        ))}
      </div>
      )
    </>
  );
}

export default CryptoList;
