import styled from "styled-components"
import theme from "../../theme/theme"

export const Wrapper = styled.div`
  background-color: ${theme.colors.gray};
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.title};
    font-family: ${theme.fonts.display};
    text-decoration: none;

  }
`