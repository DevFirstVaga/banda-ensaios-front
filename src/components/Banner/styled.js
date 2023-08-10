import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.div`
  ${({image}) => css`
    height: 400px;
    background-color: ${theme.colors.gray};
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`;