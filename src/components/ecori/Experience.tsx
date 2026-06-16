import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Timer, CircleDollarSign, Clock, ShieldCheck, Leaf, BarChart2 } from "lucide-react";

const benefits = [
  { icon: CircleDollarSign, title: "Economia Real", desc: "Reduza até 95% da sua conta de luz. ROI comprovado em menos de 5 anos com tecnologia MLPE." },
  { icon: ShieldCheck, title: "Máxima Segurança", desc: "Baixa tensão CC no telhado com o sistema MLPE. Proteção automática SafeDC™ em caso de emergência." },
  { icon: Timer, title: "Garantia de 25 anos", desc: "Os produtos APsystems e SolarEdge oferecem a maior garantia do mercado fotovoltaico." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Energia 100% limpa e renovável. Reduza sua pegada de carbono e contribua para um futuro sustentável." },
  { icon: BarChart2, title: "Monitoramento Total", desc: "Acompanhe a produção módulo a módulo, em tempo real, pelo app. Diagnóstico remoto facilitado." },
  { icon: Clock, title: "Instalação Rápida", desc: "Menos cabos, menos componentes BoS. Instalação mais simples e manutenção mais barata." },
];

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/20">
      {/* Animated sun glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold">Benefícios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Mais que energia,{" "}
            <span className="text-gradient">liberdade</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Com a tecnologia MLPE da Ecori, você conquista independência energética com segurança e máxima eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} index={i} />
          ))}
        </div>

        <MLPEComparison />
      </div>
    </section>
  );
};

function BenefitCard({ icon: Icon, title, desc, index }: {
  icon: typeof Timer; title: string; desc: string; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl glass border border-transparent hover:border-secondary/40 transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function MLPEComparison() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary/80 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              MLPE vs. Inversor String Convencional
            </h3>
            <p className="font-body text-primary-foreground/70 mt-3">Por que a Ecori escolheu a tecnologia superior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MLPE */}
            <div className="p-6 rounded-2xl bg-accent/15 border border-accent/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <h4 className="font-display text-xl font-bold text-accent">Tecnologia MLPE</h4>
              </div>
              {["Sem efeito de sombreamento", "Monitoramento módulo a módulo", "Baixa tensão no telhado", "Maior produção energética", "Garantia de até 25 anos", "Substituição fácil de módulos"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-accent/10 last:border-0">
                  <span className="text-accent font-bold">✓</span>
                  <span className="font-body text-sm text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            {/* String Convencional */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <h4 className="font-display text-xl font-bold text-primary-foreground/50">Inversor String</h4>
              </div>
              {["Sofre com sombreamento parcial", "Monitoramento apenas do sistema", "Alta tensão CC perigosa", "Produção limitada pelo pior módulo", "Garantia menor", "Substituição mais complexa"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                  <span className="text-red-400 font-bold">✗</span>
                  <span className="font-body text-sm text-primary-foreground/40">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
