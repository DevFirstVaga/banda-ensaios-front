import styled, { css } from "styled-components"
import theme from "../../../theme/theme"

export const Wrapper = styled.section`
  ${({ image }) => css`
    background-color: ${theme.colors.gray};
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    &::after{
        display: block;
        opacity: .5;
        content: "";
        position: absolute;
        background-color: ${theme.colors.black0};
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    a{
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.link};
      font-family: ${theme.fonts.display};
      text-transform: uppercase;
      text-decoration: none;
      text-shadow: 0px 0px 4px black;
      position: absolute;
      z-index: 1;
    }
  `}
`