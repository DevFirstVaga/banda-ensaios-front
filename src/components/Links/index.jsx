import * as S from "./styled"
import Link from "./Link"

function Links(){
  return(
    <S.Wrapper>
      <Link
        link="https://example.org" 
        image="/images/links/sobre-a-banda.jpeg"
      >
        Sobre a Banda
      </Link>
      <Link
        link="https://example.org" 
        image="/images/links/nossas-musicas.jpeg"
      >
        Nossas Músicas
      </Link>
      <Link
        link="https://example.org" 
        image="/images/links/galeria.jpeg"
      >
        Galeria
      </Link>
    </S.Wrapper>
  )
}

export default Links