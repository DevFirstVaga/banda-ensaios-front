import * as S from "./styled";
import { BsSpotify, BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

function SocialLinks() {
  return (
    <S.Wrapper>
      <a
        href="https://open.spotify.com"
        target="_blank"
      >
        <BsSpotify />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
      >
        <BsYoutube />
      </a>
    </S.Wrapper>
  );
}

export default SocialLinks;