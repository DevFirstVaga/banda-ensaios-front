import { BsXCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "../Image";
import * as S from "./styled";
import Button from "../Button";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function Gallery({ images }) {

  const [imgData, setImgData] = useState({ img: "", i: 0 });

  const handleClick = (img, i) => {
    setImgData({ img, i });
  };

  const closeGallery = () => {
    setImgData({ img: "", i: null });
    document.body.classList.remove("no-scroll");
  };

  const nextImg = () => {
    if (imgData.i < images.length - 1) {
      setImgData({ img: images[imgData.i + 1], i: imgData.i + 1 });
    }
  };

  const prevImg = () => {
    if (imgData.i > 0) {
      setImgData({ img: images[imgData.i - 1], i: imgData.i - 1 });
    }
  };

  const handleEscPress = (event) => (event.key === "Escape") && closeGallery()

  useEffect(() => {
    document.addEventListener("keyup", handleEscPress);
    return () => document.removeEventListener("keyup", handleEscPress);
  }, []);

  return (
    <>
      {imgData.img && (
        <S.FullImageScreen>
          <Button className="close-btn" variant="gallery-btn" leftIcon={<BsXCircle />} onClick={closeGallery} />
          <Image
            full
            image={imgData.img}
          />
          <div className="handle-btns">
            <Button className="handle-btn" onClick={prevImg} variant="gallery-btn" leftIcon={<VscChevronLeft />} />
            <Button className="handle-btn" onClick={nextImg} variant="gallery-btn" leftIcon={<VscChevronRight />} />
          </div>
        </S.FullImageScreen>
      )}
      <S.WrapperGallery>
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
      </S.WrapperGallery>
    </>
  );
}

export default Gallery;