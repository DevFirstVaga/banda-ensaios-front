import Banner from "../components/Banner";
import Quote from "../components/Quote";

function Sobre() {
  return (
    <>
      <Banner
        image="/images/links/sobre-a-banda.jpg"
      />
      <Quote quote={
        <>
          <strong>É preciso muito amor pra poder pulsar. É preciso paz pra poder sorrir. É preciso a chuva para florir."</strong> Cazuza (Música: "O Tempo Não Para")
        </>
      } />

      
    </>
  );
}

export default Sobre;