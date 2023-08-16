import * as S from "./styled"

function Button({variant, children, href, leftIcon}){
  return(
    <S.Wrapper href={href} target="_blank" variant={variant}>
      {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
      {children}
    </S.Wrapper>
  )
}

export default Button