import React, { useState } from 'react';
import ifuture from '../../videos/Ifuture.mp4'
import Pokedex from '../../videos/Pokedex.mp4'
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

                </ListVideo>
            </Container>
        </>
    )

}