import Banner from "../components/Banner";
import AboutImgAndQuote from "../components/AboutImgAndQuote";
import Paragraph from "../components/Paragraph";

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
            <strong>É preciso muito amor pra poder pulsar. É preciso paz pra poder sorrir. É preciso a chuva para florir."</strong> <span>Cazuza (Música: "O Tempo Não Para")</span>
          </>
        }
      />
      <Paragraph>
        Os Vórtex estão de volta com dez músicas em um novo álbum arrebatador. Influentes, importantes e eletrizantes ao vivo, eles são uma banda enraizada no DNA deste país. É impossível imaginar o cenário musical sem eles, desde o impressionante e angular "Turbiões" em 2002 até seu último suspiro, a épica "Cidade Fantasma" em 2004. Eles misturaram o rock alternativo com elementos eletrônicos, preocupações políticas locais com questões mais amplas. A ascensão dos Vórtex foi rápida. Dois anos, sete hits, incluindo dois primeiros lugares, dois álbuns de sucesso, turnês esgotadas – as invasões de palco em massa e a energia do público só adicionaram ao mito. Eles estavam em todos os lugares; na TV, nas rádios, nas baladas e nas festas escolares. Naquela época, a nação parecia mais polarizada do que nunca: cultos jovens de extrema-direita, violência nas ruas, governo conservador. No entanto, o fim deles foi repentino.
      </Paragraph>
    </>
  );
}

export default Sobre;