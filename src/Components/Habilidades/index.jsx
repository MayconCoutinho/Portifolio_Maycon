import React, { useEffect, useState } from "react";
import { Certificados, Fundo } from "./styled";
import { getCertificados } from "../../services/firebase";
import { SortingId } from "../../hook/sortingId";

export const Habilidades = () => {
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    const resultNoticias = getCertificados();
    resultNoticias.then((response) => {
      const result = response;
      setCertificados(SortingId(result));
    });
  }, []);

  const MapCertificado = () => {
    return (
      certificados &&
      certificados.map((item) => (
        <img src={item.img} width={400} height={280} />
      ))
    );
  };

  return (
    <Fundo>
      <h1> Certificados </h1>
      <Certificados>{MapCertificado()}</Certificados>
    </Fundo>
  );
};
