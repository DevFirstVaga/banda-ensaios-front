import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Galeria(){
  return(
    <>
      <Banner
        image="/images/links/galeria.jpg"
      />
      <Gallery
        images={["image0", "image1", "image2", "image3", "image4", "image5",]}
      />
    </>
  )
}

export default Galeria