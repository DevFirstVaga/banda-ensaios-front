import * as S from "./styled"

function Button({variant, children, href, leftIcon, className, onClick}){
  return(
    <S.Wrapper className={className} href={href} target="_blank" variant={variant} onClick={onClick}>
      {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
      {children}
    </S.Wrapper>
  )
}

export default Button