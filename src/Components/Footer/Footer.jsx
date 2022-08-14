import React from 'react';
import "./index.css";


export const Footer = () => {

    return (
        <footer>
        <h1 className='logoNome' > Maycon <h1 className='logoSobreNome'> Coutinho</h1></h1>
        <div className="social-icons-container">
          <a
            href="https://www.linkedin.com/in/maycon-coutinho/"
            target="_blank"
            className="social-icon"
          ></a>
          <a
            href="https://www.instagram.com/mayconcoutin/"
            target="_blank"
            className="social-icon"
          ></a>
          <a
            href="https://api.whatsapp.com/send/?text=Ol%C3%A1%20meu%20nome%20%C3%A9%20Maycon%20Coutinho,%20%20sou%20Desenvolvedor%20Full%20Stack%20e%20esse%20%C3%A9%20o%20meu%20WhatsApp&phone=5528999287132"
            target="_blank"
            className="social-icon"
          ></a>
        </div>
        <ul className="footer-menu-container">
          <li onClick={() => alert("Legal")} className="menu-item">Legal</li>
          <li onClick={() => alert("Cookies")} className="menu-item">Cookies</li>
          <li onClick={() => alert("Privacy")} className="menu-item">Privacy</li>
          <li onClick={() => alert("Shipping")} className="menu-item">Shipping</li>
          <li onClick={() => alert("Refounds")} className="menu-item">Refounds</li>
        </ul>
        <span className="copyright">
          &copy;2022, Portifolio de Maycon Coutinho. All rights reserved.
        </span>
      </footer>
    )

}