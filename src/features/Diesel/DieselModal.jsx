import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Map from "../Map/Map";

const StyledDieselModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 2rem;
  overflow: hidden;
  gap: 1rem;
  background: transparent;
  border: 1px solid var(--color-grey-50);
`;

const Header = styled.h1`
  text-transform: uppercase;
  grid-column: 1/4;
  width: 100%;
  text-align: center;
  display: flex;
  font-size: 4rem;
  font-weight: 100;
  color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  z-index: 10;
`;

const Data = styled.p`
  color: var(--color-grey-50);
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  background: rgba(26, 26, 26, 0.5);
  border-radius: 2rem;

  span {
    display: block;
    padding-top: 1rem;
    font-size: 2rem;
  }
`;

function DieselModal({ place }) {
  if (place.brand)
    return (
      <StyledDieselModal>
        <Map lng={place.lng} lat={place.lat} />
        <Header>
          {place.name} - {place.place}
        </Header>
        <Data>
          Diesel<span>{place.diesel} €</span>
        </Data>
        <Data>
          Petrol e5<span>{place.e5} €</span>
        </Data>
        <Data>
          Petrol e10<span>{place.e10 ? place.e10 : "?.???"} €</span>
        </Data>
        <Data></Data>
        <Data>{place.isOpen ? <span>Open</span> : <span>Closed</span>}</Data>
        <Data></Data>
        <Data></Data>
        <Data></Data>
        <Data></Data>
      </StyledDieselModal>
    );
  return (
    <StyledDieselModal>
      <Map lng={place.location.longitude} lat={place.location.latitude} />
      <Header>
        {place.name} - {place.location.city}
      </Header>
      <Data>
        Diesel<span>{place.prices[0].amount} €</span>
      </Data>
      <Data>
        Petrol e5<span>?.??? €</span>
      </Data>
      <Data>
        Petrol e10<span>?.??? €</span>
      </Data>
      <Data></Data>
      <Data>{place.open ? <span>Open</span> : <span>Closed</span>}</Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
    </StyledDieselModal>
  );
}

export default DieselModal;
