import React, { useEffect, useState } from "react";
import { Perfil, Container, TextoSobre, Habilidades } from "./styled";
import img_perfil from "../../assets/sobre/perfil2.jpg";
import { getStacks } from "../../services/firebase";

export const Sobre = () => {
  const [stacks, setStacks] = useState([]);
  const titulo = "< Sobre />";

  useEffect(() => {
    const resultNoticias = getStacks();
    resultNoticias.then((response) => {
      const result = response;
      setStacks(result);
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
          <p>
            Olá, sou o Maycon, um desenvolvedor Full Stack Junior com
            habilidades em React.js, Node.js, SQL, NoSQL e TypeScript. Tenho
            habilidade em trabalhar em equipe, além de ser comprometido com a
            entrega de soluções de qualidade dentro dos prazos estabelecidos.
          </p>

          <br />
          <p>
            Se você procura um desenvolvedor Full Stack Junior que está disposto
            a aprender e crescer junto com sua empresa, estou à disposição para
            conversarmos e ver como posso agregar valor ao seu projeto ou
            empresa.
          </p>
          <button className="button-geral">
            <a
              href="https://github.com/MayconCoutinho/Portifolio_Maycon/files/10785844/MayconCoutinhoFullStack.pdf"
              target="_blank"
            >
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
