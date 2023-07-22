import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export const Wrapper = styled.div`
  background-color: ${theme.colors.primary};
  display: grid;
  grid-template-columns: repeat(2, 170px);
  grid-template-rows: repeat(2, 160px);
  place-items: center;
  place-content: center;
  height: 450px
`

export const PolaroidImg = styled.img`
  border: solid 1px ${theme.colors.black0};
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: solid 1px ${theme.colors.black0};
`

export const PolaroidWrapper = styled.div`
  ${({
  transform,
  zIndex,
}) => css`
    display: grid;
    justify-content: center;
    align-items: center;
    padding-bottom: 35px;
    background-color: ${theme.colors.white0};
    width: 180px;
    height: 180px;
    box-shadow: 0 0 20px ${theme.colors.black0};
    border-radius: 4px;
    box-sizing: content-box;
    transform: ${transform};
    z-index: ${zIndex};
  `}
`