import { motion } from "motion/react";
import { Megaphone, Code2, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const categories = [
    {
      title: "Marketing",
      icon: <Megaphone className="w-8 h-8 text-blue-500" />,
      items: [
        "Gestão de Tráfego Pago",
        "Meta Ads",
        "Google Ads",
        "SEO",
        "Branding",
        "Gestão de Redes Sociais",
        "Google Meu Negócio",
        "Copywriting",
        "Planejamento Estratégico"
      ],
      bg: "bg-blue-50/50",
      border: "border-blue-100"
    },
    {
      title: "Tecnologia",
      icon: <Code2 className="w-8 h-8 text-indigo-500" />,
      items: [
        "Sites Profissionais",
        "Landing Pages",
        "Aplicativos",
        "Sistemas Empresariais",
        "Automação",
        "Integrações"
      ],
      bg: "bg-indigo-50/50",
      border: "border-indigo-100"
    },
    {
      title: "Inteligência Artificial",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      items: [
        "IA para Atendimento",
        "IA para Marketing",
        "IA para Vendas",
        "IA para Empresas",
        "Criação de Conteúdo",
        "Automações Inteligentes",
        "Google AI Studio",
        "ChatGPT"
      ],
      bg: "bg-purple-50/50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title={<span className="text-white">Nossas Soluções</span>} 
          subtitle="O que fazemos" 
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:bg-slate-800/80 transition-colors"
            >
              <div className={`w-16 h-16 rounded-2xl ${category.bg} flex items-center justify-center mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
