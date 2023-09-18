import { BsXCircle } from "react-icons/bs";
import { useState } from "react";
import Image from "../Image";
import * as S from "./styled";

function Gallery({ images }) {

  const [imgData, setImgData] = useState({ img: "", i: 0 });

  const handleClick = (img, i) => {
    setImgData({ img, i });
  };

  const closeGallery = () => {
    setImgData({img: "", i: null})
    document.body.classList.remove("no-scroll")
  };

  return (
    <>
      {imgData.img && (
        <>
          <S.FullImageScreen>
          <S.CloseButton onClick={closeGallery}><BsXCircle/></S.CloseButton>
            <Image
              full
              image={imgData.img}
            />
          </S.FullImageScreen>
        </>
      )}
      <S.Wrapper>
        {images.map((image, key) => {
          return (
            <Image
              key={key}
              image={image}
              alt={`image ${key}`}
              onClick={() => handleClick(image, key)}
            />
          );
        })}
      </S.Wrapper>
    </>
  );
}

export default Gallery;