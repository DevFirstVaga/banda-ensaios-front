import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div`
  border: 2px solid ${theme.colors.primary};
  margin: 20px auto;
  width: 300px;
  box-sizing: content-box;
  text-align: center;
  transition: all .3s ease;
  div{
    h2{
    font-family: ${theme.fonts.display};
    font-size: 26px;
    font-weight: 500;
    margin-top: 20px;
    }
    p{
      font-size: 14px;
      margin: 16px 30px 12px;
    }
    h3{
      font-weight: 400;
      margin-bottom: 20px;
    }
    div{
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;
    }
  }
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    width: 600px;
    div{
      h2{
        margin-top: 35px;
      }
      div{
        margin-bottom: 0;
      }
    }
  }
`;