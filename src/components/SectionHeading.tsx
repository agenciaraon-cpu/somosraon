import { motion } from "motion/react";

interface Props {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: Props) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
