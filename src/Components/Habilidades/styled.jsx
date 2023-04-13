import styled from "styled-components";

export const Fundo = styled.div`
  display: grid;

  text-align: center;
  justify-content: center;
  align-items: center;

  background-color: #1e78b4;
  padding: 50px;
  text-align: center;

  h1 {
    margin-top: 50px;
    margin-bottom: 100px;
    color: #ffffff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-weight: 200;
    font-size: 50px;
  }
`
export const Certificados = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 450px 450px 450px;

  padding-bottom: 50px;
  margin-left: auto;
      margin-right: auto;
      
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 350px 350px;
  
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
      margin-left: auto;
      margin-right: auto;
    }
  }
  img {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 50%) 20px 20px 50px;
    pointer-events: none;
    margin-bottom: 20px;
  }
`
