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
      image: '/assets/images/project-1.jpg',
      github: 'https://github.com/username/portfolio',
      demo: 'https://portfolio-demo.com',
      featured: true,
      category: 'web'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com visualizações em tempo real e interface moderna.',
      tags: ['React', 'Chart.js', 'TailwindCSS', 'API'],
      image: '/assets/images/project-2.jpg',
      github: 'https://github.com/username/dashboard',
      demo: 'https://dashboard-demo.com',
      featured: true,
      category: 'web'
    },
    {
      id: 3,
      title: 'App de Finanças',
      description: 'Aplicativo mobile para controle financeiro pessoal com recursos de planejamento e análise.',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      image: '/assets/images/project-3.jpg',
      github: 'https://github.com/username/finance-app',
      demo: 'https://finance-app-demo.com',
      featured: false,
      category: 'mobile'
    },
    {
      id: 4,
      title: 'E-commerce Store',
      description: 'Loja virtual completa com catálogo de produtos, carrinho de compras e checkout.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/assets/images/project-4.jpg',
      github: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com',
      featured: true,
      category: 'web'
    },
    {
      id: 5,
      title: 'Rede Social AI',
      description: 'Plataforma de rede social com recursos de inteligência artificial para personalização de conteúdo.',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: '/assets/images/project-5.jpg',
      github: 'https://github.com/username/ai-social',
      demo: 'https://ai-social-demo.com',
      featured: false,
      category: 'ai'
    },
    {
      id: 6,
      title: 'App de Clima',
      description: 'Aplicativo de previsão do tempo com interface minimalista e dados em tempo real.',
      tags: ['React Native', 'API', 'Styled Components'],
      image: '/assets/images/project-6.jpg',
      github: 'https://github.com/username/weather-app',
      demo: 'https://weather-app-demo.com',
      featured: false,
      category: 'mobile'
    }
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
            href="https://github.com/username" 
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