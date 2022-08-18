import React from 'react';
import { Perfil, Container, TextoSobre, Maycon } from './styled';
import img_perfil from '../../assets/perfil.png';
import FotoPerfil from '../../assets/FotoPerfil.jpg';


export const Sobre = () => {
    return (
        <>
            <Container>
                <Perfil>
                    <img
                        src={img_perfil}
                        width={400}
                    />
                </Perfil>
                <TextoSobre>
                <h1> Resumo </h1>
                    <p>
                        Desenvolvedor Front-end com experiência em React, JavaScript, TypeScript, NextJS, Styled Components, sass e Jest. Sou apaixonado por desenvolver bibliotecas de componentes, UI e design systems. Também possuo experiência com Back-end e Metodologias Ágeis.
                    </p>
                </TextoSobre>

            </Container>

            <Maycon>
                <img src={FotoPerfil} width={400} />
                <div>
                    <h1> 🌎 Quem é Maycon enquanto pessoa?</h1>
                    <p> 
                    Em minhas horas vagas curto ver animes, ler manga ou um bom livro, também curto jogar League of Legends, vôlei ou tênis de mesa, quase sempre me empolgo em um projeto pessoal e viro noites de sábados e domingo programado em resumo é isso :).</p>
                </div>
            </Maycon>
        </>
    )
}