import * as S from "./styled";
import { useState } from "react"

function ToggleMenu(){

  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => setIsActive(isActive => !isActive);

  return(
    <S.Wrapper
      onClick={toggleHandler}
      className={isActive ? "active" : ""}
    >
      <i/>
    </S.Wrapper>
  )
}

export default ToggleMenu