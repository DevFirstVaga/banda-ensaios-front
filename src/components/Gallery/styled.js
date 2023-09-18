import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  gap: 30px;
  padding: 0 20px;
  max-width: 1000px;
`

export const FullImageScreen = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000EE;
  backdrop-filter: blur(10px);
  z-index: 3;
  span{
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0px;
  font-size: 32px;
  border: none;
  color: white;
  cursor: pointer;
  & svg{
    display: block;
  }
`
