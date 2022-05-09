import './App.css';
import { Menu } from './components/common/Menu.jsx';
import { Header } from './components/layout/Header.js';
import { Projects } from './components/sections/Projects.js';
import { Courses } from './components/sections/Courses.js';
import { Footer } from './components/layout/Footer.js';

const menuItems = ['Inicio', 'Proyectos', 'Cursos', 'Contacto'];

export function App() {
  return (
    <>
      <Menu menuItems = {menuItems} />
      <main className = "body-container">
        <Header />
        <Projects />
        <Courses />
        <Footer />
      </main>
    </>
  );
}
