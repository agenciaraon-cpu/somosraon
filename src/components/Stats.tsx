import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

function Counter({ from = 0, to, duration = 2, suffix = "", text }: { from?: number, to: number, duration?: number, suffix?: string, text: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-heading tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-slate-500 font-medium">{text}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Counter to={6} suffix="+" text="Anos de experiência" />
          <Counter to={100} suffix="%" text="Projetos personalizados" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-heading tracking-tight">
              Brasil
            </div>
            <div className="text-slate-500 font-medium">Atuação nacional</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-heading tracking-tight">
              360°
            </div>
            <div className="text-slate-500 font-medium">Método próprio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
