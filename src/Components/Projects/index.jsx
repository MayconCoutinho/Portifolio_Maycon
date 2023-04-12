import React, { useState } from 'react';
import ifuture from '../../videos/Ifuture.mp4'
import Pokedex from '../../videos/Pokedex.mp4'
import Astromatch from '../../videos/Astromatch.mp4'
import Labex from '../../videos/Labex.mp4'
import LabEddit from '../../videos/LabEddit.mp4'
import Gatinhos from '../../videos/Gatinhos.mp4'
import shopper from '../../videos/Shopper.mp4'
import { Container, MainVideo, Titulo, ListVideo, VideoList, TagButton, ContainerTagButtons } from './styled';

export const Projects = () => {
    const [video, setVideo] = useState(ifuture)
    const [titulo, setTitulo] = useState("01. ifuture")
    const [gitHub, setGitHub] = useState("https://github.com/MayconCoutinho/Ifuture")
    const [descricao, setDescricao] = useState("Aplicação criada com 5 programadores. semelhante ao Ifood, com varias funcionalidade como de login, feed, pesquisa, carrinho e perfil do usuário, usando React , HTML, CSS, Java Script e chakra-ui.")
    const mudarVideo = (video, title, link, descricao) => {
        setVideo(video)
        setTitulo(title)
        setGitHub(link)
        setDescricao(descricao)
    }
    return (
        <>
            <Titulo> Meus Projetos </Titulo>
            <Container>
                <MainVideo>
                    <video src={video} controls autoplay />
                    <a
                        href={gitHub}
                        target="_blank"
                    >
                        <img src='https://img.shields.io/badge/Projeto%20no%20github-%2320232a.svg?style=for-the-badge&logo=github&logoColor=%111111'></img>
                    </a>
                    <h1> {titulo} </h1>

                    <p> {descricao}</p>


                </MainVideo>

                <ContainerTagButtons>
                    <TagButton className='button-video' src={"https://img.shields.io/badge/node.js-49a249?style=for-the-badge&logo=node.js&logoColor=white"}/>
                    <TagButton className='button-video' src={"https://img.shields.io/badge/react.js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%111111"}/> 
                    <TagButton className='button-video' src={"https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"}/> 
                    <TagButton className='button-video' src={"https://img.shields.io/badge/MySQL-15406b?style=for-the-badge&logo=mysql&logoColor=white"} />
                <ListVideo>

                    <VideoList variant={video === ifuture} onClick={() => mudarVideo(ifuture, "01. ifuture", "https://github.com/MayconCoutinho/Ifuture", "Aplicação criada com 5 programadores. semelhante ao Ifood, com varias funcionalidade como de login, feed, pesquisa, carrinho e perfil do usuário, usando React , HTML, CSS, Java Script e chakra-ui.")}  >
                        <video src={ifuture} muted />
                        <h1> 01. ifuture </h1>
                    </VideoList>
                    <VideoList variant={video === Pokedex} onClick={() => mudarVideo(Pokedex, "02. Pokedex", "https://github.com/MayconCoutinho/Pokedex", "Esta aplicação consiste em uma pokédex semelhante ao do anime pokemon, mostrando o pokémon e detalhes de status do pokémon. A pokédex é bem simples de se usar, basta clicar em algum dos pokémon que estão no carrossel que imediatamente irá abrir uma nova página com todos os detalhes do pokémon escolhido. A plataforma se destaca por ser intuitiva e semelhante a pokédex original do anime, além de ser toda animada com leds piscando como se fosse real.")}>
                        <video src={Pokedex} muted />
                        <h1> 02. Pokedex </h1>
                    </VideoList>
                    <VideoList variant={video === Astromatch} onClick={() => mudarVideo(Astromatch, "03. Astromatch", "https://github.com/MayconCoutinho/Astromatch", "Esta aplicação é um clone customizado do tinder. Nela podemos escolher dar metch, recusar ou resetar. Atraves do axios tem o acesso a api, em que tem um banco de dados onde esta cadastrado todas pessoas, a aplicação consiste em uma comunicação constante front end e o back-end em tempo real.")}>
                        <video src={Astromatch} muted />
                        <h1> 03. Astromatch </h1>
                    </VideoList>
                    <VideoList variant={video === Labex} onClick={() => mudarVideo(Labex, "04. Labex", "https://github.com/MayconCoutinho/Labex", "A aplicação consiste em visualizar viagens espaciais futuristas criadas pelo administrador. O usuário conseguir se candidatar a sua viagem escolhida, preenchendo os dados obrigatórios para se candidatar a viagem, após isso o administrador decidirá quem irá ou não na viagem aprovando os candidatos.",)}>
                        <video src={Labex} muted />
                        <h1> 04. Labex </h1>
                    </VideoList>
                    <VideoList variant={video === LabEddit} onClick={() => mudarVideo(LabEddit, "06. LabEddit", "https://github.com/MayconCoutinho/LabEddit", "A aplicação consiste em visualizar postagem e posta, podendo fazer comentarios e dar link ou deslike nos posts. No total a aplicação tem 4 telas Login, cadastro, Feed, comentarios do post.")}>
                        <video src={LabEddit} muted />
                        <h1> 06. LabEddit </h1>
                    </VideoList>
                    <VideoList variant={video === Gatinhos} onClick={() => mudarVideo(Gatinhos, "07. Scroll Infinito", "https://github.com/MayconCoutinho/Api-Gatinhos-Scroll-infinito", "A aplicação consiste em visualizar um scroll infinito com imagens de gatinhos de uma api.")}>
                        <video src={Gatinhos} muted />
                        <h1> 07. Scroll Infinito </h1>
                    </VideoList>
                    <VideoList variant={video === shopper} onClick={() => mudarVideo(shopper, "08. shopper Full Stack", "https://github.com/MayconCoutinho/Api-Shopper", "Essa API foi desenvolvida para representar a dinâmica básica de um supermercado virtual. Aqui será encontrado três entidades fundamentais para o bom funcionamento de um supermercado: produtos, usuário e carrinho de compra. As funcionalidades básicas encontradas nessa API são: ver os produto e mudar a quantidade de estoque, cadastrar usuário, adicionar, remover e ver produtos dentro do carrinho.")}>
                        <video src={shopper} muted />
                        <h1> 08. shopper Full Stack </h1>
                    </VideoList>
                </ListVideo>
                </ContainerTagButtons>
            </Container>
        </>
    )
}