import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  const timeline = [
    { step: 1, title: "Diagnóstico Estratégico", color: "from-blue-500 to-cyan-500" },
    { step: 2, title: "Planejamento", color: "from-purple-500 to-indigo-500" },
    { step: 3, title: "Execução", color: "from-indigo-500 to-blue-500" },
    { step: 4, title: "Crescimento", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Como Funciona" subtitle="A Jornada do Crescimento" />

        <div className="mt-16 max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={item.step} className="relative flex items-center mb-12 last:mb-0">
              
              {/* Connecting line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-[2.25rem] top-16 bottom-[-3rem] w-0.5 bg-slate-100"></div>
              )}

              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`w-18 h-18 shrink-0 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 border-4 border-white`}
              >
                {item.step}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                className="ml-8 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex-grow"
              >
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
