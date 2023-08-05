import * as S from "./styled"

function Link({children: label, image, link}) {
  const handleClick = () => {
    window.location.href = link;
  };

  return(
    <S.Wrapper image={image} onClick={handleClick}>
      <a draggable="false" href={link}>{label}</a>
    </S.Wrapper>
  )
}
export default Link