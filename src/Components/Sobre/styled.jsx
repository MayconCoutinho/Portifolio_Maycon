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

  text-align: center;
  justify-content: center;
  align-items: center;

  user-select: none;
  margin-top: 10vw;

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
    margin: 40px 20% 40px 0;
    border-radius: 5px;
    pointer-events: all;
    width: 200px;
    
  }
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #ececec;
    text-transform: none;
    text-align: left;
    width: 80%;      
    line-height: 150%;

  }
  h1 {
    font-size: 30px;  
    margin-bottom: 30px;
    color: #0facac;
    text-align: left;

  }
  @media (max-width: 991px) {
    margin-top: 10px;
    margin: 0;
    text-align: center;

    h1{
      text-align: center;

    }
    button{
      margin-right: 0;
    }
    img {
      width: 300px;
    }
    p {
      width: 80%;      
      font-size: 18px;
      margin-left: 50px;
      line-height: 150%;
    }
  }
`;
export const Habilidades = styled.div`


/* background-image: url(${fundo});
background-repeat: no-repeat; */

background: linear-gradient(90deg, #49494B, #C5AA9D );


  background-size: cover;
  margin: auto;


  text-align: center;
img{
  width: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
  pointer-events: none;
  margin-left: 10px;
}
`