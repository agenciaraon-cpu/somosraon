import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bot, TrendingUp, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="inicio">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Transformamos empresas em negócios mais <span className="text-gradient">organizados, eficientes</span> e preparados para crescer.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Marketing. Inteligência Artificial. Tecnologia. <br className="hidden md:block" />
                <strong>Muito mais que uma agência.</strong> Somos especialistas em crescimento empresarial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5575988644742" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 hover:bg-orange-500 text-white rounded-full font-medium text-center flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20"
                >
                  Solicitar Diagnóstico <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5575988644742" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 text-slate-900 border border-slate-200 rounded-full font-medium text-center transition-all shadow-sm hover:shadow-md"
                >
                  Conhecer o Método
                </a>
              </div>
            </motion.div>
          </div>

          {/* Premium Illustration / Mockup area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract visual representation of dashboard, AI and marketing */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main floating card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-400">RAON Workspace</div>
                </div>
                <div className="p-8 grid gap-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">Crescimento de Receita</div>
                      <div className="text-3xl font-bold text-slate-900">+148%</div>
                    </div>
                    <div className="w-16 h-12 flex items-end gap-1">
                      {[40, 70, 50, 90, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="w-full bg-blue-500 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                      <Bot className="w-6 h-6 text-blue-600 mb-2" />
                      <div className="font-semibold text-slate-800">Automação IA</div>
                      <div className="text-xs text-slate-500 mt-1">Ativo e Otimizando</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                      <Zap className="w-6 h-6 text-purple-600 mb-2" />
                      <div className="font-semibold text-slate-800">Marketing</div>
                      <div className="text-xs text-slate-500 mt-1">Campanhas de Alta Conversão</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-16 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">ROI Positivo</div>
                  <div className="text-xs text-slate-500">Alvo alcançado</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Análise Preditiva</div>
                  <div className="text-xs text-slate-500">Baseada em IA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
