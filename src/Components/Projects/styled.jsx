import styled from "styled-components";

export const Container = styled.div`

background-color: #ccc;
display: grid;
grid-template-columns: 2fr 1fr;
gap: 15px;
align-items: flex-start;
padding: 5px 5%;

padding-bottom: 120px;

@media(max-width: 991px) {
    
grid-template-columns: 1.5fr 1fr;
padding: 10px;

}

@media(max-width: 768px) {
    
    grid-template-columns: 1fr;
    padding: 10px;
    
    }

`

export const Titulo = styled.div`

background-color: #ccc;

font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

color: #333;
font-size: 40px;
text-align: center;
padding: 40px;


`

export const MainVideo = styled.div`

background-color: #fff;
border-radius: 5px;
padding: 10px;

a {
    color: #006e6e;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;

    :hover{
        color: #00b9b9;
    }
}

h1 {
    color: #333;
    font-size: 23px;
    padding-top: 15px;
    padding-bottom: 15px;
}
video{
    height: 100%;
    width: 100%;
    border-radius: 5px;

}

`

export const ListVideo = styled.div`

background-color: #fff;
border-radius: 5px;
height: 540px;
overflow-y: scroll;

font-size: 8px;
color: #333;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

::-webkit-scrollbar{

    width: 7px;
}

::-webkit-scrollbar-track{
    background-color: #ccc;
    border-radius: 50px;
}

::-webkit-scrollbar-thumb{

    background-color: #666;
    border-radius: 50px;

}


`


export const VideoList = styled.div`

display: flex;
align-items: center;
gap: 15px;
background-color: ${(props) => props.variant === true ?  "#006969" : "#f7f7f7"};
color: ${(props) => props.variant === true ?  "#dfdfdf" : "#353535"};;
border-radius: 5px;
margin: 10px;
padding: 10px;
border: 1px solid rgba(0,0,0,0.1);
cursor: pointer;

:hover{

    background: ${(props) => props.variant === true ?  "#006969" : "#eee"} ;
}

video{
width: 100px;
border-radius: 5px;
}


`