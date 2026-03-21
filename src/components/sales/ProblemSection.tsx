import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, TrendingDown, Clock, HelpCircle } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Não sabe por onde começar", desc: "Excesso de informações conflitantes na internet que só geram mais confusão." },
  { icon: AlertTriangle, title: "Medo de não conseguir", desc: "Acha que IA é complicada demais ou que precisa de formação técnica." },
  { icon: TrendingDown, title: "Já tentou e não deu certo", desc: "Comprou cursos que prometiam muito e não entregaram resultados práticos." },
  { icon: Clock, title: "Sente que está ficando pra trás", desc: "Vê outras pessoas lucrando com IA enquanto você ainda está parado." },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Você se identifica com alguma dessas situações?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 hover:border-secondary/40 transition-colors ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">{p.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-8 md:mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
          <p className="text-base md:text-lg text-muted-foreground">
            E se existisse um caminho <span className="text-primary font-semibold">simples, direto e comprovado</span> para mudar isso?
          </p>
        </div>
      </div>
    </section>
  );
}
