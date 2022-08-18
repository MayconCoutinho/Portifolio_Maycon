import React from 'react';
import './HeaderCss.css'

export const Header = () => {


const ScrollPossition = (name) =>{

    if(name === "inicio"){

        window.scroll(0, 0) 
    }
    if(name === "sobre"){

        window.scroll(0, 800) 

    }
    if(name === "habilidades"){
        window.scroll(0, 1550) 
    }
    if(name === "projetos"){

        window.scroll(0, 7020) 

    }

}

    return (
        <header class="header">
            <h1 className='logoNome' > Maycon <h1 className='logoSobreNome'> Coutinho</h1></h1>
            <nav>
                <ul className='nav-links'>
                    <li onClick={() => ScrollPossition("inicio")}> Inicio </li>
                    <li onClick={() => ScrollPossition("sobre")}> Sobre </li>
                    <li onClick={() => ScrollPossition("habilidades")}> Habilidades </li>
                    <li onClick={() => ScrollPossition("projetos")}> Projetos </li>
                </ul>
            </nav>
            <button className='cta' href='#'> Contato </button>
        </header>
    )
}