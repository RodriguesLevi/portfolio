import React from 'react';

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div 
          className="footer__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer__logo">
            <div className="footer__logo-text">DevPortfolio</div>
            <div className="footer__logo-border"></div>
          </div>
          
          <div className="footer__links">
            <a href="#home" className="footer__link">Home</a>
            <a href="#about" className="footer__link">Sobre</a>
            <a href="#skills" className="footer__link">Habilidades</a>
            <a href="#projects" className="footer__link">Projetos</a>
            <a href="#contact" className="footer__link">Contato</a>
          </div>
          
          <div className="footer__socials">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.276 9.5 21.013C9.5 20.775 9.493 20.036 9.489 19.192C6.727 19.79 6.137 17.819 6.137 17.819C5.678 16.636 5.015 16.332 5.015 16.332C4.121 15.723 5.081 15.735 5.081 15.735C6.062 15.808 6.602 16.756 6.602 16.756C7.478 18.267 8.969 17.867 9.519 17.61C9.608 16.931 9.863 16.493 10.143 16.238C7.953 15.983 5.647 15.128 5.647 11.346C5.647 10.215 6.046 9.293 6.622 8.574C6.518 8.324 6.171 7.354 6.722 6.02C6.722 6.02 7.545 5.758 9.476 7.01C10.295 6.794 11.16 6.685 12.025 6.681C12.89 6.685 13.755 6.794 14.574 7.01C16.505 5.758 17.328 6.02 17.328 6.02C17.879 7.354 17.532 8.324 17.428 8.574C18.004 9.293 18.403 10.215 18.403 11.346C18.403 15.136 16.097 15.983 13.907 16.238C14.237 16.544 14.554 17.168 14.554 18.114C14.554 19.464 14.54 20.685 14.54 21.013C14.54 21.276 14.701 21.581 15.201 21.489C19.175 20.167 22.04 16.418 22.04 12C22.04 6.477 17.563 2 12.04 2H12Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.32353V19.6765C21 20.4066 20.4066 21 19.6765 21H4.32353C3.59342 21 3 20.4066 3 19.6765V4.32353C3 3.59342 3.59342 3 4.32353 3H19.6765C20.4066 3 21 3.59342 21 4.32353ZM8.82353 10.1471H6.35294V17.6471H8.82353V10.1471ZM9.06125 7.5882C9.04969 6.95007 8.55522 6.42353 7.60493 6.42353C6.65463 6.42353 6.14706 6.95007 6.14706 7.5882C6.14706 8.21409 6.64306 8.75294 7.58204 8.75294H7.59361C8.55522 8.75294 9.06125 8.21409 9.06125 7.5882ZM17.6471 13.1776C17.6471 10.8789 16.423 9.79048 14.8087 9.79048C13.5232 9.79048 12.9348 10.5106 12.6127 11.0078V10.1471H10.1418C10.1649 10.8427 10.1418 17.6471 10.1418 17.6471H12.6127V13.2949C12.6127 13.0761 12.6243 12.8574 12.6937 12.6967C12.8905 12.259 13.3295 11.8098 14.0589 11.8098C15.0208 11.8098 15.4136 12.4824 15.4136 13.4824V17.6471H17.8842L17.6471 13.1776Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 5.89453C21.2642 6.21853 20.4733 6.43553 19.643 6.53253C20.4904 6.03253 21.1417 5.23953 21.4475 4.29553C20.6547 4.75753 19.7767 5.09253 18.8419 5.27553C18.0942 4.49153 17.0269 4.00053 15.8461 4.00053C13.5815 4.00053 11.7431 5.83853 11.7431 8.10353C11.7431 8.42653 11.7792 8.74053 11.8471 9.04053C8.43572 8.86853 5.41694 7.23753 3.39202 4.75053C3.03939 5.36153 2.83719 6.03253 2.83719 6.74653C2.83719 8.10353 3.56094 9.29453 4.6615 9.98053C3.98864 9.95953 3.35719 9.77553 2.80333 9.47953C2.80333 9.49553 2.80333 9.51353 2.80333 9.53053C2.80333 11.5215 4.21761 13.1825 6.09458 13.5615C5.75061 13.6555 5.38908 13.7045 5.01411 13.7045C4.74922 13.7045 4.49303 13.6805 4.24238 13.6345C4.76361 15.2695 6.27925 16.4605 8.07419 16.4935C6.67022 17.5965 4.9015 18.2405 2.97947 18.2405C2.64878 18.2405 2.32028 18.2215 2 18.1865C3.81461 19.3565 5.9726 20.0005 8.28986 20.0005C15.8358 20.0005 19.9644 13.7695 19.9644 8.35853C19.9644 8.18253 19.9603 8.00753 19.9519 7.83453C20.7547 7.26153 21.4496 6.53353 22 5.69453V5.89453Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="footer__social">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"/>
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="footer__copyright">
            &copy; {currentYear} DevPortfolio. Todos os direitos reservados.
          </div>
          
          <div className="footer__design">
            Desenvolvido com <span className="footer__heart">❤</span> por Você
          </div>
        </div>
      </div>
      
      <div className="footer__background">
        <div className="footer__grid">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="footer__grid-line"></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;