import React from 'react';
import { MenuMobile, MeuHeader, LogoNome, LogoSobreNome, Barras, ButtonContato, NavLinks} from './styled.jsx';
import { useState } from 'react';

export const Header = () => {


const [menuMobile, setMenuMobileTrue] = useState(false)

const MenuMobileFuncao = () => {

    if(menuMobile === false){
        setMenuMobileTrue(true)
    }
    else{
        setMenuMobileTrue(false)
    }
}

const ScrollPossition = (name) =>{


    if(name === "inicio"){

        window.scroll(0, 0) 
    }
    if(name === "sobre"){

        window.scroll(0, 790) 

    }
    if(name === "projetos"){
        window.scroll(0, 1530) 
    }
    if(name === "habilidades"){

        window.scroll(0, 2380) 

    }
    if(name === "Copetencias"){

        window.scroll(0, 6770) 

    }
    if(name === "Contato"){

        window.scroll(0, 7450) 

    }

}

    return (

        <MeuHeader>
            <LogoNome> Maycon <LogoSobreNome> Coutinho</LogoSobreNome><MenuMobile> <button onClick={() => MenuMobileFuncao()}> 
                    <Barras></Barras>
                    <Barras></Barras>
                    <Barras></Barras>
            </button></MenuMobile></LogoNome>
            <NavLinks variant={ menuMobile == true}> 
            <nav>
                <ul>
                    <li onClick={() => ScrollPossition("inicio")}> Inicio </li>
                    <li onClick={() => ScrollPossition("sobre")}> Sobre </li>
                    <li onClick={() => ScrollPossition("projetos")}> Projetos </li>
                    <li onClick={() => ScrollPossition("habilidades")}> Hard Skills </li>
                    <li onClick={() => ScrollPossition("Copetencias")}> Soft Skills </li>
                </ul>
            </nav>
            </NavLinks>
            <ButtonContato variant={ menuMobile == true}> <button  onClick={() => ScrollPossition("Contato")} > Contato </button> </ButtonContato>

        </MeuHeader>
    )
}