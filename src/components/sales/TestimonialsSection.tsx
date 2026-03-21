import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Renata Oliveira",
    role: "Designer freelancer",
    text: "Em 2 semanas já estava oferecendo serviços de IA para meus clientes. Faturei R$ 1.200 no primeiro mês com o que aprendi.",
    initials: "RO",
  },
  {
    name: "Thiago Mendes",
    text: "Achava que IA era só pra programador. Esse curso me provou o contrário — hoje uso IA no meu trabalho e ganho mais por isso.",
    role: "Autônomo",
    initials: "TM",
  },
  {
    name: "Cláudia Ferreira",
    text: "O melhor investimento que fiz. Conteúdo direto, sem enrolação. Já recuperei o valor do curso nas primeiras vendas.",
    role: "Empreendedora",
    initials: "CF",
  },
  {
    name: "André Nascimento",
    text: "Tinha medo de tecnologia, mas o passo a passo é tão claro que até minha mãe conseguiria seguir. Recomendo demais!",
    role: "Vendedor",
    initials: "AN",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            O que nossos alunos dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background border border-border rounded-lg md:rounded-xl p-4 md:p-6 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
