import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.footer`
  height: 300px;
  width: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  div{
    justify-content: center;
    a svg{
        font-size: 25px;
        color: ${theme.colors.black};
      }
  }
  
`