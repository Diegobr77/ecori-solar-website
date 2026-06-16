import { useState, useEffect } from "react";
import SolarHouseScene from "./SolarHouseScene";

const HeroSection = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToContent = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary via-primary/90 to-background">
      {/* Animated background rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-px bg-gradient-to-b from-accent/40 to-transparent"
            style={{
              height: "60vh",
              transformOrigin: "top center",
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              animation: `ray-spin ${8 + i * 0.5}s linear ${i * 0.2}s infinite`,
              opacity: 0.15 + (i % 3) * 0.05,
            }}
          />
        ))}
      </div>

      {/* Solar House Scene (3D canvas) */}
      <SolarHouseScene scrollProgress={0} />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <div
          className="mb-6 transition-all duration-700"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary bg-accent/90 shadow-lg shadow-accent/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Líder em Tecnologia MLPE no Brasil
          </span>
        </div>

        {/* Title */}
        <div
          className="transition-all duration-1000 delay-100"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-primary-foreground leading-none tracking-tight drop-shadow-2xl">
            ECORI
          </h1>
          <p className="font-body text-xs md:text-sm tracking-[0.6em] text-accent/70 uppercase mt-2">
            Energia Solar
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-8 flex items-center justify-center gap-4 transition-all duration-700 delay-300"
          style={{ opacity: phase >= 2 ? 1 : 0 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/60" />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/60" />
        </div>

        {/* Tagline */}
        <div
          className="transition-all duration-1000 delay-300"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="font-display text-2xl md:text-4xl font-bold text-primary-foreground drop-shadow-lg mb-3">
            Energia que{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--accent))",
                textShadow: "0 0 30px hsl(var(--accent) / 0.5)",
              }}
            >
              transforma.
            </span>
          </p>
          <p className="font-body text-base md:text-lg text-primary-foreground/55 max-w-lg mx-auto leading-relaxed">
            Mais de 10 anos pioneirando a tecnologia MLPE no Brasil com APsystems, SolarEdge e GoodWe.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <button
            onClick={scrollToContent}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-semibold text-base text-primary overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.8) 100%)",
              boxShadow: "0 0 40px hsl(var(--accent) / 0.4), 0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            <span className="relative z-10">Descobrir a tecnologia</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>

          <a
            href="https://www.ecorionline.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-semibold text-base text-primary-foreground border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            Seja Revendedor
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 transition-all duration-1000 delay-700"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {[
            { value: "10+", label: "Anos de Mercado" },
            { value: "3", label: "Marcas Globais" },
            { value: "MLPE", label: "Especialistas" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-black text-accent">{stat.value}</div>
              <div className="font-body text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000"
          style={{ opacity: phase >= 4 ? 1 : 0 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs text-primary-foreground/40 uppercase tracking-[0.2em]">Role para explorar</span>
            <div className="w-5 h-8 rounded-full border border-primary-foreground/20 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
