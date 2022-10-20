import React from 'react';
import { Perfil, Container, TextoSobre, Maycon ,Habilidades } from './styled';
import img_perfil from '../../assets/perfil2.jpeg';
// import FotoPerfil from '../../assets/FotoPerfil.jpg';
// import linkedin from '../../assets/linkedin.jpg'
// import github from '../../assets/github.png'
import git from '../../assets/habilidades/Git.png'
import javascript from '../../assets/habilidades/javascript.png'
import jest from '../../assets/habilidades/jest.png'
import node from '../../assets/habilidades/node.png'
import react from '../../assets/habilidades/react.png'
import sass from '../../assets/habilidades/sass.png'
import styled from '../../assets/habilidades/styled.png'
import TypeScript from '../../assets/habilidades/TypeScript.png'
import python from '../../assets/habilidades/python.png'
import postman from '../../assets/habilidades/postman.png'
import css from '../../assets/habilidades/css.png'
import html from '../../assets/habilidades/html.png'
import github from '../../assets/habilidades/github.png'
import mysql from '../../assets/habilidades/mysql.png'
import mongodb from '../../assets/habilidades/mongodb.png'
import redis from '../../assets/habilidades/redis.png'
// import sqlite from '../../assets/habilidades/sqlite.png'
import trello from '../../assets/habilidades/trello.png'
import notion from '../../assets/habilidades/notion.png'
import discord from '../../assets/habilidades/discord.png'
import zoom from '../../assets/habilidades/zoom.png'
import googleMeat from '../../assets/habilidades/googleMeat.png'
import nextjs from '../../assets/habilidades/nextjs.png'

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
        <img src={react}/>
        <img src={node}/>
        <img src={nextjs}/>
        <img src={TypeScript}/>
        <img src={javascript}/>
        <img src={html}/>
        <img src={css}/>
        <img src={styled}/>
        <img src={sass}/>
        <img src={python}/>
        {/* <img src={postman}/> */}
        <img src={jest}/>
        <img src={mysql}/>
        <img src={mongodb}/>
        {/* <img src={discord}/>
        <img src={zoom}/>
        <img src={googleMeat}/> */}
        <img src={git}/>

        </Habilidades>


{/* 
            <Maycon>
                <img src={FotoPerfil} />
                <div>
                    <h1> 🌎 Quem é Maycon enquanto pessoa?</h1>
                    <p>
                        Em minhas horas vagas curto ver animes, ler manga ou um bom livro, também curto jogar League of Legends, vôlei ou tênis de mesa, quase sempre me empolgo em um projeto pessoal e viro noites de sábados e domingo programado em resumo é isso :).</p>
                </div>
            </Maycon> */}
        </>
    )
}