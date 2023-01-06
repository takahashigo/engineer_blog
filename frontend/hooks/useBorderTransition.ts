import { useCallback, useState } from 'react';

export const useBorderTransition = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, [setIsHover]);

  return {
    isHover,
    setIsHover,
    handleMouseEnter,
    handleMouseLeave,
  };
};
