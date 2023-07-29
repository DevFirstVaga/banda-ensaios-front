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
                    <DarkPanel onClick={() => untoggle(false)}></DarkPanel>
                    <Animated01>
                        <motion.div
                        initial={{width:'800%', opacity:0}}
                        animate={{width:'100%', opacity:1}}>
                            <Box onClick={[]}>
                                <ImagemConjunto src={imagem} alt="background"/>
                                <BotaoHome href="#">Home</BotaoHome>
                                <BotaoSobre href="#">Sobre</BotaoSobre>
                                <BotaoLineUp href="#">Line up</BotaoLineUp>
                                <BotaoContato href="#">Contato</BotaoContato>
                            </Box>
                        </motion.div> 
                    </Animated01>
                    <motion.div
                    initial={{width:'400%'}}
                    animate={{width:'100%'}}>
                        <Animated01></Animated01>
                        <Animated03 style={{marginTop:"30%"}}><Box onClick={[]}
                        style={{position:"absolute", left:"10px", top:"10px"}}></Box>
                        </Animated03>
                    </motion.div>
                </>}
            </Burguer>
        </Navbar>
    );
}

export default Menu