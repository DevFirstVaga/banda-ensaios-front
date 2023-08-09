import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  a{
    svg{
      font-size: 25px;
      color: ${theme.colors.white};
    }
  }
  
`;