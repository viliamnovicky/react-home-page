import { HashLoader } from "react-spinners";
import styled from "styled-components";

const StyledSpinner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% -50%);
`

function Spinner({size, color}) {
    return (
        <StyledSpinner>

            <HashLoader size={size} color={color}/>
        </StyledSpinner>
    )
}

export default Spinner
