import React, { useState } from 'react';
import ifuture from '../../videos/Ifuture.mp4'
import Pokedex from '../../videos/Pokedex.mp4'
import Astromatch from '../../videos/Astromatch.mp4'
import Labex from '../../videos/Labex.mp4'
import LabeNinja from '../../videos/LabeNinja.mp4'
import { Container, MainVideo, Titulo, ListVideo, VideoList } from './styled';


export const Projects = () => {

    const [video, setVideo] = useState(ifuture)
    const [titulo, setTitulo] = useState("01. ifuture")
    const [gitHub, setGitHub] = useState("https://github.com/MayconCoutinho/Ifuture")



    const mudarVideo = (video, title, link) => {

        setVideo(video)
        setTitulo(title)
        setGitHub(link)
    }



    const video_url = 'https://www.youtube.com/embed/'

    return (
        <>
            <Titulo> Meus Projetos </Titulo>
            <Container>
                {/* <iframe src='https://www.youtube.com/embed/W2InvOACsjk' width={720} height={420}/>
            <iframe src='https://www.youtube.com/embed/cJt7-pEEvB4' width={720} height={420}/> */}

                <MainVideo>
                    <video src={video} controls autoplay />
                    <h1> {titulo} </h1>
                    <a
                        href={gitHub}
                        target="_blank"
                    >
                        Link GitHub 
                    </a>
                </MainVideo>

                <ListVideo>
                    <VideoList variant={video == ifuture} onClick={() => mudarVideo(ifuture, "01. ifuture","https://github.com/MayconCoutinho/Ifuture")}  >
                        <video src={ifuture} muted />
                        <h1> 01. ifuture </h1>
                    </VideoList>

                    <VideoList variant={video == Pokedex} onClick={() => mudarVideo(Pokedex, "02. Pokedex","https://github.com/MayconCoutinho/Pokedex")}>
                        <video src={Pokedex} muted />
                        <h1> 02. Pokedex </h1>
                    </VideoList>

                    <VideoList variant={video == Astromatch} onClick={() => mudarVideo(Astromatch, "03. Astromatch","https://github.com/MayconCoutinho/Astromatch")}>
                        <video src={Astromatch} muted />
                        <h1> 03. Astromatch </h1>
                    </VideoList>

                    <VideoList variant={video == Labex} onClick={() => mudarVideo(Labex, "04. Labex","https://github.com/MayconCoutinho/Labex")}>
                        <video src={Labex} muted />
                        <h1> 04. Labex </h1>
                    </VideoList>

                    <VideoList variant={video == LabeNinja} onClick={() => mudarVideo(LabeNinja, "05. LabeNinja","https://github.com/MayconCoutinho/LabeNinja")}>
                        <video src={LabeNinja} muted />
                        <h1> 05. LabeNinja </h1>
                    </VideoList>

                </ListVideo>
            </Container>
        </>
    )

}