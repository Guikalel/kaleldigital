import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const DURATION = 2 * 60 * 60; // 2 hours in seconds

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem("countdown-end");
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return remaining;
    }
    const end = Date.now() + DURATION * 1000;
    sessionStorage.setItem("countdown-end", end.toString());
    return DURATION;
  });

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-brand py-2 px-4 text-center">
      <div className="flex items-center justify-center gap-2 text-primary-foreground font-heading">
        <Clock className="w-4 h-4" />
        <span className="text-xs md:text-sm font-semibold">
          OFERTA EXPIRA EM: {pad(h)}:{pad(m)}:{pad(s)}
        </span>
      </div>
    </div>
  );
}
