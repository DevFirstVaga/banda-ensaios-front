import * as S from "./styled";
import placeholder from "/placeholder.jpg";

function Image({ image, altImage, onClick, full }) {

  if (full) {
    document.body.classList.add("no-scroll")
    return (
      <S.WrapperFullScreen
        src={image}
        alt={altImage}
        effect="blur"
      />
    );
  }
  return (
    <S.Wrapper
      src={image}
      alt={altImage}
      effect="blur"
      placeholderSrc={placeholder}
      onClick={onClick}
    />
  );
}

export default Image;