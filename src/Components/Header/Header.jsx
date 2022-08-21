import React from 'react';
import './HeaderCss.css'


export const Header = () => {


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
        <header class="header">
            <h1 className='logoNome' > Maycon <h1 className='logoSobreNome'> Coutinho</h1></h1>
            <nav>
                <ul className='nav-links'>
                    <li onClick={() => ScrollPossition("inicio")}> Inicio </li>
                    <li onClick={() => ScrollPossition("sobre")}> Sobre </li>
                    <li onClick={() => ScrollPossition("projetos")}> Projetos </li>
                    <li onClick={() => ScrollPossition("habilidades")}> Hard Skills </li>
                    <li onClick={() => ScrollPossition("Copetencias")}> Soft Skills </li>
                </ul>
            </nav>
            <button className='cta'  onClick={() => ScrollPossition("Contato")} > Contato </button>
        </header>
    )
}