import React, { useState } from 'react';


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="project-card__image-container">
        <div className="project-card__image-overlay"></div>
        <img 
          src={project.image || '/assets/images/project-placeholder.jpg'} 
          alt={project.title} 
          className="project-card__image" 
        />
        
        {project.featured && (
          <div className="project-card__featured">
            <span className="project-card__featured-text">Featured</span>
          </div>
        )}
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="project-card__links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link project-card__link--github"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg className="project-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.489C9.339 21.581 9.5 21.276 9.5 21.013C9.5 20.775 9.493 20.036 9.489 19.192C6.727 19.79 6.137 17.819 6.137 17.819C5.678 16.636 5.015 16.332 5.015 16.332C4.121 15.723 5.081 15.735 5.081 15.735C6.062 15.808 6.602 16.756 6.602 16.756C7.478 18.267 8.969 17.867 9.519 17.61C9.608 16.931 9.863 16.493 10.143 16.238C7.953 15.983 5.647 15.128 5.647 11.346C5.647 10.215 6.046 9.293 6.622 8.574C6.518 8.324 6.171 7.354 6.722 6.02C6.722 6.02 7.545 5.758 9.476 7.01C10.295 6.794 11.16 6.685 12.025 6.681C12.89 6.685 13.755 6.794 14.574 7.01C16.505 5.758 17.328 6.02 17.328 6.02C17.879 7.354 17.532 8.324 17.428 8.574C18.004 9.293 18.403 10.215 18.403 11.346C18.403 15.136 16.097 15.983 13.907 16.238C14.237 16.544 14.554 17.168 14.554 18.114C14.554 19.464 14.54 20.685 14.54 21.013C14.54 21.276 14.701 21.581 15.201 21.489C19.175 20.167 22.04 16.418 22.04 12C22.04 6.477 17.563 2 12.04 2H12Z" fill="currentColor"/>
              </svg>
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link project-card__link--demo"
              aria-label={`Live demo for ${project.title}`}
            >
              <svg className="project-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47527L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z" fill="currentColor"/>
                <path d="M5.02527 7.02527H10.0253V5.02527H5.02527C3.92071 5.02527 3.02527 5.92071 3.02527 7.02527V17.0253C3.02527 18.1298 3.92071 19.0253 5.02527 19.0253H15.0253C16.1298 19.0253 17.0253 18.1298 17.0253 17.0253V12.0253H15.0253V17.0253H5.02527V7.02527Z" fill="currentColor"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      
      <div 
        className="project-card__glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ProjectCard;