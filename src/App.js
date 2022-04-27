import './App.css';
import { Menu } from './components/common/Menu.jsx';
import { Header } from './components/layout/Header.js';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects.js';
import { Courses } from './components/sections/Courses.js';
import { Contact } from './components/sections/Contact.js';
import { Footer } from './components/layout/Footer.js';

const menuItems = ['Inicio', 'Acerca de Mi', 'Proyectos', 'Cursos', 'Contacto'];

export function App() {
  return (
    <>
      <Menu menuItems = {menuItems} />
      <Header />
      <AboutMe />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
}
