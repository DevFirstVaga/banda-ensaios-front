import * as S from "./styled";
import placeholder from "/placeholder.jpg"

function Image({ image, altImage }) {
  return (
    <S.Wrapper
      src={image}
      alt={altImage}
      effect="blur"
      placeholderSrc={placeholder}
    />
  );
}

export default Image;