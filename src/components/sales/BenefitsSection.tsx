import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Video, Zap, Users, MessageSquare, Gift, Target, BarChart3 } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Módulo 1: Fundamentos da IA", desc: "Entenda o que é IA e como ela gera dinheiro de verdade." },
  { icon: Video, title: "Módulo 2: Ferramentas Práticas", desc: "As melhores ferramentas gratuitas e pagas para começar hoje." },
  { icon: Zap, title: "Módulo 3: Primeiras Vendas", desc: "Como oferecer serviços de IA e fechar seus primeiros clientes." },
  { icon: Target, title: "Módulo 4: Escala e Automação", desc: "Automatize processos e multiplique seus ganhos." },
  { icon: Users, title: "Grupo de Alunos", desc: "Troque experiências com outros alunos e amplie seu networking." },
  { icon: MessageSquare, title: "Atualizações Constantes", desc: "Conteúdo sempre atualizado com as últimas novidades em IA." },
  { icon: BarChart3, title: "Templates Prontos", desc: "Modelos de prompts, propostas e scripts validados." },
  { icon: Gift, title: "Bônus Surpresa", desc: "Material extra exclusivo para quem garantir hoje." },
];

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-8 md:mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Tudo o que você vai receber
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-3">
            Conteúdo direto ao ponto, feito para quem quer resultados rápidos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {modules.map((m, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 hover:border-primary/30 transition-all hover:-translate-y-1 group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">{m.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
