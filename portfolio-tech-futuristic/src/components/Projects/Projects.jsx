import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Dados de exemplo para os projetos
  const projectsData = [
    {
      id: 1,
      title: 'Portfolio Futurista',
      description: 'Um portfólio pessoal com design futurista e tecnológico, desenvolvido com React e metodologia BEM.',
      tags: ['React', 'CSS', 'Framer Motion', 'BEM'],
      image: '/assets/images/image_01.png',
      github: 'https://github.com/RodriguesLevi/portfolio',
      demo: 'https://portfolio-demo.com',
      featured: true,
      category: 'web'
    },
    {
      id: 2,
      title: 'Sabor & Art',
      description: 'Este é um aplicativo front-end para um restaurante, desenvolvido como parte do projeto final do curso TripleTen. O aplicativo exibe informações sobre o restaurante, seu menu e ofertas especiais, usando uma API de terceiros para obter dados de alimentos.',
      tags: ['React', 'Chart.js', 'API'],
      image: '/assets/images/image_02.png',
      github: 'https://github.com/RodriguesLevi/Sabor-Arte',
      demo: 'https://rodrigueslevi.github.io/Sabor-Arte/',
      featured: true,
      category: 'web'
    },
    {
      id: 3,
      title: 'Project Homeland',
      description: 'O site mostra informações sobre alguns colegas de trabalho, como aonde nasceram e algumas historias do mesmo de suas cidades de origem e fotos',
      tags: ['HTML', 'CSS', 'BEM'],
      image: '/assets/images/image_03.png',
      github: 'https://github.com/RodriguesLevi/web_project_homeland',
      demo: 'https://rodrigueslevi.github.io/web_project_homeland/',
      featured: false,
      category: 'web'
    },
    {
      id: 4,
      title: ' Web Project API Full',
      description: ' Web Project API Full Aplicação fullstack que combina React.js (Vite) no front-end e Node.js (Express, MongoDB) no back-end. Permite que os usuários criem e personalizem perfis, adicionem fotos e interajam com postagens. O sistema possui autenticação JWT, API segura e layout responsivo.',
      tags: ['React', 'Node.js', 'MongoDB', 'Vite', 'Express'],
      image: '/assets/images/image_04.png',
      github: 'https://github.com/RodriguesLevi/web_project_api_full',
      demo: '',
      featured: true,
      category: 'web'
    },
  ];

  // Categorias de projetos
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' }
  ];

  // Filtrar projetos com base na categoria ativa
  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  // Começar a animação quando a seção entrar na viewport
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
    <section id="projects" className="projects">
      <div className="container">
        <div className="section__header">
          <h2 
            className="section__title"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <span className="section__title-number">03.</span>
            Meus Projetos
          </h2>
        </div>

        <div 
          className="projects__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`projects__tab ${activeTab === category.id ? 'projects__tab--active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
              {activeTab === category.id && (
                <div 
                  className="projects__tab-indicator"
                  layoutId="activeTab"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          ))}
        </div>

        <div 
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="projects__item"
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div 
          className="projects__more"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/RodriguesLevi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
          >
            <span>Ver Mais no GitHub</span>
            <span className="button__icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;