import React, { useRef, useState } from 'react';

export const PhysicsSpecimen = () => {
  const cardRef = useRef(null);
  const [rotations, setRotations] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = +(((y - centerY) / centerY) * -8).toFixed(1);
    const rotY = +(((x - centerX) / centerX) * 8).toFixed(1);
    setRotations({ x: rotX, y: rotY });
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setRotations({ x: 0, y: 0 });
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold">3D Card Tilt & Specular Reflection</h3>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-strawberry-500 font-bold">
          rotX: {rotations.x}° • rotY: {rotations.y}°
        </span>
      </div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card p-5 rounded-2xl border border-strawberry-300/40 bg-white/40 dark:bg-slate-800/40 cursor-pointer transition-transform"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-strawberry-500">Physics Playground</span>
          <span className="text-lg">🧊</span>
        </div>
        <h4 className="font-bold text-sm">Interactive 3D Glass Card</h4>
        <p className="text-xs text-slate-400 mt-1">
          Move your cursor over this card to observe real-time angular perspective tilt (±8°).
        </p>
      </div>

      <p className="text-[11px] text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl font-mono">
        Note: Cards tilt in 3D toward cursor (max 8 degrees) with dynamic specular glare calculations and soft rim highlighting.
      </p>
    </div>
  );
};
