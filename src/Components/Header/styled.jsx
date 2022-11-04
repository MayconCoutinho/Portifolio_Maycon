import styled from "styled-components";

export const MeuHeader = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: fixed;
  background-color: #00041f;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  z-index: 99;
  li {
    font-size: 18px;
}
  @media (max-width: 991px) {
    display: flow-root;
    text-align: center;
  }
`;
export const LogoNome = styled.div`
  display: flex;
  user-select: none;
  pointer-events: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 1000;
  font-size: 30px;
`;
export const LogoSobreNome = styled.div`
  display: flex;
  user-select: none;
  pointer-events: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #00bfbf;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 1000;
  font-size: 30px;
`;
export const Navlinks = styled.div`
  font-size: 20px;
  list-style: none;
  li {
    display: inline-block;
    padding: 7px 25px;
  }
  li {
    transition: all 0.3s ease 0s;
  }
  li:hover {
    cursor: pointer;
    color: #04e6e6;
  }
`;
export const Cta = styled.div`
  button {
    padding: 8px 20px;
    background-color: #006969;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: #039696;
  }
`;
export const Barras = styled.div`
  padding-left: 22px;
  padding-top: 2px;
  margin-top: 3px;
  background-color: #ffffff;
`;
export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 991px) {
    margin-left: auto;
    display: block;
    pointer-events: all;
  }
`;
export const ButtonContato = styled.div`
@media (max-width: 991px) {
    margin-top: 20px;
    margin-bottom: 20px;
    display:${(props) => props.variant === true ?  "block" : "none"};
}
`;
export const NavLinks = styled.div`
  list-style: none;
  li {
    display: inline-block;
    padding: 7px 25px;
  }
  li {
    transition: all 0.3s ease 0s;
  }
  li:hover {
    cursor: pointer;
    color: #04e6e6;
  }
  @media (max-width: 991px) {
    
    li {
      display:${(props) => props.variant === true ?  "grid" : "none"};
      grid-template-columns: 1fr;
      margin-top: 25px;
      transition: ease-in;
    }
  }
`;