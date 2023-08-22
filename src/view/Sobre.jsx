import Banner from "../components/Banner";
import AboutImgAndQuote from "../components/AboutImgAndQuote"

function Sobre() {
  return (
    <>
      <Banner
        image="/images/links/sobre-a-banda.jpg"
      />
      <AboutImgAndQuote
        image="/images/about/about.jpg"
        alt="Sobre a Banda"
        quote={
          <>
            <strong>É preciso muito amor pra poder pulsar. É preciso paz pra poder sorrir. É preciso a chuva para florir."</strong> Cazuza (Música: "O Tempo Não Para")
          </>
        }
      />
      
    </>
  );
}

export default Sobre;