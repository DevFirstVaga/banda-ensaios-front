import { useState } from "react";
import * as S from "./styled";
import { BsList, BsX } from "react-icons/bs"
import ToggleMenu from "../ToggleMenu";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(toggle => !toggle);

  return (
    <S.Wrapper>
      <div onClick={toggleHandler}>
        <ToggleMenu/>
      </div>
        {toggle &&
      <nav>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
      </nav>
        }
    </S.Wrapper>
  );
}

export default Header