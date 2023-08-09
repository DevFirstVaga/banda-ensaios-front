import { useState } from "react";
import * as S from "./styled";
import { motion, AnimatePresence } from "framer-motion"
import ToggleMenu from "./ToggleMenu";
import SocialLinks from "../SocialLinks";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(toggle => !toggle);
  if (toggle) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "initial";

  const closeMenu = () => document.querySelector("button").click()

  return (
    <S.Wrapper>
      <div
        onClick={toggleHandler}
        aria-pressed={toggle}
        >
        <ToggleMenu/>
      </div>
      <SocialLinks />
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
                <a
                  draggable="false"
                  href="/"
                >
                  Home
                </a>
              </motion.li>

              <motion.li
                initial={{ x: -80 }}
                animate={{ x: 0 }}
              >
                <a
                  draggable="false"
                  href="/sobre"
                >
                  Sobre a Banda
                </a>
              </motion.li>

              <motion.li

                initial={{ x: 80 }}
                animate={{ x: 0 }}
              >
                <a
                  draggable="false"
                  href="/galeria"
                >
                  Galeria
                </a>
              </motion.li>

              <motion.li
                initial={{ x: -80 }}
                animate={{ x: 0 }}
              >
                <a
                  draggable="false"
                  href="/musicas"
                >
                  Nossas Músicas
                </a>
              </motion.li>

              <motion.li
                initial={{ x: 80 }}
                animate={{ x: 0 }}
              >
                <a
                  draggable="false"
                  href="/#footer"
                  onClick={closeMenu}
                >
                  Contato
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </S.Wrapper>
  );
}

export default Header