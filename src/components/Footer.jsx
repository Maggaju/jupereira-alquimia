import { content } from '../data/content'

export default function Footer({ language = 'pt' }) {
  const t = content[language]

  return (
    <footer className="bg-gradient-to-r from-[#8B5CF6]/5 via-[#10B981]/5 to-[#D4AF37]/5 border-t border-[#10B981]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#8B5CF6] flex items-center justify-center">
                <span className="text-lg">🦅</span>
              </div>
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#10B981]">
                Magga Ju
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {language === 'pt'
                ? 'Transformando vidas através da Alquimia Emocional. Bem-vindo ao Jardim Alquímico, onde plantamos conhecimento e colhemos paz.'
                : 'Transformer les vies par l\'Alchimie Émotionnelle. Bienvenue au Jardin Alchimique, où nous plantons la connaissance et récoltons la paix.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#8B5CF6] mb-4">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#8B5CF6] transition">Início</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition">{language === 'pt' ? 'Sobre' : 'À Propos'}</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition">{language === 'pt' ? 'Mentoria' : 'Mentorat'}</a></li>
              <li><a href="#" className="hover:text-[#8B5CF6] transition">Reiki</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#10B981] mb-4">
              {language === 'pt' ? 'Serviços' : 'Services'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#10B981] transition">{language === 'pt' ? 'Mentoria' : 'Mentorat'}</a></li>
              <li><a href="#" className="hover:text-[#10B981] transition">Reiki</a></li>
              <li><a href="#" className="hover:text-[#10B981] transition">{language === 'pt' ? 'Consulta' : 'Consultation'}</a></li>
              <li><a href="#" className="hover:text-[#10B981] transition">{language === 'pt' ? 'Workshop' : 'Atelier'}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 <a href="mailto:contato@maggaju.com" className="hover:text-[#D4AF37] transition">contato@maggaju.com</a></li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 Quebec, Canadá</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a href="#" className="text-[#8B5CF6] hover:opacity-70">f</a>
                  <a href="#" className="text-[#8B5CF6] hover:opacity-70">ig</a>
                  <a href="#" className="text-[#8B5CF6] hover:opacity-70">yt</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-[#8B5CF6] font-semibold italic mb-4">
            {language === 'pt'
              ? '✨ Bem-vindo ao Jardim Alquímico, onde plantamos conhecimento e colhemos paz ✨'
              : '✨ Bienvenue au Jardin Alchimique, où nous plantons la connaissance et récoltons la paix ✨'}
          </p>
          <p className="text-gray-600 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
