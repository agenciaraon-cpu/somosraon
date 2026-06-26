import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
                  <div className="text-slate-600 font-medium">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">Nacional</div>
                  <div className="text-slate-600 font-medium">Atuação em todo Brasil</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-lg text-slate-700 italic">
                  "Nosso compromisso é entregar resultados através de processos inteligentes e tecnologia de ponta."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading title="Quem somos" subtitle="Sobre a RAON" centered={false} />
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                A RAON é uma empresa com mais de 6 anos de experiência no mercado, atuando em projetos de Marketing, Posicionamento Digital, Tecnologia e Inteligência Artificial para empresas de diferentes portes e segmentos em todo o Brasil.
              </p>
              <p>
                Ao longo dessa trajetória, acumulamos experiência prática desenvolvendo estratégias personalizadas para empresas que desejam crescer, organizar seus processos e modernizar seus negócios.
              </p>
              <p className="font-medium text-slate-900">
                Atuamos em todo o território nacional.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
