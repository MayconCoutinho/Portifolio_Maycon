import styled from "styled-components";
import fundo from "../../assets/sobre/fundo.png";

export const Container = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 1fr 1fr;

  text-align: center;
  justify-content: center;
  align-items: center;

  background-size: cover;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`
export const Perfil = styled.div`
  margin-top: 16.5vw;
  margin-bottom:10vw;
  pointer-events: none;

  img {
    width: 300px;
    border-radius: 50%;
    pointer-events: none;

  }

  @media (max-width: 991px) {
  img {
    width: 250px;
    margin-top: 50px;
  }
  }

`
export const TextoSobre = styled.div`
  display: grid;

  text-align: center;
  justify-content: center;
  align-items: center;

  user-select: none;
  margin-top: 10vw;
  margin-right: 80px;

  pointer-events: none;

  a {
    
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",sans-serif;
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
    margin-top: 40px;
    pointer-events: all;
    margin-bottom: 60px;
  }
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: #ececec;

    text-transform: none;
    margin-right: 50px;
  }
  h1 {
    font-size: 30px;  
    margin-bottom: 30px;
    color: #0facac;
    margin-right: 50px;

  }
  @media (max-width: 991px) {
    margin-top: 10px;
    margin: 0;

    img {
      width: 300px;
    }
    p {
      width: 80%;      
      font-size: 18px;
      margin: 0;
      margin-left: 50px;
      line-height: 150%;
      text-align: justify;
    }
    h1{
      margin-right: 0;
    }
    button{
      width: 200px;
      margin-left: auto;
      margin-right: auto;
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
  margin-bottom: 20px;
  margin-top: 20px;
  pointer-events: none;

}
`