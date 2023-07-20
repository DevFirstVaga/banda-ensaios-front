import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    width: 100vw;
    height: 300px;
    position: relative;
  `}
`;

const globals = Object.freeze({
  polaroidBorderColor: "#fff",
});

const { polaroidBorderColor } = globals;

export const Polaroid = styled.img`
  ${({ objectFit, aspectRatio, transform, zIndex, transition }) => css`
    position: absolute;
    transition: ${transition} transform ease-in-out infinite;
    width: 61mm;
    height: 61mm;
    object-fit: ${objectFit || ""};
    aspect-ratio: ${aspectRatio || ""};
    transform: ${transform};
    position: absolute;
    z-index: ${zIndex};
    border: 4.5mm solid ${polaroidBorderColor};
    border-bottom: 9.5mm solid ${polaroidBorderColor};

    @media screen and (max-width: 480px) {
      width: 45.75mm;
      height: 45.75mm;
      border: 3mm solid ${polaroidBorderColor};
      border-bottom: 6.25mm solid ${polaroidBorderColor};
    }

    @media screen and (max-width: 320px) {
      width: 30.5mm;
      height: 30.5mm;
      border: 2.25mm solid ${polaroidBorderColor};
      border-bottom: 4.75mm solid ${polaroidBorderColor};
    }
  `}
`;
