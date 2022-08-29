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
import { ContainerDetalhe, Container, Certificados, Fundo, SoftSkill, SoftSkillCards, CardContato, Contato } from './styled';
import comunicacao from '../../assets/SoftSkills/comunicacao.png'
import criatividade from '../../assets/SoftSkills/criatividade.png'
import resiliencia from '../../assets/SoftSkills/resiliencia.png'
import criticas from '../../assets/SoftSkills/criticas.png'
import gestaoTempo from '../../assets/SoftSkills/gestaoTempo.png'
import flexivel from '../../assets/SoftSkills/flexivel.png'
import gestaoProjetos from '../../assets/SoftSkills/gestaoProjetos.png'
import organizacao from '../../assets/SoftSkills/organizacao.png'
import inteliEmocional from '../../assets/SoftSkills/inteliEmocional.png'
import pressao from '../../assets/SoftSkills/pressao.png'
import possitivo from '../../assets/SoftSkills/possitivo.png'
import equipe from '../../assets/SoftSkills/equipe.png'


export const Habilidades = () => {

    return (
        <Fundo>
            <h1> Hard skills </h1>
            <Container>
                <ContainerDetalhe>
                    <img src={react} width={100} />
                    <h1> React </h1>
                    <p>
                        React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={TypeScript} width={100} />
                    <h1> TypeScript </h1>
                    <p> TypeScript é um Superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. </p>
                </ContainerDetalhe>
                <ContainerDetalhe>
                    <img src={javascript} width={100} />
                    <h1> JavaScript </h1>
                    <p> JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>

                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={node} width={100} />
                    <h1> Node.js </h1>
                    <p> Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={html} width={100} />
                    <h1> HTML </h1>
                    <p> HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. </p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={css} width={100} />
                    <h1> CSS </h1>
                    <p> Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.</p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={nextjs} width={100} />
                    <h1> nextjs </h1>
                    <p> Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.  </p>
                </ContainerDetalhe>
                
                <ContainerDetalhe>
                    <img src={styled} width={100} />
                    <h1> Styled Components </h1>
                    <p> styled-components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação.</p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={sass} width={100} />
                    <h1> Sass </h1>
                    <p> Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={vscode} width={100} />
                    <h1> VS code </h1>
                    <p> O Visual Studio Code é um editor de código-fonte. Ele inclui suporte para depuração, controle de versionamento Git incorporado... </p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={postman} width={100} />
                    <h1> Postman </h1>
                    <p> Postman é uma plataforma de API para desenvolvedores projetar, construir, testar e iterar suas APIs. </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={jest} width={100} />
                    <h1> Jest </h1>
                    <p> Jest é uma estrutura de teste JavaScript construída em cima do Jasmine e mantida pela Meta. Ele foi projetado e construído por Christoph Nakazawa com foco na simplicidade e suporte para grandes aplicativos da web. </p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={mysql} width={100} />
                    <h1> mysql </h1>
                    <p> O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.  </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={mongodb} width={100} />
                    <h1> mongodb </h1>
                    <p> MongoDB é um software de banco de dados orientado a documentos livre NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.  </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={redis} width={100} />
                    <h1> redis </h1>
                    <p> Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor, cache e agente de mensagens, com durabilidade opcional. </p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={discord} width={100} />
                    <h1> discord </h1>
                    <p> Discord é um aplicativo de voz sobre IP proprietário e gratuito, projetado inicialmente para comunidades de jogos. </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={zoom} width={100} />
                    <h1> zoom </h1>
                    <p> O Zoom fornece um serviço de conferência remota "Zoom" que combina videoconferência, reuniões online, bate-papo e colaboração móvel.</p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={googleMeat} width={100} />
                    <h1> google meat </h1>
                    <p> Google Meet é um serviço de comunicação por vídeo desenvolvido pelo Google. É um dos dois serviços que substituem a versão anterior do Google Hangouts, o outro é o Google Chat.</p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={figma} width={100} />
                    <h1> figma </h1>
                    <p> Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows. </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={zeplin} width={100} />
                    <h1> zeplin </h1>
                    <p> O Zeplin é uma app feito para Mac desenhado para criar trabalhos colaborativos entre designers e desenvolvedores. Desde o princípio, a Zeplin foca em melhorar a colaboração entre designers e engenheiros, fornecendo-lhes as fontes mais precisas do mercado. </p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={canva} width={100} />
                    <h1> canva </h1>
                    <p> Canva é uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais.  </p>
                </ContainerDetalhe>

                <ContainerDetalhe>
                    <img src={trello} width={100} />
                    <h1> trello </h1>
                    <p> Trello é um aplicativo de gerenciamento de projeto baseado na web originalmente desenvolvido em 2011 pela então Fog Creek Software. Em 2017, foi adquirido pela empresa australiana Atlassian.</p>
                </ContainerDetalhe> <ContainerDetalhe>
                    <img src={notion} width={100} />
                    <h1> notion </h1>
                    <p> Notion é uma aplicação que fornece componentes tais como notas, bases de dados, quadros, wikis, calendários e lembretes. </p>
                </ContainerDetalhe>
            </Container>
            <h1> Certificados </h1>
            <Certificados>
                <img src={algoritmo} width={400} />
                <img src={bancoDados} width={400} />
                <img src={pythonCertificado} width={400} />
            </Certificados>

            <h1> Soft Skills </h1>

            <SoftSkill>
                <SoftSkillCards>
                    <img src={comunicacao} />
                    <h2> comunicação</h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={criatividade} />
                    <h2> criatividade </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={resiliencia} />
                    <h2> resiliência </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={criticas} />
                    <h2> Suportar críticas </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={gestaoTempo} />
                    <h2> Gestão do tempo</h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={flexivel} />
                    <h2> Flexibilidade e adaptabilidade </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={gestaoProjetos} />
                    <h2> Gestão de projetos web </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={organizacao} />
                    <h2> Organização </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={inteliEmocional} />
                    <h2> Inteligência emocional </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={pressao} />
                    <h2> Lidar com pressão</h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={possitivo} />
                    <h2> Atitude positiva </h2>
                </SoftSkillCards><SoftSkillCards>
                    <img src={equipe} />
                    <h2> Trabalho em equipe </h2>
                </SoftSkillCards>
            </SoftSkill>

            <h1> Contato </h1>

            <Contato>
                    <a
                        href="https://www.linkedin.com/in/maycon-coutinho/"
                        target="_blank"
                    >  <CardContato>Linkedin</CardContato></a>

                    <a
                        href="https://api.whatsapp.com/send/?text=Ol%C3%A1%20meu%20nome%20%C3%A9%20Maycon%20Coutinho,%20%20sou%20Desenvolvedor%20Full%20Stack%20e%20esse%20%C3%A9%20o%20meu%20WhatsApp&phone=5528999287132"
                        target="_blank"
                    > <CardContato> Whatsapp </CardContato></a>

                <CardContato>
                    <h2> mayconcoutinhoart@gmail.com </h2>
                </CardContato>
            </Contato>
        </Fundo>
    )
}