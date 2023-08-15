import Banner from "../components/Banner";
import LastAlbum from "../components/LastAlbum";

function Musicas(){
  return(
    <>
      <Banner
        image="/images/links/nossas-musicas.jpg"
      />
      <LastAlbum
        image="/images/musicas/ultimo-album.png"
        imgDesc="Nosso último Album"
        albumName="Ring of Love"
        desc="Estamos animados em compartilhar com vocês nosso álbuns mais recentes, repleto de paixão, energia e novos sons inovadores. Não perca a chance de explorar as músicas que têm sido o coração e a alma da nossa jornada musical."
      />
    </>
  )
}

export default Musicas