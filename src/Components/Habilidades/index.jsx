import React from 'react';
import algoritmo from '../../assets/certificados/algoritmo.jpg'
import bancoDados from '../../assets/certificados/bancoDados.jpg'
import pythonCertificado from '../../assets/certificados/python.jpg'
import webmoderno from '../../assets/certificados/webmoderno.jpg'
import fundamento from '../../assets/certificados/fundamento.png'
import labenu from '../../assets/certificados/labenu.png'
import protocolo from '../../assets/certificados/protocolo.png'
import qualidade from '../../assets/certificados/qualidade.png'
import responsivo from '../../assets/certificados/responsivo.png'
import { Certificados, Fundo, SoftSkill, SoftSkillCards, CardContato, Contato } from './styled';
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
            <h1> Certificados </h1>
            <Certificados>
                <img src={labenu} width={400} />
                <img src={webmoderno} width={400} />
                <img src={algoritmo} width={400} />
                <img src={bancoDados} width={400} />
                <img src={pythonCertificado} width={400} />
                <img src={protocolo} width={400} />
                <img src={fundamento} width={400} />
                <img src={qualidade} width={400} />
                <img src={responsivo} width={400} />
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
                ><CardContato>Linkedin</CardContato></a>
                <a
                    href="https://api.whatsapp.com/send/?text=Ol%C3%A1%20meu%20nome%20%C3%A9%20Maycon%20Coutinho,%20%20sou%20Desenvolvedor%20Full%20Stack%20e%20esse%20%C3%A9%20o%20meu%20WhatsApp&phone=5528999287132"
                    target="_blank"
                ><CardContato> Whatsapp </CardContato></a>
                <CardContato>
                    <h2> mayconcoutinhoart@gmail.com </h2>
                </CardContato>
            </Contato>
        </Fundo>
    )
}