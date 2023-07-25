import styled from "styled-components";

/*NAVBAR - ELEMENTO PAI */
export const Navbar = styled.div`
    background-color:tranparent;
    top:0%;
    width:100%;
    height:10vh;
    position:fixed;
`;

/*BURGUER - HEADER */
export const Burguer = styled.div`

@media (max-width:500px){
    background-color:transparent;
    width:30px;
    height:30px;
    position:fixed;
    top:30px;
    right:2rem;
    z-index:100;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    cursor:pointer;
}

@media (min-width:375px){
    background-color:transparent;
    width:30px;
    height:30px;
    position:fixed;
    top:30px;
    right:2rem !important;
    z-index:100;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    cursor:pointer;
}

`;

/*NOT ANIMATED */
export const Line01 = styled.div`
    background-color:white; width:30px; height:2px;

`;

export const Line02 = styled.div`
    background-color:white; width:30px; height:2px;

 `;

export const Line03 = styled.div`
    background-color:white; width:30px; height:2px;
`;

/*ANIMATED MENU */
export const Animated01 = styled.div`
    background-color:white; width:30px; height:2px;
    transform:rotate(45deg) translate(0.3rem, 0.3rem);
    margin-top:-52%;
`;

export const Animated02 = styled.div`
    background-color:white; width:30px; height:2px;
    opacity:0;
`;

export const Animated03 = styled.div`
    background-color:white; width:30px; height:2px;
    transform:rotate(-45deg) translate(0.4rem, -0.4rem);
`;

/*BOX - HEADER */
export const Box = styled.div`

@media (max-width:500px){
    background: #780206;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #061161, #780206);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width:100vh;
    margin-left:50%;
    margin-top:-12%;
    min-height:120vh;
    z-index:2;
    cursor:default;
}

@media (min-width:280px){
    background: #780206;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #061161, #780206);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width:100vh;
    margin-left:50%;
    margin-top:-12%;
    min-height:120vh;
    z-index:2;
    cursor:default;
}
`;

export const DarkPanel = styled.div`
    width:100vh;
    height:150vh;
    margin-left:-50vh;
    margin-top:-150%;
    position:absolute;
    background-color:black;
`;

export const ImagemConjunto = styled.img`
@media (max-width:500px){
    width:100%;
    height:50vh;
    margin-top:30%;
    vertical-align:middle;
}

@media (min-width:280px){
    width:100%;
    height:50vh;
    margin-top:20%;
    margin-left:0%;
    vertical-align:middle;
}

@media (min-width:360px){
    width:100%;
    height:50vh;
    margin-top:30%;
    vertical-align:middle;
}

@media (min-width:375px){
    width:100%;
    height:50vh;
    margin-top:30%;
    vertical-align:middle;
}

@media (min-width:768px){
    width:100%;
    height:50vh;
    margin-top:40%;
    margin-left:-10%;
    vertical-align:middle;
}

@media (min-width:820px){
    width:100%;
    height:50vh;
    margin-top:40%;
    margin-left:-10%;
    vertical-align:middle;
}
`;

