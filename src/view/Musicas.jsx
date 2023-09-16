import Banner from "../components/Banner";
import LastAlbum from "../components/LastAlbum";
import AlbumsGrid from "../components/LastAlbum/AlbumsGrid";
import { motion } from "framer-motion";

function Musicas(){
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        image="/images/links/nossas-musicas.jpg"
      />
      <LastAlbum
        image="/images/musicas/ultimo-album.png"
        imgDesc="Nosso último Album"
        albumName="Ring of Love"
        desc="Estamos animados em compartilhar com vocês nosso álbum mais recente, repleto de paixão, energia e novos sons inovadores. Não perca a chance de explorar as músicas que têm sido o coração e a alma da nossa jornada musical."
      />
      <AlbumsGrid/>
    </motion.div>
  )
}

export default Musicas