import { useEffect, useState } from "react";
import "../css/Weather.css";
import WeatherData from "./WeatherData";
import Search from "./Search";
import { useGeolocation } from "./useGeolocation";

export default function Weather({ error, setError }) {
  const [weather, setWeather] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  
  const latt = "47.49209";
  const longg = "11.09576";
  
  const {
    isLoading,
    position: { lat, lng },
    getPosition
  } = useGeolocation();

  function handleGetPosition() {
    getPosition();
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchWeather() {
        try {
          setError("");
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=378e1c6f3cbe4f8b8e9195724221603&q=${latt},${longg}&days=4&aqi=yes&alerts=yes`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok) throw new Error("Something went wrong with fetching weather data 😥");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setWeather(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(error);
        }
      }
      fetchWeather();
      return function () {
        controller.abort();
      };
    },
    [error, setError]
  );

  return (
    <div className="weather">
      
      {weather && (
        <div className="weather__actual">
          {/* <img
            alt={weather.current.condition.icon}
            className="weather__icon"
            src={weather.current.condition.icon}
          ></img> */}
          <h1 className="weather__location">
            Garmisch Partenkirchen<span>{weather.current.temp_c}°C</span>
          </h1>
          <button onClick={getPosition}>poloha</button>
          <Search
            query={locationQuery}
            setQuery={setLocationQuery}
            placeholder={"search location..."}
          />
        </div>
      )}
      {!weather && <h1>Something went wrong</h1>}
      <WeatherData weather={weather} error={error}></WeatherData>
    </div>
  );
}
