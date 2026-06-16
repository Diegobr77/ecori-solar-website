import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Wifi, Battery, Award, Cpu, BarChart3 } from "lucide-react";

const products = [
  {
    brand: "APsystems",
    tagline: "Líder Global em Microinversores Multimódulos",
    highlight: "Mais seguro",
    description: "Baixa tensão CC no telhado. Cada módulo opera de forma independente — sem efeito de sombreamento, sem ponto de falha único.",
    features: ["Garantia de até 25 anos", "Monitoramento módulo a módulo", "Comunicação Zigbee", "2 entradas e 2 MPPTs"],
    icon: Shield,
    color: "from-emerald-500 to-green-700",
    glow: "shadow-emerald-500/30",
  },
  {
    brand: "SolarEdge",
    tagline: "Líder Global em Tecnologias Inteligentes",
    highlight: "Mais inteligente",
    description: "Otimizadores por módulo com inversor centralizado. Monitoramento avançado e SafeDC™ para máxima segurança.",
    features: ["Otimização por módulo", "SafeDC™ automático", "Compatível com baterias", "Dashboard completo"],
    icon: Cpu,
    color: "from-blue-500 to-indigo-700",
    glow: "shadow-blue-500/30",
  },
  {
    brand: "GoodWe",
    tagline: "Líder Global em Inversores Fotovoltaicos",
    highlight: "Mais eficiente",
    description: "Inversores string de alta eficiência com ampla gama de potências para sistemas residenciais e comerciais.",
    features: ["Alta eficiência >98%", "Múltiplas potências", "Wi-Fi integrado", "Compatível com baterias"],
    icon: BarChart3,
    color: "from-orange-500 to-amber-700",
    glow: "shadow-orange-500/30",
  },
];

const Technology = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Animated solar rings background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[700px] h-[700px] border-[2px] border-accent rounded-full animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] border-[1px] border-secondary rounded-full animate-counter-spin" />
        <div className="absolute w-[300px] h-[300px] border-[2px] border-accent/50 rounded-full animate-spin-slow" style={{ animationDuration: "12s" }} />
      </div>

      <div className="container relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent font-semibold">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Tecnologia de{" "}
            <span className="text-accent">classe mundial</span>
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            Representamos as três maiores marcas globais em tecnologia fotovoltaica MLPE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProductCard({ brand, tagline, highlight, description, features, icon: Icon, color, glow, index }: {
  brand: string; tagline: string; highlight: string; description: string;
  features: string[]; icon: typeof Shield; color: string; glow: string; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`h-full p-8 rounded-3xl glass-green border border-accent/10 hover:border-accent/30 transition-all duration-500 group hover:shadow-2xl ${glow} hover:shadow-xl`}>
        {/* Brand header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-body font-bold uppercase tracking-wider bg-accent/20 text-accent mb-1">
              {highlight}
            </span>
            <h3 className="font-display text-2xl font-black text-primary-foreground">{brand}</h3>
          </div>
        </div>

        <p className="font-body text-xs uppercase tracking-[0.15em] text-accent/70 mb-3">{tagline}</p>
        <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-2.5">
          {features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2.5 font-body text-sm text-primary-foreground/80">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} shrink-0`} />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://www.ecorionline.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm bg-gradient-to-r ${color} text-white shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            Ver produtos
          </a>
        </div>
      </div>
    </div>
  );
}

export default Technology;
