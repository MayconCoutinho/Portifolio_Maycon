import { Sobre } from "./Components/Sobre/Sobre";
import { Projects } from "./Components/Projects/Projects";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import './Css.css'
import { Habilidades } from "./Components/Habilidades/Habilidades";
import { Container } from "./styled";

function App() {
  return (
    <Container>
      <Header/>
      <Sobre/>
      <Projects/>
      <Habilidades/>
      <Footer/>
    </Container>
  );
}

export default App;
