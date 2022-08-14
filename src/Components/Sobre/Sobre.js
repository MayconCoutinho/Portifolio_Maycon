import React from 'react';
import { Perfil, Container, TextoSobre, ContainerSobre, Maycon } from './styled';
import img_perfil from '../../assets/perfil.png';
import FotoPerfil from '../../assets/FotoPerfil.jpg';

export const Sobre = () => {

    return (
        <ContainerSobre>
            <Container>
                <Perfil>
                    <img
                        src={img_perfil}
                        width={400}
                    />
                </Perfil>
                <TextoSobre>
                    <img
                        src='https://readme-typing-svg.herokuapp.com/?color=00bfbf&size=35&center=true&vCenter=true&width=1000&lines=Olá!,+Meu+nome+é+Maycon+Coutinho;Tenho+20+anos;Eu+Sou+do+Espirito+Santo,+ES;Sou+Desenvolverdor+Full+Stack;Aqui,+Posto+Meus+Projetos+e+trabalhos;Seja+Bem+vindo!+:%29'
                    />
                </TextoSobre>

            </Container>
            <Maycon>
                <img src={FotoPerfil} width={400} />
                <div>
                    <h1> 🌎 Quem é Maycon enquanto pessoa?</h1>
                    <p> Focado, determinado, criativo e objetivo. Pretendo trabalhar com empresas que desejam crescer e dominar o mercado, contribuindo para seu crescimento de forma mútua.</p>
                </div>
            </Maycon>

        </ContainerSobre>
    )
}