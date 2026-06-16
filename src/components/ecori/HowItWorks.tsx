import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sun, Zap, Monitor, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "Captação Solar",
    description: "Os módulos fotovoltaicos captam a luz solar e geram corrente contínua com máxima eficiência.",
    step: "01",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Zap,
    title: "Conversão MLPE",
    description: "Microinversores APsystems ou otimizadores SolarEdge convertem CC em CA individualmente por módulo.",
    step: "02",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Monitor,
    title: "Monitoramento",
    description: "Acompanhe a geração módulo a módulo em tempo real pelo aplicativo, de qualquer lugar.",
    step: "03",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Economia Real",
    description: "Reduza até 95% da sua conta de luz com máxima segurança e garantia de até 25 anos.",
    step: "04",
    color: "from-purple-400 to-violet-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Background solar particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animation: `float ${4 + i * 0.7}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <SectionTitle />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SectionTitle() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <span className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold">
        Como Funciona
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
        Tecnologia MLPE{" "}
        <span className="text-gradient-solar">explicada</span>
      </h2>
      <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
        Do sol à tomada, cada etapa otimizada com a tecnologia mais avançada do mercado fotovoltaico.
      </p>
    </div>
  );
}

function StepCard({ icon: Icon, title, description, step, color, index }: {
  icon: typeof Sun; title: string; description: string; step: string; color: string; index: number;
}) {
  const { ref: scrollRef, isVisible } = useScrollAnimation(0.2);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glow: false });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 12, glow: true });
  };

  return (
    <div
      ref={scrollRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms`, perspective: "800px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0, glow: false })}
        className="relative p-8 rounded-2xl bg-card border border-border/50 cursor-default h-full"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.glow ? "transform 0.1s ease-out" : "transform 0.5s ease-out, box-shadow 0.5s",
          boxShadow: tilt.glow
            ? "0 20px 60px rgba(130,185,60,0.2), 0 0 30px hsl(var(--secondary) / 0.15)"
            : "0 2px 12px rgba(0,0,0,0.05)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="absolute -top-4 -left-2 font-display text-6xl font-black text-secondary/15 select-none" style={{ transform: "translateZ(20px)" }}>
          {step}
        </span>

        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}
          style={{ transform: "translateZ(25px)" }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-3" style={{ transform: "translateZ(15px)" }}>
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default HowItWorks;
