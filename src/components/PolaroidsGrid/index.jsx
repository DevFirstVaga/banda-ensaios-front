import * as S from "./styled"
import Polaroid from "./Polaroid";

function PolaroidsGrid(){
  return(
    <S.Wrapper>
      <Polaroid
        src="/images/polaroid1.jpg"
        transform="rotate(-16deg)"
      />
      <Polaroid
        src="/images/polaroid2.jpg"
        transform="rotate(5deg)"
      />
      <Polaroid
        src="/images/polaroid3.jpg"
        transform="rotate(15deg)"
      />
      <Polaroid
        src="/images/polaroid4.jpg"
        transform="rotate(-15deg)"
      />
    </S.Wrapper>
  )
}

export default PolaroidsGrid