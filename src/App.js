import { Sobre } from "./Components/Sobre/Sobre";
import { Projects } from "./Components/Projects/Projects";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Habilidades } from "./Components/Habilidades/Habilidades";
import './Css.css'

function App() {
  return (
    <>
      <Header/>
      <Sobre/>
      <Projects/>
      <Habilidades/>
      <Footer/>
    </>
  );
}
export default App;
