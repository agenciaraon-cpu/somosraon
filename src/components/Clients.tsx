import { motion } from "motion/react";

export function Clients() {
  const images = Array.from({ length: 15 }, (_, i) => `/${i + 1}.png`);
  // Duplicamos as imagens 3 vezes para garantir um loop contínuo e suave
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="clientes">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900"
        >
          Clientes, Parceiros e Amigos
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded-full"
        ></motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden py-10">
        {/* Máscaras de gradiente para as bordas desaparecerem suavemente */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 items-center w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedImages.map((src, index) => (
            <div 
              key={index} 
              className="w-40 h-40 md:w-56 md:h-56 shrink-0 flex items-center justify-center bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={src} 
                alt={`Parceiro ${index + 1}`} 
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
