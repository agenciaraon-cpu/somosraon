import { motion } from "motion/react";
import { CheckCircle2, Search, Target, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Method() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Diagnóstico",
      description: "Analisamos profundamente o cenário atual, identificando gargalos e oportunidades."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Estratégia",
      description: "Desenhamos um plano de ação claro, com metas definidas e tecnologia aplicada."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Execução",
      description: "Implementamos as soluções propostas acompanhando cada métrica de perto."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="metodo">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Não somos apenas uma agência.<br />
            <span className="text-blue-600">Somos parceiros estratégicos.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Enquanto outras empresas apenas entregam campanhas, a RAON: 
            <strong> Analisa. Planeja. Executa. Acompanha.</strong>
          </motion.p>
        </div>

        <SectionHeading title="MÉTODO RAON 360°" subtitle="Como Trabalhamos" />

        <div className="grid md:grid-cols-3 gap-8 relative mt-12">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center text-2xl font-medium text-slate-700 italic"
        >
          "Nós analisamos, planejamos e <span className="text-blue-600 font-bold not-italic">também executamos.</span>"
        </motion.div>

      </div>
    </section>
  );
}
