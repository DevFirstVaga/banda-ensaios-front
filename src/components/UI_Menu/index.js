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

@media (min-width:200px){
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

@media (max-width:2150px){
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
    
    min-height:120vh;
    z-index:2;
    cursor:default;
}
`;

export const DarkPanel = styled.div`
    width:400vh;
    height:150vh;
    margin-left:-50vh;
    margin-top:-150%;
    position:absolute;
    background-color:#000000AA;
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
    margin-left:0%;
    vertical-align:middle;
}

@media (min-width:820px){
    width:100%;
    height:50vh;
    margin-top:40%;
    margin-left:0%;
    vertical-align:middle;
    position:relative;
}
`;

export const BotaoSobre = styled.button`
@media(min-width:200px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1rem 0.5rem 1rem;
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

        width:300%;
        height:400%;

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
            width:300%;
            opacity:0;
        }
    }
}

@media(max-width:1024px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1rem 0.5rem 1rem;
    transform:rotate(-30deg) translate(4.7rem, -5.9rem);
    
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

        width:300%;
        height:400%;

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
            width:300%;
            opacity:0;
        }
    }
}

`;

export const BotaoHome = styled.button`

@media (min-width:200px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    transform:rotate(-30deg) translate(30rem, 1.8rem);
    z-index:200;
    
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
    
        width:300%;
        height:350%;
    
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
            height:350%;
            opacity:0;
        }
    }
}

@media (max-width:1024px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1.4rem 0.5rem 1.4rem;
    transform:rotate(-30deg) translate(20rem, 2rem);
    z-index:200;
    
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
    
        width:300%;
        height:400%;
    
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
            height:400%;
            opacity:0;
        }
    }
}

`;

export const BotaoLineUp = styled.button`
@media (min-width:200px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    transform:rotate(-30deg) translate(20rem, 4rem);

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

        width:0%;
        height:300%;

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

@media (max-width:1024px){
    
    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.2rem 1.4rem 0.2rem 1.4rem;
    transform:rotate(-30deg) translate(0.1rem, -17rem);

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

        width:0%;
        height:300%;

        background: rgb(233, 226, 163);
        z-index:-1;
        transition:all 0.7s;
    }
    &:hover{
        &:before{
            width:200%;
            opacity:0;
        }
    }
}

`;

export const BotaoContato = styled.button`
@media (min-width:200px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1rem 0.5rem 1rem;
    transform:rotate(-30deg) translate(10rem, 4rem);

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

@media (max-width:1024px){

    background-color:transparent;
    font-size:1.rem;
    color:white;
    border:0px solid white;
    cursor:pointer;
    position:relative;
    padding:0.5rem 1rem 0.5rem 1rem;
    transform:rotate(-30deg) translate(4.3rem, -18rem);

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

        width:200%;
        height:0%;

        background: rgb(161, 51, 87);
        z-index:-1;
        transition:all 0.7s;
    }

    &:hover{
        &:before{
            height:300%;
            opacity:0;
        }
    }
}

`;
