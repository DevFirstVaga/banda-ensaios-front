import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";

function Galeria(){
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        image="/images/links/galeria.jpg"
      />
      <Gallery
        images={["https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250", "https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250", "https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250",]}
      />
    </motion.div>
  )
}

export default Galeria