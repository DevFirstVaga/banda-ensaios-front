import * as S from './styled'

export function Polaroid ({transform, src, alt, border, transition,zIndex}) {

  return (
    <S.Polaroid src={'/images/' + src} transition={transition} alt={alt} transform={transform} border={border} zIndex={zIndex} />
  )
}