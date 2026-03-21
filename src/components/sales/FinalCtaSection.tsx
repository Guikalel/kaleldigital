import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";

const CTA_LINK = "https://pay.wiapy.com/zd--basAsV";

export default function FinalCtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            A hora é agora. Não deixe essa oportunidade passar.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Por apenas <span className="text-secondary font-bold">R$ 19,90</span>, você tem acesso completo ao método que já ajudou milhares de pessoas a lucrarem com IA.
          </p>

          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground font-heading font-bold px-6 md:px-12 py-3 md:py-5 rounded-lg text-sm md:text-lg hover:opacity-90 active:scale-[0.98] transition-all animate-pulse-glow"
          >
            <span className="sm:hidden">Quero Começar</span>
            <span className="hidden sm:inline">Quero Garantir Minha Vaga Agora</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Garantia de 7 dias</div>
            <div className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Acesso imediato</div>
            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Oferta por tempo limitado</div>
          </div>
        </div>

        <div className={`mt-12 md:mt-16 pt-8 border-t border-border text-xs text-muted-foreground ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <p>KalelDigital © {new Date().getFullYear()} — Todos os direitos reservados.</p>
          <p className="mt-1">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
        </div>
      </div>
    </section>
  );
}
