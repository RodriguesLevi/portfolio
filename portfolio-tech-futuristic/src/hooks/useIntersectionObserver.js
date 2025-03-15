import { useState, useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar quando um elemento entra na viewport
 * @param {Object} options - Opções para o IntersectionObserver
 * @param {number} options.threshold - Valor entre 0 e 1 indicando a porcentagem visível necessária para disparar
 * @param {Element} options.root - Elemento que é usado como viewport para verificar visibilidade
 * @param {string} options.rootMargin - Margem ao redor do elemento root
 * @param {boolean} options.triggerOnce - Se o observer deve se desconectar após a primeira vez que o elemento for visto
 * @returns {Array} - [ref, inView, entry] ref para ser adicionado ao elemento, boolean indicando se está visível, e o entry do observer
 */
const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  triggerOnce = false
} = {}) => {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState(null);
  const observer = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    // Desconectar observer anterior se existir
    if (observer.current) {
      observer.current.disconnect();
    }

    // Criar novo observer
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        setEntry(entry);
        
        // Se o elemento está visível e triggerOnce é true, desconectar
        if (entry.isIntersecting && triggerOnce) {
          observer.current.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    // Observar o elemento, se ele existir
    const currentElement = elementRef.current;
    if (currentElement) {
      observer.current.observe(currentElement);
    }

    // Cleanup: desconectar observer ao desmontar
    return () => {
      if (observer.current && currentElement) {
        observer.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  // Retorna o elementRef, inView e entry
  return [elementRef, inView, entry];
};

export default useIntersectionObserver;