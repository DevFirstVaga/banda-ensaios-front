import * as S from "./styled"
import Link from "./Link"

function Links(){
  return(
    <S.Wrapper>
      <Link
        link="https://example.org" 
        image="/src/images/sobre-a-banda.jpeg"
      >
        Sobre a Banda
      </Link>
      <Link
        link="https://example.org" 
        image="/src/images/nossas-musicas.jpeg"
      >
        Nossas Músicas
      </Link>
      <Link
        link="https://example.org" 
        image="/src/images/galeria.jpeg"
      >
        Galeria
      </Link>
    </S.Wrapper>
  )
}

export default Links