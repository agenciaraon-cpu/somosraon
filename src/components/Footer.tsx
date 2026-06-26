import { Instagram, MapPin, MessageCircle, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="text-2xl font-heading font-bold text-white tracking-tight mb-4">
            RAON<span className="text-blue-500">.</span>
          </div>
          <p className="text-sm mb-6">
            Marketing, IA & Tecnologia
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/5575988644742" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/somosraon" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://somosraon.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Site">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Method */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Método RAON 360°</h4>
          <div className="flex gap-4 mb-4 text-sm font-medium">
            <span className="text-blue-400">Diagnóstico.</span>
            <span className="text-purple-400">Estratégia.</span>
            <span className="text-indigo-400">Execução.</span>
          </div>
          <p className="text-slate-500 italic text-sm border-l-2 border-slate-800 pl-4 py-1">
            "Nós analisamos, planejamos e também executamos."
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contatos</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="https://wa.me/5575988644742" className="flex items-center gap-3 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" /> (75) 98864-4742
              </a>
            </li>
            <li>
              <a href="https://instagram.com/somosraon" className="flex items-center gap-3 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" /> @somosraon
              </a>
            </li>
            <li>
              <a href="https://somosraon.netlify.app" className="flex items-center gap-3 hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> somosraon.netlify.app
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} RAON - Consultoria em Marketing, IA & Tecnologia. Todos os direitos reservados.</p>
        <p>Desenvolvido com excelência.</p>
      </div>
    </footer>
  );
}
