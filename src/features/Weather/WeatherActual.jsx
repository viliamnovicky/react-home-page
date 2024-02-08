import "../../css/Weather.css";

import WeatherCont from "./WeatherCont";
import temperature from "../../img/icons/temperature.svg";
import temperatureMax from "../../img/icons/temperature-max.svg";
import temperatureMin from "../../img/icons/temperature-min.svg";
import temperatureFeel from "../../img/icons/temperature-feelslike.svg";
import wind from "../../img/icons/wind.svg";
import visibility from "../../img/icons/visibility.svg";
import sunrise from "../../img/icons/sunrise.svg";
import sunset from "../../img/icons/sunset.svg";
import styled from "styled-components";

const WeatherContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  width: 100%;
  height: calc(100% - 10rem);
  background: white;
  color: var(--color-dark-1);
  cursor: pointer;
`;

function WeatherActual({ weather, onClick }) {
  return (
    <WeatherContainer onClick={onClick}>
      {weather && (
        <>
          <WeatherCont
            icon1={temperature}
            icon2={temperatureFeel}
            data1={weather.current.temp_c}
            data2={weather.current.feelslike_c}
            unit1="°C"
            unit2="°C"
          />
          <WeatherCont
            icon1={wind}
            icon2={visibility}
            data1={weather.current.wind_kph}
            data2={weather.current.vis_km}
            unit1="km/h"
            unit2="km"
          />

          <div className="weather__info weather__info--middle">
            <img
              className="weather__icon--small"
              src={weather.current.condition.icon}
              alt={weather.current.condition.icon}
            ></img>
            <p className="weather__cond">{weather.current.condition.text}</p>
          </div>
          <WeatherCont
            icon1={temperatureMax}
            icon2={temperatureMin}
            data1={weather.forecast.forecastday[0].day.maxtemp_c}
            data2={weather.forecast.forecastday[0].day.mintemp_c}
            unit1="°C"
            unit2="°C"
          />
          <WeatherCont
            icon1={sunrise}
            icon2={sunset}
            data1={weather.forecast.forecastday[0].astro.sunrise}
            data2={weather.forecast.forecastday[0].astro.sunset}
          />
        </>
      )}
    </WeatherContainer>
  );
}

export default WeatherActual;
