import * as S from "./styled"

function Album({image, alt}){
  return(
    <S.Wrapper>
      <img src={image} alt={alt} />
    </S.Wrapper>
  )
}

export default Album