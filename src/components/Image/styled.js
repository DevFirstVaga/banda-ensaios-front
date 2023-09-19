import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Wrapper = styled(LazyLoadImage)`
  width: 300px;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 2px;
`;

export const FullScreenImg = styled(LazyLoadImage)`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 10px;
`;

export const WrapperFullImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  div{
    display: flex;
    justify-content: space-evenly;
  }
`;

export const HandleBtn = styled.button`

`;