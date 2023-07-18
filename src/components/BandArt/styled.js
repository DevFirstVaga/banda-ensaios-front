import { styled, css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ color }) => css`
    font-family: "Arial, Verdana, serif";
    color: ${color || "black"};
  `}
`;

export const WrapperImage = styled.img`
  ${({ objectFit, aspectRatio, transform, zIndex, transition }) => css`
    transition: ${transition} transform ease-in-out infinite;
    width: 61mm;
    height: 61mm;
    object-fit: ${objectFit || ""};
    aspect-ratio: ${aspectRatio || ""};
    transform: ${transform};
    position: absolute;
    z-index: ${zIndex};
    border: 4px solid red;
    border-bottom: 28px solid red;

    @media screen and (max-width: 480px) {
      width: 45.75mm;
      height: 45.75mm;
    }

    @media screen and (max-width: 320px) {
      width: 30.5mm;
      height: 30.5mm;
    }
  `}
`;
