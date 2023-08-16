import * as S from "./styled"
import { BsSpotify, BsYoutube } from "react-icons/bs";
import Button from "../Button";

function LastAlbum({image, imgDesc, albumName, desc}){
  return(
    <S.Wrapper>
      <img
        src={image}
        alt={imgDesc}
      />
      <div>
        <h2>{albumName}</h2>
        <p>{desc}</p>
        <h3>Ouça agora mesmo!</h3>
        <div>
          <Button href="https://open.spotify.com" leftIcon={<BsSpotify/>}>Spotify</Button>
          <Button href="https://youtube.com" leftIcon={<BsYoutube/>}>Youtube</Button>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default LastAlbum