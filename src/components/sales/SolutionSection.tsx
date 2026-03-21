import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, ArrowRight } from "lucide-react";
import productCover from "@/assets/product-cover.png";

const before = [
  "Perdido sem saber por onde começar",
  "Medo de tecnologia e IA",
  "Renda limitada e incerta",
  "Dependência de um único emprego",
];

const after = [
  "Passo a passo claro e direto",
  "Usando IA com confiança e facilidade",
  "Novas fontes de renda ativas",
  "Liberdade e independência financeira",
];

export default function SolutionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            A Solução
          </div>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Conheça o <span className="text-gradient">KalelDigital</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
            O método mais simples e acessível do Brasil para você começar a faturar com Inteligência Artificial — mesmo sem nenhuma experiência.
          </p>
        </div>

        {/* Before vs After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className={`bg-background border border-border rounded-lg md:rounded-xl p-4 md:p-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            <h3 className="font-heading font-bold text-secondary text-sm md:text-base mb-4">❌ Antes</h3>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-muted-foreground">
                  <span className="text-secondary/60 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`bg-background border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 glow-primary ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <h3 className="font-heading font-bold text-primary text-sm md:text-base mb-4">✅ Depois</h3>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
