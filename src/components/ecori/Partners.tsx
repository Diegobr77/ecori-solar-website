import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  {
    name: "APsystems",
    role: "Líder Global em Microinversores Multimódulos",
    since: "2014",
    detail: "Pioneiros na tecnologia MLPE no Brasil. Microinversores com a maior garantia do mercado.",
    color: "border-emerald-500/30 hover:border-emerald-500/60",
    accent: "text-emerald-400",
    bg: "from-emerald-900/20 to-green-900/10",
    logo: "APS",
  },
  {
    name: "SolarEdge",
    role: "Líder Global em Tecnologias Inteligentes",
    since: "2016",
    detail: "Otimizadores de módulo com máxima inteligência e segurança SafeDC™ integrada.",
    color: "border-blue-500/30 hover:border-blue-500/60",
    accent: "text-blue-400",
    bg: "from-blue-900/20 to-indigo-900/10",
    logo: "SE",
  },
  {
    name: "GoodWe",
    role: "Líder Global em Inversores Fotovoltaicos",
    since: "2018",
    detail: "Inversores de alta eficiência para residências e empresas, com Wi-Fi integrado.",
    color: "border-orange-500/30 hover:border-orange-500/60",
    accent: "text-orange-400",
    bg: "from-orange-900/20 to-amber-900/10",
    logo: "GW",
  },
];

const Partners = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="partners" className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-secondary/50" />
      </div>

      <div className="container relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent font-semibold">Parceiros Globais</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            O melhor do mundo,{" "}
            <span className="text-accent">no Brasil</span>
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            Mais de 10 anos importando e distribuindo as tecnologias fotovoltaicas mais avançadas do planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <PartnerCard key={i} {...partner} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <StatsBar />
      </div>
    </section>
  );
};

function PartnerCard({ name, role, since, detail, color, accent, bg, logo, index }: {
  name: string; role: string; since: string; detail: string;
  color: string; accent: string; bg: string; logo: string; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${bg} border ${color} transition-all duration-500 group`}>
        {/* Logo */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
            <span className={`font-display font-black text-xl ${accent}`}>{logo}</span>
          </div>
          <div className="text-right">
            <span className="font-body text-xs text-primary-foreground/40 uppercase tracking-wider">Parceiros desde</span>
            <div className={`font-display text-2xl font-black ${accent}`}>{since}</div>
          </div>
        </div>

        <h3 className="font-display text-2xl font-black text-primary-foreground mb-2">{name}</h3>
        <p className={`font-body text-xs uppercase tracking-[0.15em] ${accent} opacity-80 mb-4`}>{role}</p>
        <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{detail}</p>

        <div className="mt-6 pt-6 border-t border-white/10">
          <a
            href="#technology"
            className={`font-body text-sm ${accent} hover:underline transition-all`}
          >
            Ver produtos →
          </a>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "3", label: "Parceiros globais" },
    { value: "25 anos", label: "Garantia máxima" },
    { value: "MLPE", label: "Tecnologia exclusiva" },
  ];

  return (
    <div
      ref={ref}
      className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="font-display text-3xl md:text-4xl font-black text-accent mb-2">{stat.value}</div>
          <div className="font-body text-xs text-primary-foreground/50 uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Partners;
