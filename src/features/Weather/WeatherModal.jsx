import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const StyledWeatherModal = styled.div`
  background: var(--color-grey-200);
  border-radius: 2rem;
`;

const Days = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  text-transform: uppercase;
  gap: 1px;
  border-radius: 2rem;
`;

const Day = styled.h1`
  font-weight: 100;
  font-size: 4rem;
  padding-top: 2rem;
  background: var(--color-grey-50);
  width: 100%;
  span {
    display: block;
    font-size: 2rem;
  }
`;

function WeatherModal({ weatherData, isLoadingWeather }) {
  if (isLoadingWeather) return <Spinner size={150} color={"var(--color-grey-50)"} />;

  return (
    <StyledWeatherModal>
      <Days>
        <Day>
          {days[new Date(weatherData.forecast.forecastday[0].date).getDay()]}{" "}
          <span>
            {new Date(weatherData.forecast.forecastday[0].date).getDate()}.
            {new Date(weatherData.forecast.forecastday[0].date).getMonth() + 1}.
            {new Date(weatherData.forecast.forecastday[0].date).getFullYear()}
          </span>
        </Day>
        <Day>
          {days[new Date(weatherData.forecast.forecastday[1].date).getDay()]}{" "}
          <span>
            {new Date(weatherData.forecast.forecastday[1].date).getDate()}.
            {new Date(weatherData.forecast.forecastday[1].date).getMonth() + 1}.
            {new Date(weatherData.forecast.forecastday[1].date).getFullYear()}
          </span>
        </Day>
        <Day>
          {days[new Date(weatherData.forecast.forecastday[2].date).getDay()]}{" "}
          <span>
            {new Date(weatherData.forecast.forecastday[2].date).getDate()}.
            {new Date(weatherData.forecast.forecastday[2].date).getMonth() + 1}.
            {new Date(weatherData.forecast.forecastday[2].date).getFullYear()}
          </span>
        </Day>
      </Days>
    </StyledWeatherModal>
  );
}

export default WeatherModal;
