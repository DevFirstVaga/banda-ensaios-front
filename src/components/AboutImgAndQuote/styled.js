import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  place-content: center;

  img{
    width: 300px;
    height: 250px;
    object-fit: cover;
  }

  @media (min-width: 700px){
    margin: 50px auto;
    grid-template-columns: repeat(2, 350px);
    justify-content: center;

    div{
      margin: 0;
    }
  }
`;