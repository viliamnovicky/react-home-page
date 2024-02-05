import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDexcomData } from "./useDexcomData";

const Link = styled.a`
  padding: 2rem 5rem;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-green-50);
  background: var(--color-green-500);
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 2rem;
  transform: translate(-50%, -50%);

  &:hover {
    background: var(--color-green-600);
  }
`;

const DexcomPanel = styled.div``;

function Dexcom() {
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");
  const {isLoadingDexcomData, dexcomData, errorDexcom} = useDexcomData(code)
  console.log(dexcomData)

  if (!code)
    return (
      <Link href="https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=wCuk8ezQEZi19HNTYw9RlplEHWr35GBR&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access&">
        dexcom login
      </Link>
    );

  if (code) return (<Link>Log Out</Link>);
}

export default Dexcom;
