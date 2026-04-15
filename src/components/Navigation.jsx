export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'mentoria', label: 'Mentoria' },
    { id: 'perolas', label: 'Pérolas de Milagres' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#3d1a5c] to-[#1a7c6b] shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Ju Pereira</div>
        <ul className="flex gap-8">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`transition-all duration-300 font-semibold ${
                  currentPage === item.id 
                    ? 'text-[#d4af37] border-b-2 border-[#d4af37]' 
                    : 'text-white hover:text-[#d4af37]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
