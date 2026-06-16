import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

const SolarCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clicked, setClicked] = useState(false);
  const nextId = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Ocultar cursor padrão
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Adicionar partícula de energia
      if (Math.random() > 0.5) {
        const particle: Particle = {
          id: nextId.current++,
          x: e.clientX,
          y: e.clientY,
          size: 2 + Math.random() * 4,
          opacity: 0.8,
          life: 1,
          maxLife: 1,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 0.5,
        };
        setParticles((prev) => [...prev.slice(-30), particle]);
      }
    };

    const onClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    // Animar trail
    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 16) {
        setTrail((prev) => ({
          x: prev.x + (pos.x - prev.x) * 0.15,
          y: prev.y + (pos.y - prev.y) * 0.15,
        }));
        setParticles((prev) =>
          prev
            .map((p) => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              life: p.life - 0.04,
              opacity: p.life * 0.8,
            }))
            .filter((p) => p.life > 0)
        );
        lastTime = time;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(animRef.current);
      document.body.style.cursor = "auto";
    };
  }, [pos.x, pos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {/* Energy particles trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)`,
            opacity: p.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Trail follower (slower) */}
      <div
        className="absolute w-8 h-8 rounded-full border border-accent/40 transition-none"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 rounded-full transition-transform duration-75"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${clicked ? 2 : 1})`,
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)",
          boxShadow: `0 0 ${clicked ? 20 : 8}px hsl(var(--accent) / 0.6)`,
        }}
      />
    </div>
  );
};

export default SolarCursor;
