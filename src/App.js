import { Sobre } from "./Components/Sobre/Sobre";
import { Projects } from "./Components/Projects/Projects";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import './Css.css'

function App() {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
