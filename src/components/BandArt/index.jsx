import * as S from "./styled"
import { Polaroid } from "./Polaroid";

function BandArt() {
  return (
    <S.Wrapper
      
    >
      <Polaroid src='polaroid1.jpg' transform='translateX(0) rotate(-5deg)'   />
      <Polaroid src='polaroid2.jpg' transform='translateX(150px) rotate(15deg)'   />
      <Polaroid src='polaroid3.jpg' transform='translateX(0px) translateY(100px) rotate(16deg)'  />
      <Polaroid src='polaroid4.jpg' transform='translateX(150px) translateY(100px) rotate(15deg)'  />
    </S.Wrapper>
  )
}

export default BandArt;