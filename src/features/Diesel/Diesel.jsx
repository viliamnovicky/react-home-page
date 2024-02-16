import { useDieselAustriaData, useDieselGermanyData } from "./useDieselData";
import dieselBG from "../../img/icons/diesel.svg";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import DieselModal from "./DieselModal";
import Modal from "../../ui/Modal";

const Loading = styled.p`
  font-size: 2rem;
  color: var(--color-grey-50);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  z-index: 2;
`;

const DieselCont = styled.div`
  width: 20vw;
  height: 26rem;
  position: absolute;
  top: 1rem;
  right: 5rem;
  background: var(--color-dark-2);
  border-radius: 1rem;
  z-index: 1;
`;

const StyledDiesel = styled.div`
  width: 20vw;
  height: 26rem;
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: scroll;
  scrollbar-color: var(--color-grey-50);
  border-radius: 1rem;
  z-index: 5;
`;

const Img = styled.img`
  position: absolute;
  right: 2rem;
  bottom: -4rem;
  width: 70%;
  opacity: 0.2;
  z-index: 4;
`;

const Header = styled.h1`
  color: var(--color-grey-50);
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  padding-top: 2rem;
`;

const Place = styled.p`
  color: white;
  font-size: 1.6rem;
  padding: 1.5rem;
  padding-left: 1rem;
  padding-right: 5rem;
  width: 18vw;
  margin: auto;
  position: relative;
  border-bottom: 1px solid var(--color-grey-300);
  cursor: pointer;

  &:hover {
    background: rgba(47, 47, 47, 0.5);
  }

  &:last-child {
    border-bottom: none;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const Error = styled.p`
  color: var(--color-grey-50);
  font-size: 2rem;
  text-align: center;
  padding-top: 2rem;
  text-transform: uppercase;
`;

function Diesel() {
  const { isLoadingDieselGermany, dieselGermanyData, errorGermany } = useDieselGermanyData();
  const { isLoadingDieselAustria, dieselAustriaData, errorAustria } = useDieselAustriaData();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [place, setPlace] = useState("");

  function handleOpenDieselModal(station) {
    setPlace(station);
    setIsOpenModal(true);
  }

  if (isLoadingDieselGermany || isLoadingDieselAustria)
    return (
      <DieselCont>
        <Loading>Loading diesel price data</Loading>
        <Spinner color="#8a8a8a" size={100} />
      </DieselCont>
    );
  return (
    <>
      <DieselCont>
        <StyledDiesel>
          {errorGermany && <Error>An error occured by receiving Germany data</Error>}
          {dieselGermanyData?.stations?.length > 0 && <Header>Germany</Header>}
          {dieselGermanyData?.stations &&
            dieselGermanyData?.stations?.map((station) => (
              <Place key={station.name + station.street} onClick={() => handleOpenDieselModal(station)}>
                {station.brand} {station.street}, {station.place}:<span>{station.diesel}€</span>
              </Place>
            ))}
          <Header>Austria</Header>
          {dieselAustriaData &&
            dieselAustriaData.map((station) => (
              <Place key={station.name} onClick={() => handleOpenDieselModal(station)}>
                {station.name}:
                <span>{station.prices[0] ? station.prices[0].amount : "?.???"}€</span>
              </Place>
            ))}
        </StyledDiesel>
        <Img src={dieselBG} alt="gasoline graphic" />
      </DieselCont>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <DieselModal place={place}/>
        </Modal>
      )}
    </>
  );
}

export default Diesel;
