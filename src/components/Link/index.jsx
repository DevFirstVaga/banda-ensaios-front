import * as S from "./styled"

function Link({children}) {
  return(
    <S.Wrapper>
      <a draggable="false" href="#">{children}</a>
    </S.Wrapper>
  )
}
export default Link