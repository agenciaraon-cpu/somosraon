import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ForWhom() {
  const items = [
    "Vender mais.",
    "Automatizar processos.",
    "Melhorar atendimento.",
    "Fortalecer sua marca.",
    "Implementar Inteligência Artificial.",
    "Organizar processos.",
    "Crescer."
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Para quem é a RAON
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400"
          >
            Nossas soluções são desenhadas para empresas que desejam:
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 py-3 px-6 rounded-full flex items-center gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-slate-200">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
