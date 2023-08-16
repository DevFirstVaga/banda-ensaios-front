import Button from "../../Button";
import * as S from "./styled"

function Album({image, alt, link}){
  return(
    <S.Wrapper>
      <img src={image} alt={alt} />
      <Button href="https://example.org" variant="outlined">
        Veja
      </Button>
    </S.Wrapper>
  )
}

export default Album