import { useState } from "react";
import * as S from "./styled";
import { motion, AnimatePresence } from "framer-motion"
import ToggleMenu from "./ToggleMenu";
import { BsSpotify, BsInstagram, BsYoutube } from "react-icons/bs"

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(toggle => !toggle);
  if (toggle) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "initial";

  return (
    <S.Wrapper>
      <div
        onClick={toggleHandler}
        aria-pressed={toggle}
      >
        <ToggleMenu/>
      </div>
      <div className="icons">
        <a href="#">
          <BsSpotify />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
        <a href="#">
          <BsYoutube />
        </a>
      </div>
      <AnimatePresence>
        {toggle &&
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul>
              <motion.li
                initial={{ x: 80 }}
                animate={{ x: 0 }}
              >
                <a draggable="false" href="#">Home</a>
              </motion.li>

              <motion.li
                initial={{ x: -80 }}
                animate={{ x: 0 }}
              >
                <a draggable="false" href="#">Sobre a Banda</a>
              </motion.li>

              <motion.li

                initial={{ x: 80 }}
                animate={{ x: 0 }}
              >
                <a draggable="false" href="#">Galeria</a>
              </motion.li>

              <motion.li
                initial={{ x: -80 }}
                animate={{ x: 0 }}
              >
                <a draggable="false" href="#">Nossas Músicas</a>
              </motion.li>

              <motion.li
                initial={{ x: 80 }}
                animate={{ x: 0 }}
              >
                <a draggable="false" href="#">Contato</a>
              </motion.li>
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </S.Wrapper>
  );
}

export default Header