import styled from "styled-components";

export const WrapperGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  gap: 30px;
  padding: 0 20px;
  max-width: 1000px;
`;

export const FullImageScreen = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000EE;
  backdrop-filter: blur(10px);
  z-index: 3;
  a.close-btn{
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .handle-btns{
    margin-top: 20px;
    display: flex;
    gap: 50px;
  }
  span{
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`;
