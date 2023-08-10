import styled from "styled-components"
import theme from "../../../theme/theme"

export const Wrapper = styled.button`
  position: relative;
  width: 35px;
  height: 35px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;

  &.active i {
    background: transparent;
  }

  &.active i::before {
    transform: translateY(10px) rotate(45deg);
  }

  &.active i::after {
    transform: translateY(-10px) rotate(-45deg);
  }

  i {
  display: block;
  position: absolute;
  width: 90%;
  left: 2px;
  height: 4px;
  background-color:  ${theme.colors.white};
  top: calc(50% - 2.5px);
  transition-property: transform, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  }

  i::before {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color:  ${theme.colors.white};
    bottom: 10px;
    transition: 0.3s transform ease-in-out;
  }

  i::after {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color:  ${theme.colors.white};
    top: 10px;
    transition: 0.3s all ease-in-out;
  }
`