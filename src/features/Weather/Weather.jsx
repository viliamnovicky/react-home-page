import Search from "../../ui/Search";
import { useWeatherData } from "./useWeatherData";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Buttons";
import Spinner from "../../ui/Spinner";
import WeatherActual from "./WeatherActual";
import WeatherModal from "./WeatherModal";
import Modal from "../../ui/Modal";

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
  padding: 0rem 1rem 1rem 1rem;

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

const WeatherHeader = styled.div`
  display: flex;
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
`;

function Weather() {
  const [locationQuery, setLocationQuery] = useState("");
  const { isLoading, weatherData } = useWeatherData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(weatherData)

  return (
    <>
      <StyledWeather>
        {isLoading && <Spinner size={150} color={"var(--color-grey-50)"} />}
        {weatherData && (
          <WeatherHeader>
            {isLoading ? (
              <Spinner />
            ) : (
              <Header>
                {weatherData.location.name} <span>{weatherData.current.temp_c}°C</span>
              </Header>
            )}
            <Button variation="primary" size="medium">
              poloha
            </Button>
            <Search
              query={locationQuery}
              setQuery={setLocationQuery}
              placeholder={"search location..."}
              value={locationQuery}
            />
          </WeatherHeader>
        )}
        <WeatherActual weather={weatherData} onClick = {() => setIsOpenModal(true)}/>
      </StyledWeather>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <WeatherModal weatherData={weatherData} isLoadingWeather={isLoading}/>
        </Modal>
      )}
    </>
  );
}

export default Weather;
