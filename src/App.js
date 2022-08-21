import { Sobre } from "./Components/Sobre/Sobre";
import { Projects } from "./Components/Projects/Projects";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import './Css.css'
import { Habilidades } from "./Components/Habilidades/Habilidades";

function App() {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Projects/>
      <Habilidades/>
      <Footer/>
    </div>
  );
}

export default App;
