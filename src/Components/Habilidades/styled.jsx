import styled from "styled-components";

export const Fundo = styled.div`

/* background-image: url('https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/a-viagem-de-chihiro-chihiro-e-sem-rosto.jpg?fit=1920%2C1024&ssl=1'); */
/* background-repeat: no-repeat; */

background-color: #00558d;
padding: 50px;

text-align: center;


h1 {
    margin-top: 50px;
    margin-bottom: 100px;
    color: #ffffff;
    font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 200;
    font-size: 50px;
}

`


export const Container = styled.div`

display: flex;


`


export const Certificados = styled.div`

display: flex;


img {
    border-radius: 10px;
    margin-left: 20px;
    box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
    pointer-events: none


}


`

export const ContainerDetalhe = styled.div`

//color: rgba(255, 255, 255, 0.15);
margin-left: 8%;
border-radius: 25px;

img{

    margin-top: 50px;
    pointer-events: none


}
width: 310px;
height: 420px;

text-align: center;

box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
background-color: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(5px);
`;