export const BotaoSobre = styled.button`
@media(max-width:500px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:8rem;
    transform:rotate(-30deg) translate(0%, 75vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        transform:translate(-50%, -50%);

        width:100%;
        height:100%;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0%;
        opacity:1;
    }

    &:hover{
        &:before{
            width:100%;
            opacity:0;
        }
    }
}

@media(min-width:280px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:3.5rem;
    transform:rotate(-30deg) translate(0%, 63vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}

@media(min-width:360px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:7.2rem;
    transform:rotate(-30deg) translate(0%, 74.5vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
    }

    &:hover{
        &:before{
            width:20vh;
        }
    }
}

@media(min-width:375px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    border-radius:50px;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:6.3rem;
    transform:rotate(-30deg) translate(0%, 74.5vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-radius:3px;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background:pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0%;
        opacity:1;
    }

    &:hover{
        &:before{
            width:20vh;
            opacity:0;
        }
    }
}

@media(min-width:390px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;

    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:8.2rem;
    transform:rotate(-30deg) translate(0%, 74.5vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        transform:translate(-50%, -50%);

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:20vh;
        height:15vh;

        background:pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            width:20vh;
            opacity:0;
        }
    }
}

@media(min-width:412px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:9.2rem;
    transform:rotate(-30deg) translate(0%, 74.5vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background:pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            width:20vh;
            opacity:0;
        }
    }
}

@media(min-width:414px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:8.7rem;
    transform:rotate(-30deg) translate(0%, 74.5vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-radius:3px;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:15vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0%;
        opacity:1;
    }

    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}

@media(min-width:540px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;

    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:7.3rem;
    transform:rotate(-30deg) translate(0%, 74vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:15vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
    }

    &:hover{
        &:before{
            width:15vh;
        }
    }
}

@media(min-width:768px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:21rem;
    transform:rotate(-30deg) translate(0%, 86vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            width:20vh;
            opacity:0;
        }
    }
}

@media(min-width:820px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;

    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:24rem;
    transform:rotate(-30deg) translate(0%, 86vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
    }

    &:hover{
        &:before{
            width:20vh;
        }
    }
}

@media(min-width:912px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:28rem;
    transform:rotate(-30deg) translate(0%, 86vh);
    
    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: pink;

        z-index:-1;
        transition:all 0.7s;

    }

    &:before{
        width:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            width:20vh;
            opacity:0;
        }
    }
}

`;

export const BotaoHome = styled.button`

@media (max-width:500px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-7.4rem;
    transform:rotate(-30deg) translate(0%, 72vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:100%;
        height:100%;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0%;
        opacity:1;
    }

    &:hover{
        &:before{
            height:100%;
            opacity:0;
        }
    }
}

@media (min-width:280px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-8.5rem;
    transform:rotate(-30deg) translate(0%, 60vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

@media (min-width:360px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;

    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-6.9rem;
    transform:rotate(-30deg) translate(0%, 72vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
    }

    &:hover{
        &:before{
            height:20vh;
        }
    }
}

@media (min-width:375px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid orange;
    border-radius:50px;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-6.5rem;
    transform:rotate(-30deg) translate(0%, 71vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background:rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0%;
        opacity:1;
    }

    &:hover{
        &:before{
            opacity:0;
            height:20vh;
        }
    }
}

@media (min-width:390px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
  
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-7.4rem;
    transform:rotate(-30deg) translate(0%, 72vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:412px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-8.1rem;
    transform:rotate(-30deg) translate(0%, 72vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:414px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-7.8rem;
    transform:rotate(-30deg) translate(0%, 72vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:15vh;
        height:20vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:540px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:-6.8rem;
    transform:rotate(-30deg) translate(0%, 70vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:15vh;

        background: rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

@media (min-width:768px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:1rem;
    transform:rotate(-30deg) translate(0%, 82.5vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background: rgb(143, 203, 238);
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:820px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:2rem;
    transform:rotate(-30deg) translate(0%, 82.5vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background:rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:912px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    right:2rem;
    transform:rotate(-30deg) translate(0%, 83vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:20vh;
        height:20vh;

        background:rgb(143, 203, 238);

        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }

    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}
`;

