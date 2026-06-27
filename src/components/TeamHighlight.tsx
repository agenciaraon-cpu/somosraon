import { motion } from "motion/react";
import { Users, Palette, Trophy, Sparkles } from "lucide-react";

export function TeamHighlight() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Profissionais de Elite",
      description:
        "Uma equipe completa e altamente qualificada, pronta para atender todas as demandas do seu negócio com excelência.",
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      title: "Design de Alto Nível",
      description:
        "Criamos as melhores e mais impactantes identidades visuais que destacam sua marca no mercado.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
      title: "Foco em Resultados",
      description:
        "Trabalhamos com estratégias validadas para garantir que cada ação se transforme em lucro para você.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      title: "Suporte Dedicado",
      description:
        "Nosso time está sempre disponível para acompanhar, otimizar e escalar o seu crescimento.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="equipe">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nossa Agência
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Um time completo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                pronto para escalar
              </span>{" "}
              o seu negócio.
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Não somos apenas prestadores de serviço, somos parceiros de
              crescimento. Contamos com os melhores profissionais do mercado e
              entregamos designs de altíssimo padrão.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Animated floating elements behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400/20 via-purple-400/20 to-blue-400/20 rounded-[2.5rem] blur-2xl animate-pulse"></div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl shadow-slate-900/10"
            >
              <img
                src="/agency-team.jpg"
                alt="Equipe Criativa RAON"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Team"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Equipe Premium
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
