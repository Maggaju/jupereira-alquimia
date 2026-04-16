import { content } from '../data/content'

export default function Navigation({ currentPage, setCurrentPage, language, setLanguage }) {
  const t = content[language]

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'mentoria', label: t.nav.mentoria },
    { key: 'perolas', label: t.nav.perolas },
    { key: 'reiki', label: t.nav.reiki }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/85 backdrop-blur-md border-b border-[#10B981]/20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#8B5CF6] flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/10 to-[#10B981]/10">
              <span className="text-xl">🦅</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#10B981]">
                Magga Ju
              </h1>
              <p className="text-xs text-[#10B981] font-semibold">Alquimia Emocional</p>
            </div>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`font-semibold transition-all duration-300 ${
                  currentPage === item.key
                    ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6] pb-1'
                    : 'text-gray-700 hover:text-[#8B5CF6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'fr' : 'pt')}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#8B5CF6] border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition"
            >
              {t.nav.language}
            </button>
            <button className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-semibold hover:shadow-lg transition">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                currentPage === item.key
                  ? 'bg-[#8B5CF6] text-white'
                  : 'bg-white/50 text-gray-700 hover:bg-[#10B981]/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
