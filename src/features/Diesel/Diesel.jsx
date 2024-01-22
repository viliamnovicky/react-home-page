import { useDieselAustriaData, useDieselGermanyData } from "./useDieselData";
import dieselBG from "../../img/icons/diesel.svg";

function Diesel() {
  const { isLoadingDieselGermany, dieselGermanyData, errorGermany } = useDieselGermanyData();
  const { isLoadingDieselAustria, dieselAustriaData, errorAustria } = useDieselAustriaData();

  return (
    <div className="diesel">
      {errorGermany && <p>fucking error</p>}
      {dieselGermanyData.stations.length > 0 && <h1 className="diesel__header">Germany</h1>}
      {dieselGermanyData.stations &&
        dieselGermanyData.stations.map((station) => (
          <p className="diesel__place" key={station.name + station.street}>
            {station.brand} {station.street}, {station.place}
            <span>{station.diesel}€</span>
          </p>
        ))}
      <h1 className="diesel__header">Austria</h1>
      {dieselAustriaData &&
        dieselAustriaData.map((station) => (
          <p className="diesel__place" key={station.name}>
            {station.name}
            <span>{station.prices[0] ? station.prices[0].amount : "?.???"}€</span>
          </p>
        ))}
      <img className="diesel__bg" src={dieselBG} alt="gasoline graphic" />
    </div>
  );
}

export default Diesel;
