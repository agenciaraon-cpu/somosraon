import { motion } from "motion/react";
import { Megaphone, Code2, Cpu, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const categories = [
    {
      title: "Marketing Estratégico",
      description: "Ampliamos sua presença digital e maximizamos suas vendas com estratégias validadas e alta performance.",
      icon: <Megaphone className="w-8 h-8 text-blue-400" />,
      items: [
        "Gestão de Tráfego Pago",
        "Meta Ads & Google Ads",
        "Estratégias de SEO",
        "Branding e Posicionamento",
        "Gestão de Redes Sociais",
        "Google Meu Negócio",
        "Copywriting Persuasivo",
        "Planejamento Estratégico"
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
      borderHover: "hover:border-blue-500/50",
      shadowHover: "hover:shadow-blue-500/20"
    },
    {
      title: "Desenvolvimento & Tech",
      description: "Criamos plataformas rápidas, seguras e focadas em converter visitantes em clientes reais.",
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      items: [
        "Sites Profissionais ⚡",
        "Landing Pages de Alta Conversão",
        "Desenvolvimento de Aplicativos",
        "Sistemas Empresariais",
        "Automação de Processos",
        "Integrações de API"
      ],
      gradient: "from-indigo-600/20 to-purple-600/20",
      borderHover: "hover:border-indigo-500/50",
      shadowHover: "hover:shadow-indigo-500/20"
    },
    {
      title: "Inteligência Artificial",
      description: "Revolucionamos seu negócio aplicando o poder da IA para automatizar, prever e escalar resultados.",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      items: [
        "IA para Atendimento (Chatbots)",
        "IA para Marketing & Vendas",
        "Integração de IA para Empresas",
        "Geração de Conteúdo Automatizada",
        "Automações Inteligentes",
        "Google AI Studio",
        "Especialistas em ChatGPT"
      ],
      gradient: "from-purple-600/20 to-pink-600/20",
      borderHover: "hover:border-purple-500/50",
      shadowHover: "hover:shadow-purple-500/20"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="servicos">
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title={<span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Nossas Soluções</span>} 
          subtitle="O que fazemos com excelência" 
        />
        <p className="text-center text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
          Muito além do básico. Entregamos um ecossistema completo de soluções projetado para acelerar o crescimento da sua empresa na era digital.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative group bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 transition-all duration-500 ${category.borderHover} hover:shadow-2xl ${category.shadowHover} hover:-translate-y-2 overflow-hidden`}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed min-h-[60px]">
                  {category.description}
                </p>
                
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                      <span className="font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
