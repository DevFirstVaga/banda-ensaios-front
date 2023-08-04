import logo from "/logo.svg"
import * as S from "./styled"


function Logo() {
  return (
    <S.Wrapper>
      <img src={logo} alt="Logo da banda" />
    </S.Wrapper>
  )
}

export default Logo