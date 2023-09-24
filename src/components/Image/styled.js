import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

export const Wrapper = styled(LazyLoadImage)`
  width: 300px;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 2px;
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

export const FullScreenImg = styled(LazyLoadImage)`
  max-height: 550px;
  max-width: 90%;
  object-fit: cover;
  border-radius: 10px;
`;