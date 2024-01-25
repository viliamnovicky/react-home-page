import styled from "styled-components";
import cryptoModalBg from "../../img/modal-crypto.jpg";

const StyledCryptoModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Header = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 5rem;
  color: var(--color-grey-50);
  padding-top: 4rem;
  font-weight: 100;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2rem;
  border: 1px solid var(--color-grey-200);
  z-index: 0;
`;

const CryptoStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 5px;  
  padding: .5rem;
`;

const Image = styled.img`
  width: 20rem;
  position: absolute;
  top: -10rem;
  left: -10rem;
  border-radius: 50%;
  border: 3px solid var(--color-grey-200);
  background: var(--color-grey-800);
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  height: 20vh;
  background: rgba(200, 200, 200, .05);
  border-radius: 2rem;

  span {
    text-align: center;
    margin: auto;
    color: var(--color-grey-50);
    text-transform: uppercase;
    font-size: 2rem;
  }
`;

function CryptoModal({ coin }) {
  return (
    <>
      <StyledCryptoModal>
        <Background src={cryptoModalBg} />
        <Header>
          #{coin.market_cap_rank} {coin.name}
        </Header>
        <Image src={coin.image}></Image>
        <CryptoStats>
          <Box>
            <span>CurrentPrice: {coin.current_price}$</span>
          </Box>
          <Box>
            <span>Highest price (24h): {coin.high_24h}$</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
          <Box>
            <span>Max Supply: {coin.max_supply} {coin.symbol.toUpperCase()}</span>
          </Box>
        </CryptoStats>
      </StyledCryptoModal>
    </>
  );
}

export default CryptoModal;
