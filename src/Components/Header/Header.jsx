import React from 'react';
import './HeaderCss.css'

export const Header = () => {


    return (
        <header class="header">
            <h1 className='logoNome' > Maycon <h1 className='logoSobreNome'> Coutinho</h1></h1>
            <nav>
                <ul className='nav-links'>
                    <li href="#"> Sobre </li>
                    <li href="#"> Habilidades </li>
                    <li href="#"> Projetos </li>
                </ul>
            </nav>
            <button className='cta' href='#'> Contato </button>
        </header>
    )
}