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
import { Certificados, Fundo } from './styled';


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
        </Fundo>
    )
}