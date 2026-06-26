import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Diagnostic() {
  const items = [
    "Auditoria de mídia paga",
    "Processo comercial",
    "Instagram",
    "Google",
    "Site",
    "Landing Pages",
    "WhatsApp",
    "Criativos",
    "SEO",
    "Concorrência",
    "Automações",
    "Inteligência Artificial",
    "Posicionamento Digital"
  ];

  return (
    <section className="py-24 bg-slate-50" id="diagnostico">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Diagnóstico Estratégico" subtitle="O que analisamos" />
        
        <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Realizamos um raio-X completo do seu negócio para entender exatamente onde estão as falhas e as maiores oportunidades de crescimento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-slate-700">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
