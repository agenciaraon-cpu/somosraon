import { motion } from "motion/react";
import { ArrowDown, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Execution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="A Diferença na Prática" subtitle="Execução" />

        <div className="mt-16 flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto">
          
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-slate-50 border border-slate-200 p-8 rounded-3xl opacity-80"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-500 mb-2">Consultorias Tradicionais</h3>
            </div>
            
            <div className="flex flex-col items-center justify-center h-48 bg-slate-100 rounded-2xl border border-slate-200">
              <AlertCircle className="w-8 h-8 text-slate-400 mb-4" />
              <p className="font-medium text-slate-600">Apontam problemas.</p>
              <p className="text-sm text-slate-500 mt-2">Deixam a execução para você.</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center shrink-0">
            <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
            <ArrowDown className="w-8 h-8 text-slate-300 md:hidden" />
          </div>

          {/* RAON */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl shadow-blue-900/20 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl font-bold">RAON</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              {['Analisa', 'Planeja', 'Executa', 'Acompanha', 'Resultados'].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0" />
                  <span className="font-medium text-lg">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
