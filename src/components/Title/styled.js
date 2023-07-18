import { styled, css } from "styled-components";

export const Wrapper = styled.h1`
  ${({color}) => css`
    font-family: "sans-serif";
    color: ${ color ? color : "black" };
  `}
`