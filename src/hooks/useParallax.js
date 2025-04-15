import { useState, useEffect } from 'react';

/**
 * Hook para criar efeito de parallax baseado no movimento do mouse ou scroll
 * @param {Object} options - Opções de configuração
 * @param {number} options.speed - Velocidade do efeito (valor padrão: 0.1)
 * @param {boolean} options.mouseParallax - Habilitar parallax baseado no mouse (valor padrão: true)
 * @param {boolean} options.scrollParallax - Habilitar parallax baseado no scroll (valor padrão: false)
 * @param {number} options.maxOffset - Offset máximo em pixels (valor padrão: 30)
 * @returns {Object} - Objeto com os valores x e y atualizados para o efeito parallax
 */
const useParallax = ({
  speed = 0.1,
  mouseParallax = true,
  scrollParallax = false,
  maxOffset = 30
} = {}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Atualizar tamanho da janela quando ela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Atualizar posição alvo com base no movimento do mouse
  useEffect(() => {
    if (!mouseParallax) return;

    const handleMouseMove = (e) => {
      // Normalizar a posição do mouse entre -1 e 1
      const x = (e.clientX / windowSize.width - 0.5) * 2;
      const y = (e.clientY / windowSize.height - 0.5) * 2;

      // Aplicar o máximo de offset e velocidade
      setTarget({
        x: x * maxOffset * speed,
        y: y * maxOffset * speed
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseParallax, maxOffset, speed, windowSize]);

  // Atualizar posição alvo com base no scroll
  useEffect(() => {
    if (!scrollParallax) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - windowSize.height;
      const progress = Math.min(scrollY / scrollHeight, 1);

      setTarget(prev => ({
        ...prev,
        y: progress * maxOffset * speed
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollParallax, maxOffset, speed, windowSize.height]);

  // Aplicar easing à animação para suavizar o movimento
  useEffect(() => {
    const easing = 0.1; // Fator de suavização (quanto menor, mais suave)
    
    const animate = () => {
      // Calcular a diferença entre a posição atual e o alvo
      const dx = target.x - position.x;
      const dy = target.y - position.y;
      
      // Aplicar easing
      const newX = position.x + dx * easing;
      const newY = position.y + dy * easing;
      
      setPosition({ x: newX, y: newY });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    let animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, position]);

  return position;
};

export default useParallax;