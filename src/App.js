import { Sobre } from "./Components/Sobre/Sobre";
import { Projects } from "./Components/Projects/Projects";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Carregando } from "./Components/Carregando/Carregando";
import './Css.css'
import { Habilidades } from "./Components/Habilidades/Habilidades";
import { Container } from "./styled";
import { useState } from "react";

function App() {
    const [carregando, setCarregando] = useState(true)
    setTimeout(() => {
      setCarregando(false)
    }, "5000")
  
  return (
    <Container>

{/* {carregando === true ? (<Carregando/> ) : 

<> 
<Header/>
<Sobre/>
<Projects/>
<Habilidades/>
<Footer/>
</> */}
  

<Header/>
<Sobre/>
<Projects/>
<Habilidades/>
<Footer/>

    </Container>
  );
}

export default App;
