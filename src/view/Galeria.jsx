import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import api from "../services/api";

function Galeria() {

  const galleryQuery = useQuery({
    queryKey: ["gallery"],
    queryFn: () => api.get("/media/image/list").then(res => res.data)
  });


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner
        image="/images/links/galeria.jpg"
      />
      <Gallery
        images={galleryQuery.data}
      />
    </motion.div>
  );
}

export default Galeria;