import * as S from "./styled"

function Button({children, href, leftIcon}){
  return(
    <S.Wrapper href={href}>
      {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
      {children}
    </S.Wrapper>
  )
}

export default Button