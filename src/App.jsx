import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulação de carregamento inicial
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Efeito para detectar a posição do mouse nos card de projetos
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.project-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div className="loader__content">
            <div className="loader__circle"></div>
            <div className="loader__text">
              <span className="loader__text-letter" style={{ '--delay': '0.1s' }}>C</span>
              <span className="loader__text-letter" style={{ '--delay': '0.2s' }}>a</span>
              <span className="loader__text-letter" style={{ '--delay': '0.3s' }}>r</span>
              <span className="loader__text-letter" style={{ '--delay': '0.4s' }}>r</span>
              <span className="loader__text-letter" style={{ '--delay': '0.5s' }}>e</span>
              <span className="loader__text-letter" style={{ '--delay': '0.6s' }}>g</span>
              <span className="loader__text-letter" style={{ '--delay': '0.7s' }}>a</span>
              <span className="loader__text-letter" style={{ '--delay': '0.8s' }}>n</span>
              <span className="loader__text-letter" style={{ '--delay': '0.9s' }}>d</span>
              <span className="loader__text-letter" style={{ '--delay': '1.0s' }}>o</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main className="main">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;