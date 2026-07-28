import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bot, TrendingUp, Zap, Instagram, Facebook, Linkedin, Mail, Globe, Heart, ThumbsUp, Share2 } from "lucide-react";

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

              {/* Central Premium SVG Rocket */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [-40, -38, -40] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10 w-72 h-72 drop-shadow-[0_20px_50px_rgba(59,130,246,0.6)] flex items-center justify-center -translate-x-12 -translate-y-8"
              >
                {/* Twinkling Stars Around Rocket */}
                <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-10 left-10 w-3 h-3 bg-yellow-200 rounded-full blur-[1px] shadow-[0_0_15px_#fef08a]" />
                <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-32 right-4 w-4 h-4 bg-blue-200 rounded-full blur-[1px] shadow-[0_0_20px_#bfdbfe]" />
                <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="absolute top-32 right-12 w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#ffffff]" />
                <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }} className="absolute -bottom-4 left-16 w-3 h-3 bg-purple-300 rounded-full blur-[1px] shadow-[0_0_15px_#d8b4fe]" />

                {/* Animated Fire Exhaust */}
                <motion.div 
                  animate={{ height: ["40%", "70%", "40%"], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-20 bg-gradient-to-b from-orange-400 via-red-500 to-transparent blur-xl rounded-b-full origin-top z-0"
                ></motion.div>
                
                <motion.div 
                  animate={{ height: ["30%", "60%", "30%"], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent blur-md rounded-b-full origin-top z-0"
                ></motion.div>

                {/* Premium SVG Rocket Body */}
                <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <linearGradient id="finRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="noseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>

                  {/* Thruster Base */}
                  <path d="M 85 140 L 115 140 L 120 155 L 80 155 Z" fill="#475569" />
                  
                  {/* Left Fin */}
                  <path d="M 70 110 Q 40 140 25 160 Q 60 155 75 135 Z" fill="url(#finGrad)" />
                  {/* Right Fin */}
                  <path d="M 130 110 Q 160 140 175 160 Q 140 155 125 135 Z" fill="url(#finRightGrad)" />
                  {/* Center Fin */}
                  <path d="M 100 120 L 95 165 L 105 165 Z" fill="url(#finGrad)" />
                  
                  {/* Rocket Body */}
                  <path d="M 100 25 Q 135 60 135 120 C 135 135 125 145 100 145 C 75 145 65 135 65 120 Q 65 60 100 25 Z" fill="url(#bodyGrad)" />
                  
                  {/* Nose Cone */}
                  <path d="M 100 25 Q 115 42 122 55 L 78 55 Q 85 42 100 25 Z" fill="url(#noseGrad)" />
                  <path d="M 78 55 L 122 55 L 122 60 L 78 60 Z" fill="#cbd5e1" />

                  {/* Window */}
                  <circle cx="100" cy="80" r="18" fill="#94a3b8" />
                  <circle cx="100" cy="80" r="14" fill="url(#windowGrad)" />
                  {/* Window Highlight */}
                  <path d="M 92 72 Q 100 68 108 72 Q 104 80 92 82" fill="#ffffff" opacity="0.6" />
                  
                  {/* Body Highlights/Details */}
                  <path d="M 100 25 Q 130 60 130 120 C 130 135 125 140 100 145" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
                  <circle cx="100" cy="115" r="3" fill="#cbd5e1" />
                  <circle cx="100" cy="125" r="3" fill="#cbd5e1" />
                </svg>
              </motion.div>

              {/* Floating Engagement Buttons */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 -right-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-pink-100 flex items-center gap-2 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
              >
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                <span className="text-sm font-bold text-slate-800">10.4k</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-10 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-blue-100 flex items-center gap-2 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
              >
                <ThumbsUp className="w-5 h-5 text-blue-500 fill-blue-500" />
                <span className="text-sm font-bold text-slate-800">+1.2k</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-4 right-0 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-purple-100 flex items-center gap-2 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
              >
                <Share2 className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-bold text-slate-800">Compartilhar</span>
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
