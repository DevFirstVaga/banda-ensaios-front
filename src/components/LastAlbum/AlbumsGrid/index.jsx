import * as S from "./styled"
import Album from "../Album"

function AlbumsGrid(){
  return(
    <S.Wrapper>
      <Album
        image="/images/musicas/ultimo-album.png"
        alt="Ultimo Album"
      />
      <Album
        image="/images/musicas/ultimo-album.png"
        alt="Ultimo Album"
      />
      <Album
        image="/images/musicas/ultimo-album.png"
        alt="Ultimo Album"
      />
      <Album
        image="/images/musicas/ultimo-album.png"
        alt="Ultimo Album"
      />
    </S.Wrapper>
  )
}

export default AlbumsGrid