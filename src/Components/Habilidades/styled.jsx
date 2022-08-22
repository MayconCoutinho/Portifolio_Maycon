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
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 200;
    font-size: 50px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerDetalhe = styled.div`
  //color: rgba(255, 255, 255, 0.15);

  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;

  p {
    margin-top: 50px;
    text-align: center;
    color: #c2c2c2;
    font-weight: 400;
    font-size: 14px;
    width: 250px;
    margin-left: 30px;
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 0;
    font-size: 22px;
    font-weight: 500;
    color: #ebebeb;
  }

  img {
    margin-top: 50px;
    pointer-events: none;
  }

  width: 310px;
  height: 420px;

  text-align: center;

  box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);


`;

export const Certificados = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;

    img {
      margin-top: 20px;
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      margin-top: 20px;
      width: 300px;
    }
  }

  img {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
    pointer-events: none;
  }
`;

export const SoftSkill = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding-bottom: 70px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    margin-left: 10%;
  }
`;

export const SoftSkillCards = styled.div`
  width: 200px;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
  background-color: #eeeeee;
  backdrop-filter: blur(5px);

  h2 {
    color: #0c0c0c;
    font-size: 15px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  img {
    margin-top: 20px;
    width: 100px;
  }
`;

export const Contato = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 800px;
  margin-top: 200px;
  padding-bottom: 200px;

  a {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    color: #00558d;
    font-weight: 600;
  }

  @media (max-width: 991px) {
    width: 300px;
  }
`;

export const CardContato = styled.div`
  h2 {
    font-size: 16px;
    user-select: all;
    text-transform: none;
  }

  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px;
`;
