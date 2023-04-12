import React from 'react';
import { Perfil, Container, TextoSobre, Habilidades } from './styled';
import img_perfil from '../../assets/sobre/perfil2.jpg';
import git from '../../assets/habilidades/Git.png'
import javascript from '../../assets/habilidades/javascript.png'
import jest from '../../assets/habilidades/jest.png'
import node from '../../assets/habilidades/node.png'
import react from '../../assets/habilidades/react.png'
import sass from '../../assets/habilidades/sass.png'
import styled from '../../assets/habilidades/styled.png'
import TypeScript from '../../assets/habilidades/TypeScript.png'
import python from '../../assets/habilidades/python.png'
import css from '../../assets/habilidades/css.png'
import html from '../../assets/habilidades/html.png'
import mysql from '../../assets/habilidades/mysql.png'
import mongodb from '../../assets/habilidades/mongodb.png'
import nextjs from '../../assets/habilidades/nextjs.png'
import aws from '../../assets/habilidades/aws.png'
import firebase from '../../assets/habilidades/firebase.png'
import docker from '../../assets/habilidades/docker.png'

export const Sobre = () => {
    const titulo = "< Carreira />"
    return (
        <>
            <Container>
                <Perfil>
                    <img
                        src={img_perfil}
                    />
                </Perfil>
                <TextoSobre>
                    <h1>{titulo}</h1>
                    <p>
                        Olá, sou o Maycon, um desenvolvedor Full Stack Junior com habilidades em React.js, Node.js, SQL, NoSQL e TypeScript.

                        Tenho habilidade em trabalhar em equipe, além de ser comprometido com a entrega de soluções de qualidade dentro dos prazos estabelecidos.
                    </p>

                    <br />
                    <p>

                        Se você procura um desenvolvedor Full Stack Junior que está disposto a aprender e crescer junto com sua empresa, estou à disposição para conversarmos e ver como posso agregar valor ao seu projeto ou empresa.
                    </p>
                    <button className='button-geral'>
                        <a
                            href='https://github.com/MayconCoutinho/Portifolio_Maycon/files/10785844/MayconCoutinhoFullStack.pdf'
                            target='_blank'
                        > Download Curriculo </a>
                    </button>
                </TextoSobre>
            </Container>
            <Habilidades>
                <img src={react} />
                <img src={node} />
                <img src={nextjs} />
                <img src={TypeScript} />
                <img src={javascript} />
                <img src={html} />
                <img src={css} />
                <img src={sass} />
                <img src={styled} />
                <img src={python} />
                <img src={jest} />
                <img src={mysql} />
                <img src={mongodb} />
                <img src={firebase} />
                <img src={aws} />
                <img src={docker} />
                <img src={git} />
            </Habilidades>
        </>
    )
}