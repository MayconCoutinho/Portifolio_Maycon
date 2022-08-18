import React from 'react';
import git from '../../assets/habilidades/Git.png'
import javascript from '../../assets/habilidades/javascript.png'
import jest from '../../assets/habilidades/jest.png'
import node from '../../assets/habilidades/node.png'
import react from '../../assets/habilidades/react.png'
import sass from '../../assets/habilidades/sass.png'
import styled from '../../assets/habilidades/styled.png'
import TypeScript from '../../assets/habilidades/TypeScript.png'
// import python from '../../assets/habilidades/python.png'
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
import figma from '../../assets/habilidades/figma.png'
import zeplin from '../../assets/habilidades/zeplin.png'
import vscode from '../../assets/habilidades/vscode.png'
import canva from '../../assets/habilidades/canva.png'
import algoritmo from '../../assets/habilidades/certificados/algoritmo.jpg'
import bancoDados from '../../assets/habilidades/certificados/bancoDados.jpg'
import pythonCertificado from '../../assets/habilidades/certificados/python.jpg'
import { ContainerDetalhe, Container, Fundo, Certificados } from './styled';

export const Habilidades = () => {

    return (
        <>
            <Fundo>
                <h1> Hard skills </h1>
                <Container>
                    <ContainerDetalhe>
                        <img src={react} width={100} />
                    </ContainerDetalhe>

                    <ContainerDetalhe>
                        <img src={TypeScript} width={100} />
                    </ContainerDetalhe>

                    <ContainerDetalhe>

                        <img src={javascript} width={100} />
                    </ContainerDetalhe>

                </Container>
            </Fundo>

            <Fundo>
                <Container>

                    <ContainerDetalhe>
                        <img src={node} width={100} />
                    </ContainerDetalhe>
                    <ContainerDetalhe>

                        <img src={html} width={100} />
                    </ContainerDetalhe>
                    <ContainerDetalhe>
                        <img src={css} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>

            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={styled} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={sass} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={vscode} width={100} />

                    </ContainerDetalhe>
                </Container>
            </Fundo>

            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={postman} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={jest} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={node} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>

            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={mysql} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={mongodb} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={redis} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>
            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={discord} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={zoom} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={googleMeat} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>


            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={nextjs} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={nextjs} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={nextjs} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>
            

            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={figma} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={zeplin} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={canva} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>
            <Fundo>
                <Container>
                    <ContainerDetalhe>
                        <img src={trello} width={100} />
                    </ContainerDetalhe> <ContainerDetalhe>
                        <img src={notion} width={100} />
                    </ContainerDetalhe>
                </Container>
            </Fundo>
            <Fundo>
            <h1> Certificados </h1>

                <Certificados>
                        <img src={algoritmo} width={400} />
                        <img src={bancoDados} width={400} />
                        <img src={pythonCertificado} width={400} />
                </Certificados>
            </Fundo>


        </>
    )

}