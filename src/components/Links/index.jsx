import * as S from "./styled"
import Link from "./Link"

function Links(){
  return(
    <S.Wrapper>
      <Link
        link="https://example.org" 
        image="/images/links/sobre-a-banda.jpg"
      >
        Sobre a Banda
      </Link>
      <Link
        link="https://example.org" 
        image="/images/links/nossas-musicas.jpg"
      >
        Nossas Músicas
      </Link>
      <Link
        link="https://example.org" 
        image="/images/links/galeria.jpg"
      >
        Galeria
      </Link>
    </S.Wrapper>
  )
}

export default Links