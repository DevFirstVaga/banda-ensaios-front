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
        images={["/images/gallery/1.jpg", "/images/gallery/2.jpg", "/images/gallery/3.jpg", "/images/gallery/4.jpg", "/images/gallery/5.jpg", "/images/gallery/6.jpg", "/images/gallery/7.jpg", "/images/gallery/8.jpg", "/images/gallery/9.jpg", "/images/gallery/10.jpg", "/images/gallery/11.jpg", "/images/gallery/12.jpg"]}
      />
    </motion.div>
  )
}

export default Galeria