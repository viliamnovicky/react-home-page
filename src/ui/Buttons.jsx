import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
  `,
  medium: css`
  width: 9rem;
  height: 4rem;
  font-size: 1.5rem;
`,
  large: css`
    width: 15rem;
    height: 5rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: var(--color-grey-500);
    border-radius: 1rem;

    &:hover {
      background-color: var(--color-grey-700);
    }
  `,
  green: css`
    color: var(--color-green-50);
    background-color: var(--color-green-500);

    &:hover {
      background-color: var(--color-green-600);
    }
  `,
  red: css`
    color: var(--color-red-50);
    background: var(--color-red-500);

    &:hover {
      background-color: var(--color-red-600);
    }
  `,

  redSecondary: css`
    color: var(--color-red-500);
    background: var(--color-red-50);
    border: 1px solid var(--color-red-500);

    &:hover {
      background-color: var(--color-red-600);
      color: var(--color-red-50);
      border: 1px solid var(--color-red-600);
    }
  `,
};

const Button = styled.button`
  border-radius: 50rem;
  font-size: 2rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "green",
  size: "large",
};

export default Button;
