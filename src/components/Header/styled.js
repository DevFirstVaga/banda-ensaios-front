import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 20px 0;
  div{
    z-index: 2;
    cursor: pointer;
    svg{
      font-size: 40px;
      display: block;
      color: ${theme.colors.white};
    }
  }
  nav{
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    font-size: ${theme.fonts.size.text};
    font-family: ${theme.fonts.display};
    text-transform: uppercase;
    font-weight: 500;
    background-color: ${theme.colors.black};
    height: 100%;
    width: 100%;
    transition: all .3s ease;
    ul{
      list-style: none;
      li{
        a{
          color: ${theme.colors.white};
          text-decoration: none;
        }
      }
    }
  }
`;