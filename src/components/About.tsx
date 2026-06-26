import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="py-24 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl transform -rotate-3 scale-105 -z-10 blur-sm opacity-50"></div>
            <img 
              src="/sobre-raon.png" 
              alt="Sobre a RAON - 6+ Anos de Experiência" 
              className="w-full max-w-md h-auto object-contain rounded-2xl drop-shadow-2xl"
            />
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
