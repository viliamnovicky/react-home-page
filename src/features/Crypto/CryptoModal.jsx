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
  padding: 0.5rem;
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
  background: rgba(200, 200, 200, 0.05);
  border-radius: 2rem;

  p {
    text-align: center;
    margin: auto;
    color: var(--color-grey-50);
    text-transform: uppercase;
    font-size: 2rem;
  }

  span {
    display: block;
    padding-top: 2rem;
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
            <p>Current Price: <span>{coin.current_price}$</span></p>
          </Box>
          <Box>
            <p>Highest price (24h): <span>{coin.high_24h}$</span></p>
          </Box>
          <Box>
            <p>
              Max Supply: <span>{coin.max_supply ? coin.max_supply : "???"} {coin.symbol.toUpperCase()}</span>
            </p>
          </Box>
          <Box>
            <p>ATH: <span>{coin.ath}$</span></p>
          </Box>
          <Box>
            <p>Lowest price (24h): <span>{coin.low_24h}$</span></p>
          </Box>
          <Box>
            <p>
              Total supply: <span>{coin.total_supply} {coin.symbol.toUpperCase()}</span>
            </p>
          </Box>
          <Box>
            <p>ATL: <span>{coin.atl}$</span></p>
          </Box>
          <Box>
            <p>Price change (24h): <span>{coin.price_change_24h}$</span></p>
          </Box>
          <Box>
            <p>Market cap: <span>{coin.market_cap}$</span></p>
          </Box>
        </CryptoStats>
      </StyledCryptoModal>
    </>
  );
}

export default CryptoModal;
