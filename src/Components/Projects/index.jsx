import React, { useEffect, useState } from "react";
import ifuture from "../../videos/Ifuture.mp4";
import Pokedex from "../../videos/Pokedex.mp4";
import Astromatch from "../../videos/Astromatch.mp4";
import Labex from "../../videos/Labex.mp4";
import LabEddit from "../../videos/LabEddit.mp4";
import Cats from "../../videos/Cats.mp4";
import shopper from "../../videos/Shopper.mp4";
import {
  Container,
  MainVideo,
  Titulo,
  ListVideo,
  VideoList,
  TagButton,
  ContainerTagButtons,
  SemVideos,
} from "./styled";
import { getTagButton, getVideos } from "../../services/firebase";
import { SortingId } from "../../hook/sortingId";

export const Projects = () => {
  const [video, setVideo] = useState(ifuture);
  const [titulo, setTitulo] = useState("ifuture");
  const [gitHub, setGitHub] = useState(
    "https://github.com/MayconCoutinho/Ifuture"
  );
  const [descricao, setDescricao] = useState(
    "Aplicação criada com 5 programadores. semelhante ao Ifood, com varias funcionalidade como de login, feed, pesquisa, carrinho e perfil do usuário, usando React , HTML, CSS, Java Script e chakra-ui."
  );
  const [videoTag, setVideoTag] = useState("react");
  const [tagButton, setTagButton] = useState([]);
  const [videoFireBase, setVideoFireBase] = useState([]);

  useEffect(() => {
    const resultNoticias = getTagButton();
    resultNoticias.then((response) => {
      const result = response;
      setTagButton(SortingId(result));
    });
  }, []);

  useEffect(() => {
    const resultNoticias = getVideos();

    resultNoticias.then((response) => {
      const result = response;

      const mapResult = result.filter((item) => {
        return item.stack === videoTag;
      });

      setVideoFireBase(SortingId(mapResult));
    });
  }, [videoTag]);

  const MapTagButton = () => {
    return (
      tagButton &&
      tagButton.map((item) => {
        return (
          <TagButton
            onClick={() => setVideoTag(item.stack)}
            variant={videoTag === item.stack}
            key={item.stack}
            className="button-video"
            src={item.url}
          />
        );
      })
    );
  };

  const mudarVideo = (video, title, link, descricao) => {
    setVideo(video);
    setTitulo(title);
    setGitHub(link);
    setDescricao(descricao);
  };

  const VideoColecao = () => {
    const html =
      videoFireBase &&
      videoFireBase.map((item) => {
        const sobre = item.sobre;
        const video = item.url;
        const nome = item.name;

        console.log(nome, video, sobre);

        return (
          <VideoList
            variant={nome === videoTag}
            onClick={() =>
              mudarVideo(
                video,
                nome,
                `https://github.com/MayconCoutinho/${nome}`,
                sobre
              )
            }
          >
            <video src={video} muted />
            <h1>{nome}</h1>
          </VideoList>
        );
      });
    return html.length >= 1 ? (
      <ListVideo> {html} </ListVideo>
    ) : (
      <SemVideos>
        <p>
          Estou estudando e criando pojetos em {videoTag}. Em breve terá video.
        </p>
      </SemVideos>
    );
  };

  return (
    <>
      <Titulo> Meus Projetos </Titulo>
      <Container>
        <MainVideo>
          <video src={video} controls autoplay />
          <a href={gitHub} target="_blank">
            <img src="https://img.shields.io/badge/Projeto%20no%20github-%2320232a.svg?style=for-the-badge&logo=github&logoColor=%111111"></img>
          </a>
          <h1> {titulo} </h1>

          <p> {descricao}</p>
        </MainVideo>
        <ContainerTagButtons>
          <MapTagButton />
          <VideoColecao />
        </ContainerTagButtons>
      </Container>
    </>
  );
};
