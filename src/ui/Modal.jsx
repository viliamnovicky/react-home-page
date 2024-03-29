import styled from "styled-components";

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(26, 26, 26, 0.2);
  backdrop-filter: blur(4px);
  z-index: 100;
`;

const Inner = styled.div`
  width: 70vw;
  height: 75vh;
  background: transparent;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
width: 5rem;
height: 5rem;
border-radius: 50%;
border: none;
background: var(--color-grey-800);
cursor: pointer;
position: absolute;
right: 1rem;
top: 1rem;
font-weight: 800;
z-index: 10000;
color: var(--color-grey-50);

&:hover {
    background: var(--color-grey-900);
    transform: rotate(90deg);
    font-size: 2rem;
}
` 
export default function Modal({ children, isOpenModal, setIsOpenModal }) {
  return (
    <Outer>
      <Inner>
        <Button onClick={() => setIsOpenModal(false)}>
          &#x2715;
        </Button>
        {children}
      </Inner>
    </Outer>
  );
}
