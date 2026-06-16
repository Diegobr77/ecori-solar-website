import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sun } from "lucide-react";

const FinalSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-primary">
      {/* Animated solar background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Central sun glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-accent/20 blur-2xl" />

        {/* Rays */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-px bg-gradient-to-b from-accent/20 to-transparent"
            style={{
              height: "40vh",
              transformOrigin: "top center",
              transform: `rotate(${i * 45}deg) translateX(-50%)`,
              animation: `ray-spin 12s linear ${i * 1.5}s infinite`,
              opacity: 0.15,
            }}
          />
        ))}

        {/* Floating energy particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/40 rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Icon */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-150 animate-pulse-glow" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mx-auto">
              <Sun className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Quote */}
          <p className="font-body text-xl md:text-2xl text-primary-foreground/70 italic leading-relaxed mb-4">
            "Energia Solar não é tudo igual.
          </p>
          <p className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Com MLPE, é incomparavelmente superior."
          </p>

          <p className="font-display text-xl md:text-2xl font-bold text-accent mt-8">
            Ecori Energia Solar — Pioneiros. Líderes. Especialistas.
          </p>

          {/* CTA */}
          <div className="mt-14">
            <a
              href="https://www.ecorionline.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-accent text-primary font-display font-bold text-xl rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/60 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Acessar Ecori Online</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </a>
          </div>

          {/* Footer info */}
          <div className="mt-20 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-8 opacity-40">
              <div className="w-20 h-px bg-primary-foreground/30" />
              <span className="font-display text-sm text-primary-foreground/40 tracking-[0.2em] uppercase">Ecori Energia Solar</span>
              <div className="w-20 h-px bg-primary-foreground/30" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {[
                { label: "comercial@ecori.com.br", href: "mailto:comercial@ecori.com.br" },
                { label: "(17) 3228-1200", href: "tel:551732281200" },
                { label: "ecorienergiasolar.com.br", href: "https://www.ecorienergiasolar.com.br" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="font-body text-xs text-primary-foreground/40 hover:text-accent transition-colors"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="font-body text-xs text-primary-foreground/25 mt-2">
              © Ecori Energia Solar 2024 — Importação e Distribuição de Sistemas Fotovoltaicos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
