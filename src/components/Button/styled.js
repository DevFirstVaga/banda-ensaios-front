import styled, { css } from "styled-components";
import theme from "../../theme/theme";

export const Wrapper = styled.a`
   ${({ variant }) => css`
      background: ${theme.colors.linearPri};
      color: ${theme.colors.black0};
      border: none;
      border-radius: 4px;
      font-family: ${theme.fonts.display};
      font-weight: 700;
      padding: 8px 16px;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      cursor: pointer;
      ${variant === "outlined" && css`
        background: ${theme.colors.blackTransp};
        color: ${theme.colors.white0};
        font-weight: 400;
        padding: 12px 24px;
        font-size: 20px;
      `}
      ${variant === "gallery-btn" && css`
        background: transparent;
        padding: 4px;
        font-size: 38px;
        border: none;
        border-radius: 0;
        color: ${theme.colors.white0};
        cursor: pointer;
        transform: all .3 ease;
        &, & svg{
          display: block;
        }
        &:active{
          transform: scale(0.9);
        }
      `}
   `}
`;
export const iconWrapper = styled.span`
  svg {
    display: block;
  }
`;