import * as S from "./styled"
import Polaroid from "./Polaroid";

function PolaroidsGrid(){
  return(
    <S.Wrapper>
      <Polaroid
        src="/images/polaroids/1.jpg"
        alt="imagem de ''"
        transform="rotate(-16deg)"
      />
      <Polaroid
        src="/images/polaroids/2.jpg"
        alt="imagem de ''"
        transform="rotate(5deg)"
      />
      <Polaroid
        src="/images/polaroids/3.jpg"
        alt="imagem de ''"
        transform="rotate(15deg)"
      />
      <Polaroid
        src="/images/polaroids/4.jpg"
        alt="imagem de ''"
        transform="rotate(-15deg)"
      />
    </S.Wrapper>
  )
}

export default PolaroidsGrid