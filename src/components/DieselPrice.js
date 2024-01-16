import "../css/Diesel.css";
import dieselBG from "../img/icons/diesel.svg";
import { useEffect, useState } from "react";

export default function DieselPrice({ error, setError }) {
  const [dieselGermanyPrice, setDieselGermanyPrice] = useState([]);
  const [dieselAustriaPrice, setAustriaDieselPrice] = useState([]);
  useEffect(function () {
    const controller = new AbortController();
    async function fetchGermanyDieselPrice() {
      try {
        const res = await fetch(
          `https://creativecommons.tankerkoenig.de/json/list.php?lat=47.390&lng=11.255&rad=50&sort=dist&type=all&apikey=b2f21a59-fb34-c7ca-47ea-68587c82cc20`,
          {
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error("Something went wrong with fetching weather data 😥");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setDieselGermanyPrice(data.stations);
      } catch (err) {
        if (err.name !== "AbortError") setError(error);
      }
      return function () {
        controller.abort();
      };
    }
    fetchGermanyDieselPrice();
  }, []);

  useEffect(function () {
    const controller = new AbortController();
    async function fetchAustriaDieselPrice() {
      try {
        const res = await fetch(
          `https://api.e-control.at/sprit/1.0/search/gas-stations/by-address?latitude=47.390&longitude=11.255&fuelType=DIE&includeClosed=true`,
          {
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error("Something went wrong with fetching weather data 😥");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setAustriaDieselPrice(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(error);
      }
      return function () {
        controller.abort();
      };
    }
    fetchAustriaDieselPrice();
  }, []);

  return (
    <div className="diesel">
      {dieselGermanyPrice.length > 0 && 
      <h1 className="diesel__header">Germany</h1>}
      {dieselGermanyPrice &&
        dieselGermanyPrice.map((station) => (
          <p className="diesel__place" key={station.name + station.street}>
            {station.brand} {station.street}, {station.place}
            <span>{station.diesel}€</span>
          </p>
        ))}
      <h1 className="diesel__header">Austria</h1>
      {dieselAustriaPrice &&
        dieselAustriaPrice.map((station) => (
          <p className="diesel__place" key={station.name}>
            {station.name}
            <span>{station.prices[0] ? station.prices[0].amount : "?.???"}€</span>
          </p>
        ))}
      <img className="diesel__bg" src={dieselBG} alt="gasoline graphic" />
    </div>
  );
}
