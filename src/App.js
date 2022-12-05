import "./App.css";
import "./helpers";
import { Menu } from "./components/common/Menu.jsx";
import { Header } from "./components/layout/Header.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Courses } from "./components/sections/Courses.jsx";
import { Services } from "./components/sections/Services.jsx";
import { Footer } from "./components/layout/Footer.jsx";

const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios" , "Contacto"];

export function App() {
  return (
    <>
      <Menu menuItems={menuItems} />
      <main className="body-container">
        <Header />
        <Courses />
        <Projects />
        <Services />
        <Footer />
      </main>
    </>
  );
}
