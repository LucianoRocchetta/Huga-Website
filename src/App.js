import "./App.css";
import "./helpers";
import { Menu } from "./components/common/Menu"
import Home from "./containers/home/Home.tsx";

const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios" , "Contacto"];

export function App() {
  return (
    <>
      <Menu menuItems={menuItems} />
      <main className="body-container">
        <Home />
      </main>
    </>
  );
}
