import React from 'react';
import { Perfil, Container, TextoSobre, Habilidades } from './styled';
import img_perfil from '../../assets/sobre/perfil2.jpeg';
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

export const Sobre = () => {

    const titulo = "< Resumo />"
    return (
        <>
            <Container>
                <Perfil>
                    <img
                        src={img_perfil}
                    />
                </Perfil>
                <TextoSobre>
                    <h1> {titulo} </h1>
                    <p>
                        Sou apaixonado por desenvolver bibliotecas de componentes, UI e design systems. Também possuo experiência com Back-end, banco de dados e Metodologias Ágeis. Tenho formação de Web Full-Stack na Labenu e as principais tecnologias usada são o React, Node, SQL e TypeScript. Tenho trabalhos feitos em grupo e individual todos completos e documentados no Github.
                    </p>
                    <button >
                        <a
                            href='https://github.com/MayconCoutinho/MayconCoutinho/files/9611474/MayconCoutinho.pdf'
                            target='_blank'
                        > Download CV </a>
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
                <img src={styled} />
                <img src={sass} />
                <img src={python} />
                <img src={jest} />
                <img src={mysql} />
                <img src={mongodb} />
                <img src={firebase} />
                <img src={aws} />
                <img src={git} />
            </Habilidades>
        </>
    )
}