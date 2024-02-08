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

const Data = styled.p``;

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
        <Data>{weatherData.forecast.forecastday[day].day.condition.text}</Data>
        <Data>{weatherData.forecast.forecastday[day].day.daily_chance_of_rain}%</Data>
        <Data>{weatherData.forecast.forecastday[day].date}</Data>
        <Data>{weatherData.forecast.forecastday[day].date}</Data>
      </Grid>
    </StyledWeatherModal>
  );
}

export default WeatherModal;
