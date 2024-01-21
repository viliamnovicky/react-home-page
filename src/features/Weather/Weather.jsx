import Search from "../../components/Search";
import { useWeatherData } from "./useWeatherData";
import WeatherData from "../../components/WeatherData";
import { useGeolocation } from "./useGeolocation";
const latt = "47.49209";
const longg = "11.09576";

function Weather() {
  const {lat, lng} = useGeolocation()
  
  console.log(lat, lng)

  const { isLoading, weatherData } = useWeatherData(latt, longg);

  return (
    <div className="weather">
      {weatherData && (
        <div className="weather__actual">
          {/* <img
        alt={weather.current.condition.icon}
        className="weather__icon"
        src={weather.current.condition.icon}
      ></img> */}
          <h1 className="weather__location">
            Garmisch Partenkirchen<span>{weatherData.current.temp_c}°C</span>
          </h1>
          <button>poloha</button>
          <Search
            // query={locationQuery}
            // setQuery={setLocationQuery}
            placeholder={"search location..."}
          />
        </div>
      )}
      {!weatherData && <h1>Something went wrong</h1>}
      <WeatherData weather={weatherData}></WeatherData>
    </div>
  );
}

export default Weather;
