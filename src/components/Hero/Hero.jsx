import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import './Hero.css';

const Hero = () => {
  // Configuração das partículas com tsparticles
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.6,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="hero">
      {/* Efeito de partículas para visual futurista */}
      <Particles
        className="hero__particles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                lineLinked: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#64ffda",
            },
            links: {
              color: "#64ffda",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <div className="hero__content">
        <div 
          className="hero__text-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__greeting" variants={itemVariants}>
            Olá, meu nome é
          </div>
          
          <h1 className="hero__title" variants={itemVariants}>
            <span className="hero__name">Alisson Rodrigues</span>
            <span className="hero__position">Desenvolvedor Front-end</span>
          </h1>
          
          <p className="hero__description" variants={itemVariants}>
            Sou um desenvolvedor especializado em criar experiências digitais excepcionais. 
            Foco em construir aplicações web responsivas e interativas 
            que aliam design moderno com código limpo e eficiente.
          </p>
          
          <div variants={itemVariants}>
            <a href="#projects" className="hero__cta-button">
              <span className="hero__cta-button-text">Ver Projetos</span>
              <span className="hero__cta-button-icon">→</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <div className="hero__mouse">
          <div className="hero__mouse-wheel"></div>
        </div>
        <div className="hero__scroll-text">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;