import styled from "styled-components";
import Spinner from "../../ui/Spinner";

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
  background: var(--color-grey-600);
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
  background: var(--color-grey-500);
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
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
          Petrol e10<span>{place.e10} €</span>
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
