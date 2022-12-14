import styled from "styled-components";
import fundo from "../../assets/sobre/fundo.png";

export const Container = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 1fr 1fr;

  background-size: cover;
  margin: auto;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const Perfil = styled.div`
  margin-top: 16.5vw;
  margin-left: 10vw;
  margin-bottom: 10vw;
  pointer-events: none;

  img {
    width: 300px;
    border-radius: 50%;
    background-color: #036161;
    pointer-events: none;

  }

  @media (max-width: 1330px) {


    img {
      width: 300px;
      margin-right: 200px;
    }
  }

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;

    img {
      margin-top: 70px;
      margin-right: 330px;
      width: 300px;
      margin-right: 380px;
    }
  }
`
export const TextoSobre = styled.div`

  user-select: none;
  margin-top: 20vw;
  pointer-events: none;
  margin-right: 8vw;

  a {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 500;
    font-size: 16px;
    list-style: none;
    transition: all 0.3s ease 0s;
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
  }

  button {
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 18%;
    pointer-events: all;
  }

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: none;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #0facac;
  }

  font-size: 22px;

  color: #ececec;

  width: 700px;

  @media (max-width: 991px) {
    margin-top: 10px;

    img {
      width: 300px;
    }

    h1 {
      margin-left: 20px;
    }

    p {
      width: 320px;
      font-size: 18px;
      margin-left: 30px;
    }
  }
`;
export const Habilidades = styled.div`


background-image: url(${fundo});
  background-repeat: no-repeat;

  background-size: cover;
  margin: auto;


  text-align: center;
img{
  width: 60px;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  pointer-events: none;

}
`

