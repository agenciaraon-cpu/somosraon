import { motion } from "motion/react";
import { Star, MapPin, Target, Cpu, Users, Zap, HeadphonesIcon, Megaphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function WhyChoose() {
  const reasons = [
    { icon: <Star className="w-6 h-6" />, title: "Mais de 6 anos de experiência" },
    { icon: <MapPin className="w-6 h-6" />, title: "Atuação Nacional" },
    { icon: <Megaphone className="w-6 h-6" />, title: "Marketing" },
    { icon: <Zap className="w-6 h-6" />, title: "Tecnologia" },
    { icon: <Cpu className="w-6 h-6" />, title: "Inteligência Artificial" },
    { icon: <Users className="w-6 h-6" />, title: "Equipe Especializada" },
    { icon: <Target className="w-6 h-6" />, title: "Execução Completa" },
    { icon: <HeadphonesIcon className="w-6 h-6" />, title: "Suporte Estratégico" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Por que escolher a RAON" subtitle="Diferenciais" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h4 className="font-semibold text-slate-800 leading-tight">
                {reason.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
