import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useParallax from '../../hooks/useParallax';
import './About.css';
import foto from '../../../public/assets/images/foto-de-perfil.png'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Efeito parallax nas decorações
  const parallax = useParallax({
    speed: 0.05,
    maxOffset: 30
  });
  
  // Iniciar animação quando o componente estiver visível
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="about" className="about">
      {/* Elementos decorativos com efeito parallax */}
      <div 
        className="about__decoration about__decoration--1"
        style={{ 
          transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)` 
        }}
      />
      <div 
        className="about__decoration about__decoration--2"
        style={{ 
          transform: `translate(${parallax.x * 1.5}px, ${parallax.y * 1.5}px)` 
        }}
      />
      
      <div className="container">
        <div className="section__header">
          <h2 
            className="section__title"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <span className="section__title-number"></span>
            Sobre Mim
          </h2>
        </div>
        
        <div className="about__content">
          <div 
            className="about__text"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <p variants={itemVariants} className="about__paragraph">
              Olá! Meu nome é <span className="about__highlight">Alisson Rodrigues</span> e 
              sou um desenvolvedor front-end apaixonado por criar experiências digitais 
              que são tanto funcionais quanto visualmente atraentes.
            </p>
            
            <p variants={itemVariants} className="about__paragraph">
              Minha jornada na área de desenvolvimento começou há alguns anos, 
              quando me interessei por como a tecnologia pode transformar a maneira como 
              interagimos com o mundo. Desde então, venho aprimorando minhas habilidades 
              em <span className="about__highlight">HTML</span>, <span className="about__highlight">CSS</span>, 
              <span className="about__highlight"> JavaScript</span> e diversos frameworks modernos.
            </p>
            
            <p variants={itemVariants} className="about__paragraph">
              Me especializo em <span className="about__highlight">React</span> e em 
              criar interfaces responsivas que funcionam perfeitamente em qualquer dispositivo. 
              Tenho experiência com metodologias como <span className="about__highlight">BEM</span>, 
              <span className="about__highlight"> SASS</span> e 
              <span className="about__highlight"> TailwindCSS</span>, sempre buscando o 
              melhor approach para cada projeto.
            </p>
            
            <p variants={itemVariants} className="about__paragraph">
              Quando não estou codando, gosto de ler sobre novas tecnologias, 
              jogar videogames e explorar a natureza. Acredito que essas atividades 
              me ajudam a manter uma mente criativa e aberta a novas ideias.
            </p>
            
            <div variants={itemVariants} className="about__skills-list">
              <h3 className="about__skills-title">Algumas tecnologias com as quais trabalho:</h3>
              <ul className="about__skills">
                <li className="about__skill">JavaScript (ES6+)</li>
                <li className="about__skill">React</li>
                <li className="about__skill">Node.js</li>
                <li className="about__skill">TypeScript</li>
                <li className="about__skill">HTML & CSS</li>
                <li className="about__skill">Git & GitHub</li>
                <li className="about__skill">Responsive Design</li>
              </ul>
            </div>
          </div>
          
          <div 
            className="about__image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="about__image-wrapper">
              <div className="about__image-decoration"></div>
              <img src={foto}  alt='foto de peril' className="about__image" />
              <div className="about__image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;