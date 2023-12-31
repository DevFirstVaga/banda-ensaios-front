import styled from "styled-components";
import theme from "../../../theme/theme";

export const Wrapper = styled.div`
  transition: all .3s ease;
  display: grid;
  &:hover{
    box-shadow: 0 0 10px ${theme.colors.primary};
    transform: translateY(-8px);
  }
  img{
    width: 300px;
    display: block;  
  }
  a{
    position: absolute;
    align-self: center;
    justify-self: center;
  }
`