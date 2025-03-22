import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useParallax from '../../hooks/useParallax';
import './Skills.css';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const parallax = useParallax({
    speed: 0.05,
    maxOffset: 20
  });

  // Estado ativo para a categoria de skill
  const [activeCategory, setActiveCategory] = useState('frontend');

  // Iniciar animação quando o componente estiver visível
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Dados de habilidades por categoria
  const skillsData = {
    frontend: [
      { name: 'HTML5', level: 90, icon: 'html5' },
      { name: 'CSS3', level: 85, icon: 'css3' },
      { name: 'JavaScript', level: 85, icon: 'javascript' },
      { name: 'React', level: 80, icon: 'react' },
      { name: 'Vue.js', level: 70, icon: 'vuejs' },
      { name: 'Sass/SCSS', level: 75, icon: 'sass' },
      { name: 'Tailwind CSS', level: 80, icon: 'tailwind' },
      { name: 'TypeScript', level: 75, icon: 'typescript' }
    ],
    backend: [
      { name: 'Node.js', level: 75, icon: 'nodejs' },
      { name: 'Express', level: 70, icon: 'express' },
      { name: 'Django', level: 60, icon: 'django' },
      { name: 'MongoDB', level: 70, icon: 'mongodb' },
      { name: 'MySQL', level: 65, icon: 'mysql' },
    ],
    tools: [
      { name: 'Git', level: 85, icon: 'git' },
      { name: 'Webpack', level: 70, icon: 'webpack' },
      { name: 'Docker', level: 65, icon: 'docker' },
      { name: 'Figma', level: 75, icon: 'figma' },
      { name: 'VS Code', level: 90, icon: 'vscode' },
      { name: 'CI/CD', level: 60, icon: 'cicd' },
      { name: 'Jest', level: 65, icon: 'jest' },
      { name: 'NPM', level: 80, icon: 'npm' }
    ]
  };

  // Categorias de skills
  const categories = [
    { id: 'frontend', label: 'Front-end' },
    { id: 'backend', label: 'Back-end' },
    { id: 'tools', label: 'Tools & Others' }
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="skills">
      {/* Elementos decorativos com efeito parallax */}
      <div 
        className="skills__decoration skills__decoration--1"
        style={{ 
          transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)` 
        }}
      />
      <div 
        className="skills__decoration skills__decoration--2"
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
            <span className="section__title-number">02.</span>
            Minhas Habilidades
          </h2>
        </div>

        <div 
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`skills__tab ${activeCategory === category.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
              {activeCategory === category.id && (
                <div 
                  className="skills__tab-indicator"
                  layoutId="activeSkillTab"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="skills__content">
          <div 
            className="skills__grid"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            key={activeCategory} // Força re-renderização na mudança de categoria
          >
            {skillsData[activeCategory].map((skill, index) => (
              <div 
                key={`${activeCategory}-${skill.name}`} 
                className="skills__item"
                variants={itemVariants}
              >
                <div className="skill-card">
                  <div className="skill-card__icon-wrapper">
                    <div className="skill-card__icon">
                      {/* Placeholder para ícone - em um projeto real seria melhor usar uma biblioteca de ícones */}
                      <div className={`skill-card__icon-img skill-card__icon-img--${skill.icon}`}></div>
                    </div>
                  </div>
                  
                  <div className="skill-card__info">
                    <h3 className="skill-card__name">{skill.name}</h3>
                    
                    <div className="skill-card__level-container">
                      <div className="skill-card__level-track">
                        <div 
                          className="skill-card__level-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        />
                      </div>
                      <span className="skill-card__level-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;