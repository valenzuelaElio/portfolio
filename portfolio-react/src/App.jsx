
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Skills from './Components/MyWork/Skills/Skills';
import Experience from './Components/MyWork/Experience/Experience';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import InteractiveGrid from './Components/InteractiveGrid/InteractiveGrid';
import CRTOverlay from './Components/CRTOverlay/CRTOverlay';

const App = () => {
  return (
    <div className="portfolio-layout">
      <InteractiveGrid />
      <CRTOverlay />

      <aside className="portfolio-left">
        <NavBar />
      </aside>

      <main className="portfolio-content">
        {/* Aquí irán las secciones normales */}
        <MyWork />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />

      </main>

      <aside className="portfolio-right">
        {/* Espacio reservado */}
      </aside>

      <section className="hero-wide">
        <Hero />
      </section>
    </div>
  );
}


export default App