import React, { useEffect, useState } from "react";
import { Perfil, Container, TextoSobre, Habilidades } from "./styled";
import img_perfil from "../../assets/sobre/perfil2.jpg";
import { getCurriculo, getSobre, getStacks } from "../../services/firebase";
import { SortingId } from "../../hook/sortingId";

export const Sobre = () => {
  const [stacks, setStacks] = useState([]);
  const [sobre, setSobre] = useState([]);
  const [curriculo, seCurriculo] = useState([]);

  const titulo = "< Sobre />";

  useEffect(() => {
    const resultStacks = getStacks();
    resultStacks.then((response) => {
      const result = response;
      setStacks(SortingId(result));
    });

    const resultSobre = getSobre();
    resultSobre.then((response) => {
      const result = response;
      setSobre(result[0]);
    });

    const resultCurriculo = getCurriculo();
    resultCurriculo.then((response) => {
      const result = response;
      seCurriculo(result[0]);
    });
  }, []);

  const MapStacks = () => {
    return stacks && stacks.map((item) => <img src={item.img} />);
  };

  return (
    <>
      <Container>
        <Perfil>
          <img src={img_perfil} />
        </Perfil>
        <TextoSobre>
          <h1>{titulo}</h1>
          <p>{sobre.texto1}</p>

          <br />
          <p>{sobre.texto2}</p>
          <button className="button-geral">
            <a href={curriculo.url} target="_blank" rel="noreferrer">
              Download Curriculo
            </a>
          </button>
        </TextoSobre>
      </Container>
      <Habilidades>
        <MapStacks />
      </Habilidades>
    </>
  );
};
