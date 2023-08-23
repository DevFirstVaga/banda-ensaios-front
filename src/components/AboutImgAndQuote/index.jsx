import * as S from "./styled";
import Quote from "./Quote";

function AboutImgAndQuote({ image, alt, quote }) {
  return (
    <S.Wrapper>
      <Quote quote={quote} />
      <img src={image} alt={alt} />
    </S.Wrapper>
  );
}

export default AboutImgAndQuote;