import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Adiciona classe quando scroll passa de 50px
      setScrolled(window.scrollY > 50);
      
      // Lógica para detectar seção ativa baseada no scroll
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Aplicando classes BEM usando classNames para facilitar concatenação de classes
  const headerClasses = classNames('header', {
    'header--scrolled': scrolled,
    'header--menu-open': menuOpen
  });

  return (
    <motion.header 
      className={headerClasses}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header__logo">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dev<span className="header__logo-highlight">Portfolio</span>
        </motion.span>
      </div>
      
      <nav className="header__nav">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item}`}
            className={classNames('header__nav-item', {
              'header__nav-item--active': activeSection === item
            })}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <span className="header__nav-number">0{index + 1}.</span>
            <span className="header__nav-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
          </motion.a>
        ))}
      </nav>
      
      <button 
        className="header__menu-button" 
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <div className={`header__menu-icon ${menuOpen ? 'header__menu-icon--open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </motion.header>
  );
};

export default Header;