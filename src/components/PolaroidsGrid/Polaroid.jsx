import * as S from "./styled"

function Polaroid({
  src,
  alt,
  zIndex,
  transition,
  transform,
}) {
  return (
   <S.PolaroidWrapper
      transition={transition}
      transform={transform}
      zIndex={zIndex}
    >
      <S.PolaroidImg
        alt={alt}
        src={src}
      />
   </S.PolaroidWrapper>
  )
}

export default Polaroid;