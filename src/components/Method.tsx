import { motion } from "motion/react";
import { CheckCircle2, Search, Target, Rocket, ArrowRight } from "lucide-react";

export function Method() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Diagnóstico",
      description: "Analisamos profundamente o cenário atual, identificando gargalos e oportunidades ocultas."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estratégia",
      description: "Desenhamos um plano de ação claro, com metas definidas e tecnologia aplicada."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Execução",
      description: "Implementamos as soluções propostas acompanhando cada métrica de perto."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="metodo">
      {/* Dark background, vibrant accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Nosso Diferencial
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">MÉTODO RAON 360°</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300"
          >
            Não somos apenas uma agência. Somos parceiros estratégicos.
            <strong> Analisamos. Planejamos. Executamos. Acompanhamos.</strong>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mt-16">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 z-0 opacity-50"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-blue-500/50"
            >
              <div className="w-24 h-24 bg-slate-900/50 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner border border-slate-700 group-hover:border-blue-400">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center text-2xl font-medium text-slate-300 italic mb-12"
        >
          "Nós analisamos, planejamos e <span className="text-orange-400 font-bold not-italic">também executamos.</span>"
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a 
            href="https://raon360.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-full transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105 hover:shadow-2xl"
          >
            Clique aqui para conhecer mais sobre este método <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