export const BotaoLineUp = styled.button`
@media (max-width:500px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:8.5rem;
    transform:rotate(-30deg) translate(0%, 55vh);

    &:before{
        content:'';
        position:absolute;
        top:0%;
        left:0%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0%;
        height:100%;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:100%;
            opacity:0;
        }
    }
}

@media (min-width:280px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:4rem;
    transform:rotate(-30deg) translate(0%, 43vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:0vh;
        height:10vh;

        background:rgb(233, 226, 163);

        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:10vh;
            opacity:0;
        }
    }
}

@media (min-width:360px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    border-left:5px;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:7.5rem;
    transform:rotate(-30deg) translate(0%, 54vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        width:15vh;
        height:10vh;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        background:rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        width:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}

@media (min-width:375px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:6.5rem;
    transform:rotate(-30deg) translate(0%, 54vh);

    &:before{
        content:'';
        position:absolute;
        top:40%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:15vh;
        height:10vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        width:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}

@media (min-width:390px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    border-left:5px;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:9rem;
    transform:rotate(-30deg) translate(0%, 55vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:15vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:15vh;
        }
    }
}

@media (min-width:412px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:9.7rem;
    transform:rotate(-30deg) translate(0%, 55vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        background:rgb(233, 226, 163);
        width:0vh;
        height:15vh;

        background: 
        z-index:-1;
        transition:all 0.7s;
    }
    &:before{
        width:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}

@media (min-width:414px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:9.2rem;
    transform:rotate(-30deg) translate(0%, 55vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:15vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:15vh;
        }
    }
}

@media (min-width:540px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:7.5rem;
    transform:rotate(-30deg) translate(0%, 54.5vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:15vh;

        background:rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:10vh;
        }
    }
}

@media (min-width:768px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:20.9rem;
    transform:rotate(-30deg) translate(0%, 66.3vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:10vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:before{
        width:0vh;
    }
    &:hover{
        &:before{
            width:15vh;
        }
    }
}

@media (min-width:820px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:25rem;
    transform:rotate(-30deg) translate(0%, 67vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:15vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:before{
        width:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            width:15vh;
            opacity:0;
        }
    }
}


@media (min-width:912px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    right:29rem;
    transform:rotate(-30deg) translate(0%, 67vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:0vh;
        height:15vh;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:15vh;
        }
    }
}

`;

export const BotaoContato = styled.button`
@media (max-width:500px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:12rem;
    transform:rotate(-30deg) translate(0%, 47.6vh);

    &:before{
        content:'';
        position:absolute;
        top:0%;
        left:0%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        width:100%;
        height:0%;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:100%;
            opacity:0;
        }
    }
}

@media (min-width:280px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;

    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-5.6rem;
    transform:rotate(-30deg) translate(0%, 36vh);
    z-index:100;

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);
        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:15vh;
            opacity:0;
        }
    }
}

@media (min-width:360px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.4rem;
    transform:rotate(-30deg) translate(0%, 47vh);
    z-index:100;

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        width:15vh;
        height:20vh;

        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        background:rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }
}

@media (min-width:375px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.3rem;
    transform:rotate(-30deg) translate(0%, 47vh);
    z-index:100;

    &:before{
        content:'';
        position:absolute;
        top:40%;
        left:50%;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        transform:translate(-50%, -50%);

        width:15vh;
        height:20vh;

        background:rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            height:20vh;
            opacity:0;
        }
    }

}

@media (min-width:390px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.5rem;
    transform:rotate(-30deg) translate(0%, 48vh);
    z-index:100;

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

@media (min-width:412px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.8rem;
    transform:rotate(-30deg) translate(0%, 47.9vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        width:15vh;
        height:0vh;

        background:  rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    $:before{
        height:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            height:15vh;
            opacity:0;
        }
    }
}

@media (min-width:414px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.6rem;
    transform:rotate(-30deg) translate(0%, 47.9vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:20vh;
        }
    }
}

@media (min-width:540px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:-3.9rem;
    transform:rotate(-30deg) translate(0%, 47.9vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

@media (min-width:768px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:6.5rem;
    transform:rotate(-30deg) translate(0%, 59.7vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

@media (min-width:820px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:7.5rem;
    transform:rotate(-30deg) translate(0%, 59.7vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;

        background:rgb(161, 51, 87);
        width:15vh;
        height:0vh;

        background: 
        z-index:-1;
        transition:all 0.7s;
    }

    &:before{
        height:0vh;
        opacity:1;
    }
    &:hover{
        &:before{
            height:15vh;
            opacity:0;
        }
    }
}

@media (min-width:912px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    
    cursor:pointer;
    position:absolute;
    padding:0.5rem 1rem 0.5rem 1rem;
    right:9.5rem;
    transform:rotate(-30deg) translate(0%, 59.7vh);

    &:before{
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:50px;
        border-bottom-right-radius:50px;
        width:15vh;
        height:0vh;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:15vh;
        }
    }
}

`;
