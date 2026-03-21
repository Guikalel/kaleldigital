import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Preciso ter experiência com tecnologia?", a: "Não! O curso foi feito justamente para iniciantes. Tudo é explicado passo a passo, do zero." },
  { q: "Em quanto tempo vejo resultados?", a: "Muitos alunos começam a aplicar e ver resultados nas primeiras 2 semanas. Depende da sua dedicação." },
  { q: "R$ 19,90 é o preço real? Não tem taxa escondida?", a: "Esse é o preço final. Sem mensalidades, sem taxas extras. Acesso completo por um único pagamento." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro." },
  { q: "Recebo acesso imediato?", a: "Sim! Após a confirmação do pagamento, você recebe acesso instantâneo a todo o conteúdo." },
  { q: "Funciona no celular?", a: "Sim, todo o conteúdo é acessível pelo celular, tablet ou computador." },
  { q: "Quanto posso ganhar com isso?", a: "Depende da sua dedicação. Temos alunos que faturam de R$ 500 a R$ 5.000+ por mês usando as técnicas ensinadas." },
];

export default function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding bg-card/50">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-background border border-border rounded-lg overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-xs md:text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-xs md:text-sm text-muted-foreground animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
