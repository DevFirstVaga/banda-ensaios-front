import styled from "styled-components"
import theme from "../../theme/theme"

export const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

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
  position: absolute;
  width: 90%;
  left: 2px;
  height: 5px;
  background-color:  ${theme.colors.white};
  top: calc(50% - 2.5px);
  transition-property: transform, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  
  }

  i::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color:  ${theme.colors.white};
    bottom: 10px;
    transition: 0.3s transform ease-in-out;
  }

  i::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color:  ${theme.colors.white};
    top: 10px;
    transition: 0.3s all ease-in-out;
  }
`