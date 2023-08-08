import styled from "styled-components";
import { colorBurguer, colorButton} from "../UI/variaveis";

/*Compositing Menu Desktop */
export const Nav = styled.nav`
@media(min-width:1024px){

    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#000000;
    width:100%;
    height:5vh;
    padding:25px 450px;
    top:0;
    position:fixed;
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.06);
}

@media(max-width:1020px){
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#000000;
    width:100%;
    height:5vh;
    padding:25px 450px;
    top:0;
    position:fixed;
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.06);
}
`;

export const Sumary = styled.ul`
    @media(min-width:1024px){

        display:flex;
        align-items:center;
        justify-content:center;
    }

    @media(max-width:1020px){

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        position:fixed;
        top:-50px;
        right:0rem;
        width:300px;
        height:110vh;
        background:#000000;
        box-shadow:0 40px 60px rgba(0, 0, 0, 0);
        padding:20px 0 0 10px;
        margin:30px auto;
        border:2px solid #17ce97;
        z-index:-1;
    }
`;

export const Symbols = styled.i`
@media(min-width:1024px){

    position:absolute;
    font-size:1.5rem;
    color:black;
    right:1rem;
    opacity:0;
    visibility:hidden;
}

@media(max-width:1020px){
    position:absolute;
    font-size:1.5rem;
    color:black;
    right:1rem;
    opacity:1;
    visibility:visible;
}
`;

export const Topics = styled.li`
@media(min-width:1024px){

    list-style:none;
    padding:8px 30px;
    border-radius:5px;
    position:relative;
}

@media(max-width:1020px){
    list-style:none;
    padding:15px 100px;
    position:relative;
}
`;  

export const SubTopic = styled.a`
@media(min-width:1024px){
    text-decoration:none;
    font-size:0.77rem;
    font-family: 'Tektur', cursive;
    font-weight:200;
    color:#fff;
    transition:0.3s ease-in-out;

    &:hover{
        color:grey;
    }
}

@media(max-width:1020px){
    text-decoration:none;
    font-size:1.2rem;
    font-family: 'Tektur', cursive;
    font-weight:200;
    color:#fff;
    transition:0.3s ease-in-out;

    &:hover{
        color:grey;
    }
}
`;

export const Wrapper = styled.div`
@media(min-width:1024px){

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:relative;
    margin-right:30px;
    opacity:0;
    visibility:hidden;
}

@media(max-width:1020px){
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    position:relative;
    margin-right:30px;
    opacity:1;
    visibility:visible;
}
`;

export const Icon_primary = styled.i`
    position:absolute;
    font-size:1.7rem;
    color:white;
    top:100px;
    left:0;
`;

export const Icon_secundary = styled.i`
    position:absolute;
    font-size:1.7rem;
    color:white;
    top:100px;
    left:-50px;
`;

export const Icon_terciary = styled.i`
    position:absolute;
    font-size:1.7rem;
    color:white;
    top:100px;
    left:50px;
`;

export const ButtonsDesktop = styled.div`
@media(min-width:1024px){

    display:flex;
    justify-content:space-between;
    margin-left:45%;
    position:absolute;
}

@media(max-width:1020px){
    display:flex;
    justify-content:space-between;
    margin-left:100vh;
    position:relative;
}
`;

export const BtnCabecalho = styled.a`
    text-align:center;
    border-radius:3px;
    padding: 0.5rem 2rem 0.5rem;
    margin: 0 10px;
    font-weight:200;
    text-decoration:none;
    font-size:0.7rem;
    font-family:'Tektur', cursive;
    border:1px solid #fff;

    background:${(props) => (props.primary ? "white" : colorButton)};
    color:${(props) => (props.primary ? colorButton : "white")};
`;

/*Compositing Menu Mobile */
export const NavMobile = styled.div`
@media(min-width:1024px){

    background:transparent;
    width:25px;
    height:25px;
    position:fixed;
    cursor:pointer;
    right:1rem;
    opacity:0;
    visibility:hidden;
}

@media(max-width:1020px){
    background:transparent;
    width:25px;
    height:25px;
    position:fixed;
    cursor:pointer;
    right:1rem;
    opacity:1;
    visibility:visible;
}
`;

export const Line_primary = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px auto;
    box-shadow:0 5px 5px #000;
`;

export const Line_primary_X = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px -2vh;
    z-index:100;
    transform:rotate(45deg) translate(.5rem, .5rem);
    position:fixed;
`;

export const Line_secundary = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px auto;
    box-shadow:0 5px 5px #000;
    opacity:1;
`;

export const Line_secundary_X = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px -25vh;
    z-index:100;
    opacity:0;
    position:fixed;
`;

export const Line_terciary = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px auto;
    box-shadow:0 5px 5px #000;
`;

export const Line_terciary_X = styled.div`
    width:25px;
    height:2px;
    background:${colorBurguer};
    margin:5px -2vh;
    z-index:100;
    transform:rotate(-45deg) translate(-.3rem, .5rem);
    position:fixed;
`;