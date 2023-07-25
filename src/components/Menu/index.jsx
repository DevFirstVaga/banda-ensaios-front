import React, { useState } from "react";
import { Navbar, Burguer, Line01, Line02, Line03, Animated01, Animated03, Box, DarkPanel, 
ImagemConjunto, BotaoHome, BotaoSobre, BotaoLineUp, BotaoContato,} from "../UI_Menu";
import imagem from "../../assets/images/Let's go.gif";
import { motion } from 'framer-motion';

const Menu = () => {
    const [toggleState, untoggle] = useState(true);

    const toggleHandler = () => {
        untoggle((toggleState) => !toggleState)
    };

    return(
        <Navbar>
            <Burguer onClick={toggleHandler}>
                {toggleState ? (    
                    <>
                        <Line01/>
                        <Line02/>
                        <Line03/>
                    </>
                ) :
                <>
                    <DarkPanel onClick={[]}></DarkPanel>
                    <Animated01>
                        <motion.div
                        initial={{width:'800%', opacity:0}}
                        animate={{width:'100%', opacity:1}}>
                            ${<Box onClick={[]}>
                                <ImagemConjunto src={imagem} alt="background"/>
                                <BotaoHome href="#">Home</BotaoHome>
                                <BotaoSobre href="#">Sobre</BotaoSobre>
                                <BotaoLineUp href="#">Line up</BotaoLineUp>
                                <BotaoContato href="#">Contato</BotaoContato>
                            </Box>}
                        </motion.div> 
                    </Animated01>
                    <motion.div
                    initial={{width:'400%'}}
                    animate={{width:'100%'}}>
                        <Animated01></Animated01>
                        <Animated03 style={{marginTop:"30%"}}>${<Box onClick={[]} style={{background: "#0575E6",  /* fallback for old browsers */
                        background: "-webkit-linear-gradient(to right, #021B79, #0575E6)",  /* Chrome 10-25, Safari 5.1-6 */
                        background: "linear-gradient(to right, #021B79, #0575E6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        }}></Box>}</Animated03>
                    </motion.div>
                </>}
            </Burguer>
        </Navbar>

    
    );
}

export default Menu