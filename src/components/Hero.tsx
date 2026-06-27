import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bot, TrendingUp, Zap, Instagram, Facebook, Linkedin, Mail, Globe } from "lucide-react";

const socialIcons = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, color: 'text-pink-500', bg: 'bg-pink-100' },
  { name: 'Google', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>, color: 'text-red-500', bg: 'bg-red-100' },
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'TikTok', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.95-.54 3.92-1.76 5.43-1.46 1.81-3.7 2.87-6.02 2.91-2.9.04-5.83-1.33-7.39-3.79-1.28-2.01-1.57-4.52-.75-6.68.8-2.11 2.51-3.83 4.61-4.55 1.53-.52 3.23-.52 4.75-.12v4.06c-.84-.26-1.78-.29-2.65-.07-.86.22-1.64.76-2.13 1.49-.66.98-.82 2.29-.4 3.39.42 1.1 1.39 1.9 2.56 2.12 1.54.29 3.25-.33 4.09-1.65.65-1.02.93-2.27.93-3.48 0-5.59-.02-11.17-.02-16.76z"/></svg>, color: 'text-slate-900', bg: 'bg-slate-200' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'Email', icon: <Mail className="w-5 h-5" />, color: 'text-amber-500', bg: 'bg-amber-100' },
  { name: 'IA', icon: <Bot className="w-5 h-5" />, color: 'text-purple-500', bg: 'bg-purple-100' },
  { name: 'Site', icon: <Globe className="w-5 h-5" />, color: 'text-teal-500', bg: 'bg-teal-100' },
];

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
                  Falar com um atendente <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="https://raon360.lovable.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 text-slate-900 border border-slate-200 rounded-full font-medium text-center transition-all shadow-sm hover:shadow-md"
                >
                  Quero conhecer o método Raon 360
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
            {/* Glowing Rocket and Orbiting Social Media Icons */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

              {/* Orbit Rings */}
              <div className="absolute w-[70%] h-[70%] rounded-full border border-blue-500/20 border-dashed pointer-events-none animate-[spin_30s_linear_infinite_reverse]"></div>
              <div className="absolute w-[95%] h-[95%] rounded-full border border-purple-500/20 border-dashed pointer-events-none animate-[spin_40s_linear_infinite]"></div>

              {/* Central Rocket */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10 w-40 h-40 drop-shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#rocketGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <defs>
                    <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#f97316" fillOpacity="0.2" />
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="url(#rocketGrad)" fillOpacity="0.2" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </motion.div>

              {/* Orbiting Icons Container */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {socialIcons.map((social, idx) => {
                  const total = socialIcons.length;
                  const angle = (idx * (360 / total)) * (Math.PI / 180);
                  // Alternate between inner and outer orbit radius
                  const radius = idx % 2 === 0 ? 35 : 47.5; 
                  
                  const left = `calc(50% + ${Math.cos(angle) * radius}% - 24px)`;
                  const top = `calc(50% + ${Math.sin(angle) * radius}% - 24px)`;

                  return (
                    <motion.div
                      key={social.name}
                      style={{ left, top }}
                      className="absolute"
                      // Counter-rotate the icons so they stay upright
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        className={`w-12 h-12 rounded-full ${social.bg} ${social.color} shadow-lg shadow-${social.color.replace('text-', '')}/30 border border-white/50 flex items-center justify-center backdrop-blur-md pointer-events-auto cursor-pointer hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
                        title={social.name}
                      >
                        {social.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
