import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield, CreditCard, ArrowRight } from "lucide-react";

const CTA_LINK = "https://pay.wiapy.com/zd--basAsV";

const included = [
  "Acesso completo a todos os módulos",
  "Comunidade exclusiva de alunos",
  "Templates e scripts prontos",
  "Suporte direto por 30 dias",
  "Atualizações gratuitas",
  "Bônus exclusivos",
  "Garantia de 7 dias",
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding" id="oferta">
      <div className="max-w-lg mx-auto">
        <div className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Comece agora por um valor simbólico
          </h2>
        </div>

        <div className={`bg-card border-2 border-primary/40 rounded-xl md:rounded-2xl p-6 md:p-8 glow-primary ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
          <div className="text-center mb-6">
            <p className="text-xs md:text-sm text-muted-foreground line-through">De R$ 197,00</p>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="font-heading text-4xl md:text-5xl font-bold text-gradient">19,90</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">ou 2x de R$ 10,44</p>
          </div>

          <ul className="space-y-3 mb-6">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-brand text-primary-foreground font-heading font-bold py-3 md:py-4 rounded-lg text-sm md:text-lg text-center hover:opacity-90 active:scale-[0.98] transition-all animate-pulse-glow"
          >
            <span className="sm:hidden flex items-center justify-center gap-2">Garantir Agora <ArrowRight className="w-4 h-4" /></span>
            <span className="hidden sm:flex items-center justify-center gap-2">Garantir Minha Vaga Agora <ArrowRight className="w-5 h-5" /></span>
          </a>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><Shield className="w-3 h-3" /> Compra segura</div>
            <div className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Cartão ou PIX</div>
          </div>
        </div>
      </div>
    </section>
  );
}
