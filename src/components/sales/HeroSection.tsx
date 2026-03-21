import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CTA_LINK = "https://pay.wiapy.com/zd--basAsV";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding pt-20 md:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="inline-block animate-fade-up">
          <span className="bg-primary/15 text-primary text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20">
            🚀 Método validado por +2.000 alunos
          </span>
        </div>

        <h1
          className="font-heading text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight md:leading-snug animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Descubra Como Ganhar Dinheiro com{" "}
          <span className="text-gradient">Inteligência Artificial</span>{" "}
          Mesmo Começando do Zero
        </h1>

        <p
          className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          O passo a passo completo para transformar a IA na sua principal fonte de renda —
          sem precisar de experiência técnica, sem enrolação, com resultados reais.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-brand text-primary-foreground font-heading font-bold px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-lg hover:opacity-90 active:scale-[0.98] transition-all animate-pulse-glow inline-flex items-center justify-center gap-2"
          >
            <span className="sm:hidden">Quero Começar</span>
            <span className="hidden sm:inline">Quero Começar a Lucrar com IA</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>

        {/* VSL Video */}
        <div
          className="max-w-3xl mx-auto mt-8 md:mt-12 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
            <video
              className="w-full h-full object-cover bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/videos/vsl.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          <p className="text-xs text-muted-foreground mt-3 opacity-70">▶ Assista o vídeo e entenda como funciona</p>
        </div>
      </div>
    </section>
  );
}
