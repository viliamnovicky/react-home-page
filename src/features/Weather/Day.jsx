import styled from "styled-components";

const StyledDay = styled.h1`
  font-weight: 100;
  font-size: 4rem;
  padding: 4rem 0;
  width: 100%;
  color: var(--color-grey-50);
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  position: relative;

  &:hover {
    background: var(--color-grey-600);
  }

  span {
    display: block;
    font-size: 2rem;
  }

  img {
    position: absolute;
    left: 5rem;
    top: 3rem;
  }
`;

const StyledDayActive = styled.h1`
  font-weight: 100;
  font-size: 4rem;
  padding: 4rem 0;
  width: 100%;
  color: var(--color-grey-50);
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  position: relative;
  background: var(--color-grey-600);

  &:hover {
    background: var(--color-grey-600);
  }

  span {
    display: block;
    font-size: 2rem;
  }

  img {
    position: absolute;
    left: 5rem;
    top: 3rem;
  }
`;

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function Day({ weatherData, index, onClick, active }) {
  if (active)
    return (
      <StyledDayActive onClick={onClick}>
        {days[new Date(weatherData.forecast.forecastday[index].date).getDay()]}{" "}
        <span>
          {new Date(weatherData.forecast.forecastday[index].date).getDate()}.
          {new Date(weatherData.forecast.forecastday[index].date).getMonth() + 1}.
          {new Date(weatherData.forecast.forecastday[index].date).getFullYear()}
        </span>
        <img src={weatherData.forecast.forecastday[index].day.condition.icon} />
      </StyledDayActive>
    );

  return (
    <StyledDay onClick={onClick}>
      {days[new Date(weatherData.forecast.forecastday[index].date).getDay()]}{" "}
      <span>
        {new Date(weatherData.forecast.forecastday[index].date).getDate()}.
        {new Date(weatherData.forecast.forecastday[index].date).getMonth() + 1}.
        {new Date(weatherData.forecast.forecastday[index].date).getFullYear()}
      </span>
      <img src={weatherData.forecast.forecastday[index].day.condition.icon} />
    </StyledDay>
  );
}

export default Day;
