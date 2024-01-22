import Search from "../../components/Search";
import { useWeatherData } from "./useWeatherData";
import WeatherData from "../../components/WeatherData";
import { useGeolocation } from "./useGeolocation";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Buttons";
const latt = "47.49209";
const longg = "11.09576";

const StyledWeather = styled.div`
  width: 50vw;
  height: 26rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background: var(--color-dark-2);
  border-radius: 1rem;
  padding: 0 1rem 0 1rem;

  input {
    position: absolute;
    top: 3rem;
    height: 5rem;
    width: 45rem;

  }

  button {
      position: absolute;
      right: 1rem;
      top: 3rem;
      height: 5rem;
      width: 11rem;
    }
`;

const Header = styled.h1`
  height: 5rem;
  color: white;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  padding: 1rem;
  text-align: left;
  font-weight: 100;
  display: inline;
  background: var(--color-grey-500);
  border-radius: 1rem;
`

function Weather() {
  const [locationQuery, setLocationQuery] = useState("");
  const { isLoading, weatherData } = useWeatherData();
  
  return (
    <StyledWeather>
      {weatherData && (
        <div className="weather__actual">
          {/* <img
        alt={weather.current.condition.icon}
        className="weather__icon"
        src={weather.current.condition.icon}
      ></img> */}
          <Header>
            {weatherData.location.name} <span>{weatherData.current.temp_c}°C</span>
          </Header>
          <Button variation="primary" size="medium">
            poloha
          </Button>
          <Search
            query={locationQuery}
            setQuery={setLocationQuery}
            placeholder={"search location..."}
            value={locationQuery}
          />
        </div>
      )}
      {!weatherData && <h1>Something went wrong</h1>}
      <WeatherData weather={weatherData}></WeatherData>
    </StyledWeather>
  );
}

export default Weather;
