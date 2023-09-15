import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Galeria(){
  return(
    <>
      <Banner
        image="/images/links/galeria.jpg"
      />
      <Gallery
        images={["https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250", "https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250", "https://source.unsplash.com/featured/300x250", "https://source.unsplash.com/random/300x250",]}
      />
    </>
  )
}

export default Galeria