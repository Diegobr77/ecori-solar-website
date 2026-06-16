import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Rocket, Users, BookOpen, Headphones } from "lucide-react";

const perks = [
  { icon: BookOpen, title: "Treinamentos Gratuitos", desc: "Capacitação técnica completa para você e sua equipe com nossos especialistas em MLPE." },
  { icon: Headphones, title: "Suporte Técnico", desc: "Equipe especializada disponível para te apoiar em cada projeto, da proposta à instalação." },
  { icon: Users, title: "Rede de Parceiros", desc: "Faça parte da maior rede de revendedores MLPE do Brasil e amplie seu mercado." },
  { icon: Rocket, title: "Ecori Online", desc: "Plataforma exclusiva para pedidos, fichas técnicas, certificados e acompanhamento de pedidos." },
];

const Reseller = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reseller" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-secondary/30 to-primary">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-8 h-8 text-accent" />
          </div>

          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent font-semibold">Para profissionais</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mt-4">
            Trabalhe com quem{" "}
            <span className="text-accent">entende de MLPE.</span>
          </h2>

          <p className="font-body text-lg text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            Seja um revendedor cadastrado Ecori e tenha acesso às melhores tecnologias fotovoltaicas do mundo com suporte completo para fazer seu negócio crescer.
          </p>

          {/* Perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 text-left">
            {perks.map((perk, i) => (
              <PerkCard key={i} {...perk} index={i} />
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ecorionline.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-accent text-primary font-display font-bold text-lg rounded-full shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Quero ser revendedor</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5517992070590&text=Olá, gostaria de ser revendedor Ecori."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-accent/40 text-primary-foreground font-display font-semibold text-lg rounded-full hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function PerkCard({ icon: Icon, title, desc, index }: {
  icon: typeof Rocket; title: string; desc: string; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className={`flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h4 className="font-display text-base font-bold text-primary-foreground mb-1">{title}</h4>
        <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default Reseller;
