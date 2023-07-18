import * as S from "./styled"

function Title({
  color,
  children
}) {
  return (
    <S.Wrapper
      color={color}
    >
      {children}
    </S.Wrapper>
  )
}

export default Title;