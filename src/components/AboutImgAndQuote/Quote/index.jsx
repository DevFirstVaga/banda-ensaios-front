import * as S from "./styled";

function Quote({quote}){
  return(
    <S.Wrapper>
      <q>{quote}</q>
    </S.Wrapper>
  )
}

export default Quote;