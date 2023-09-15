import Image from "../Image";
import * as S from "./styled";

function Gallery({ images }) {
  return (
    <S.Wrapper>
      {images.map((image, key) => {
        return(
          <Image
            key={key}
            image={image}
            alt={`image ${key}`}
          />
        )
      })}
    </S.Wrapper>
  );
}

export default Gallery;