import * as S from "./styled"
import { Polaroid } from "./Polaroid";

function BandArt() {
  return (
    <S.Wrapper
      
    >
      <Polaroid src='/images/test.png' width='61mm'  transition='0.5s' transform='rotate(77deg)'   />
      {/* <Polaroid src='/images/test.png' transform='rotate(45deg)'   />
      <Polaroid src='/images/test.png' transform='rotate(25deg)'  />
      <Polaroid src='/images/test.png' transform='rotate(25deg)'  /> */}
    </S.Wrapper>
  )
}

export default BandArt;