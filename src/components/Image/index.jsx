import * as S from "./styled";

function Image({ image, altImage }) {
  return (
    <S.Wrapper
      src={image}
      alt={altImage}
    />
  );
}

export default Image;