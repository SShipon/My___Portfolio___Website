export const fadeIn = (direction ,delay) => {
    return {
      hidden: {
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          delay: delay || 0,
          ease: 'easeOut'
        },
      },
    };
  };