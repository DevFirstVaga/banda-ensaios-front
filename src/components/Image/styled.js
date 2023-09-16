import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Wrapper = styled(LazyLoadImage)`
  width: 300px;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 2px;
`