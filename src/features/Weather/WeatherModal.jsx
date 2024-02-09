import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Day from "./Day";

const StyledWeatherModal = styled.div`
  background: var(--color-grey-500);
  border-radius: 2rem;
  height: 100%;
`;

const Days = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  text-transform: uppercase;
  gap: 1px;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--color-grey-600);
  height: calc(100% - 15rem);
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
`;

const Data = styled.p`
color: var(--color-grey-50);
font-size: 1.6rem;
text-transform: uppercase;
font-weight: 100;
span {
  display: block;
  padding-top: 1rem;
  font-size: 2rem;
}
`;

const Hours = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`

function WeatherModal({ weatherData, isLoadingWeather }) {
  const [day, setDay] = useState(0);
  if (isLoadingWeather) return <Spinner size={150} color={"var(--color-grey-50)"} />;

  return (
    <StyledWeatherModal>
      <Days>
        <Day index={0} weatherData={weatherData} onClick={() => setDay(0)} />
        <Day index={1} weatherData={weatherData} onClick={() => setDay(1)} />
        <Day index={2} weatherData={weatherData} onClick={() => setDay(2)} />
      </Days>
      <Grid>
        <Hours>
          <Data>4:00 <span>{weatherData.forecast.forecastday[day].hour[4].temp_c} °C</span></Data>
          <Data>8:00 <span>{weatherData.forecast.forecastday[day].hour[8].temp_c} °C</span></Data>
          <Data>12:00 <span>{weatherData.forecast.forecastday[day].hour[12].temp_c} °C</span></Data>
          <Data>16:00 <span>{weatherData.forecast.forecastday[day].hour[16].temp_c} °C</span></Data>
          <Data>20:00 <span>{weatherData.forecast.forecastday[day].hour[12].temp_c} °C</span></Data>
          <Data>24:00 <span>{weatherData.forecast.forecastday[day].hour[23].temp_c} °C</span></Data>
        </Hours>
        <Data>Sunrise<span>{weatherData.forecast.forecastday[day].astro.sunrise}</span></Data>
        <Data>Condition:<span>{weatherData.forecast.forecastday[day].day.condition.text}</span></Data>
        <Data>Sunset<span>{weatherData.forecast.forecastday[day].astro.sunset}</span></Data>
        <Data>Max Temperature<span>{weatherData.forecast.forecastday[day].day.maxtemp_c} °C</span></Data>
        <Data>Rain possibility<span>{weatherData.forecast.forecastday[day].day.daily_chance_of_rain} %</span></Data>
        <Data>Min Temperature<span>{weatherData.forecast.forecastday[day].day.mintemp_c} °C</span></Data>
        <Data>Humidity<span>{weatherData.forecast.forecastday[day].day.avghumidity} %</span></Data>
        <Data>Visibility<span>{weatherData.forecast.forecastday[day].day.avgvis_km} km</span></Data>
        <Data>Wind<span>{weatherData.forecast.forecastday[day].day.maxwind_kph} km/h</span></Data>
        
      </Grid>
    </StyledWeatherModal>
  );
}

export default WeatherModal;
