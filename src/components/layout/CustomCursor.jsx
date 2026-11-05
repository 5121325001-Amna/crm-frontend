import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let animationFrame;
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const followLoop = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(followLoop);
    };

    animationFrame = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="hidden md:block fixed pointer-events-none z-[9999] rounded-full bg-strawberry-500 shadow-[0_0_12px_#FF6B8B] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 transition-transform duration-75"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div
        className="hidden md:block fixed pointer-events-none z-[9998] rounded-full border border-strawberry-400/50 bg-white/5 backdrop-blur-[1px] -translate-x-1/2 -translate-y-1/2 w-9 h-9"
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
    </>
  );
};
