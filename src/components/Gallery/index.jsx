import * as S from "./styled";

function Gallery({ images }) {
  return (
    <S.Wrapper>
      {images.map((image, key) => {
        return(
          <img key={key} src={`#${image}`} alt={`image ${key}`}/>
        )
      })}
    </S.Wrapper>
  );
}

export default Gallery;