import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const names = [
  "Maria S.", "João P.", "Ana C.", "Carlos M.", "Fernanda L.",
  "Ricardo T.", "Juliana B.", "Pedro H.", "Camila R.", "Lucas F.",
  "Patrícia A.", "Bruno G.", "Larissa N.", "Diego V.", "Tatiana O.",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba",
  "Salvador", "Fortaleza", "Brasília", "Recife", "Porto Alegre",
];

export default function SocialProofNotification() {
  const [notification, setNotification] = useState<{ name: string; city: string; key: number } | null>(null);

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ name, city, key: Date.now() });
      setTimeout(() => setNotification(null), 4000);
    };

    const initial = setTimeout(show, 5000);
    const interval = setInterval(show, 15000 + Math.random() * 10000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  if (!notification) return null;

  return (
    <div
      key={notification.key}
      className="fixed bottom-4 left-4 z-40 bg-card border border-border rounded-lg p-3 md:p-4 shadow-lg animate-notification-slide max-w-[280px] md:max-w-xs"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-4 h-4 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs md:text-sm font-semibold text-foreground">{notification.name}</p>
          <p className="text-xs text-muted-foreground">
            Comprou agora • {notification.city}
          </p>
        </div>
      </div>
    </div>
  );
}
