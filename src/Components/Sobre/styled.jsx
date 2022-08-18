import styled from "styled-components";
import fundo from "../../assets/fundo.png"
import fundoSobre from "../../assets/fotoSobre.png"



export const Container = styled.div`

/* background-color: #304252; */
background-image: url(${fundo});
background-repeat: no-repeat;

width: auto;
display: flex;

`

export const Perfil = styled.div`

margin-top: 15vw;
margin-left: 5vw;
margin-bottom: 18vw;
pointer-events: none;


img{
    border-radius: 30%;
    background-color: #036161;
    pointer-events: none

}

`

export const Maycon = styled.div`

display: flex;


background-image: url(${fundoSobre});
background-repeat: no-repeat;

padding-top: 10vw;
padding-bottom: 17vw;
pointer-events: none;

color: #ececec;


div {

    width: 750px;
    margin-top: 80px;
}

h1, p{
 
    margin-left: 100px;
    margin-top: 50px;
}

p{
    font-size: 20px;
}


img{
    margin-left: 150px;
    margin-top: 80px;
    width: 300px ;
    border-radius: 50%;
    pointer-events: none


}

`

export const TextoSobre = styled.div`

user-select: none;
margin-top: 20vw;
pointer-events: none;
margin-left: 8vw;

p {

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #0facac;
}

font-size: 22px;

color: #ececec;

width: 700px;

`

