import * as S from "./styled"
import SocialLinks from "../SocialLinks"

function Footer() {
  return (
    <S.Wrapper id="footer">
      <SocialLinks/>
      <p>© 2018 - 2023 BANDA ENSAIOS</p>
    </S.Wrapper>
  )
}

export default Footer;