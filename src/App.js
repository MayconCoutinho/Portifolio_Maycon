import { Sobre } from "./Components/Sobre/index";
import { Projects } from "./Components/Projects/index";
import { Header } from "./Components/Header/index";
import { Footer } from "./Components/Footer/index";
import { Habilidades } from "./Components/Habilidades/index";
import { Container } from "./styled";
import "./index.css";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Sobre />
        <Projects />
        <Habilidades />
        <Footer />
      </Container>
    </>
  );
}
export default App;
