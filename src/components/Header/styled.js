import styled from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
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
  .icons{
    display: flex;
    gap: 15px;
    a{
      svg{
        font-size: 25px;
          &:hover{
            color: ${theme.colors.primary};
          }
      }
    }
  }
  nav{
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.colors.black};
    height: 100%;
    overflow: hidden;
    width: 100%;
    ul{
      list-style: none;
      text-align: center;
      li{
        font-size: ${theme.fonts.size.links};
        font-family: ${theme.fonts.display};
        text-transform: uppercase;
        font-weight: 500;
        user-select: none;
        a{
          padding: 5px;
          display: block;
          color: ${theme.colors.white};
          text-decoration: none;
          &:hover{
            color: ${theme.colors.primary};
          }
        }
      }
    }
  }
`;