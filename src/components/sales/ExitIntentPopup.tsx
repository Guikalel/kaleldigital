import { useEffect, useState } from "react";
import { X, Shield } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/meta-pixel";

const CTA_LINK = "https://pay.wiapy.com/zd--basAsV";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) setShow(true);
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  const close = () => { setShow(false); setDismissed(true); };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={close}>
      <div
        className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-md w-full relative animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center space-y-4">
          <p className="text-3xl">⚡</p>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight">
            Espere! Você está prestes a perder essa oportunidade
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Por apenas <span className="text-secondary font-bold">R$ 19,90</span>, você pode transformar sua vida com IA. Essa oferta pode não estar disponível amanhã.
          </p>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="block w-full bg-gradient-brand text-primary-foreground font-heading font-bold py-3 md:py-4 rounded-lg text-sm md:text-base hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Quero Garantir Agora
          </a>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-3 h-3" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
}
