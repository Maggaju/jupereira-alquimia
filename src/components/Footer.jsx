export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3d1a5c] to-[#1a7c6b] text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">© 2024 Ju Pereira | Alquimia Emocional</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-[#d4af37] transition-colors">YouTube</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#d4af37] transition-colors">WhatsApp</a>
        </div>
        <p className="mt-4 text-sm text-gray-300">
          "Sua dor não é um acaso. É a bússola que te leva de volta à sua própria luz."
        </p>
      </div>
    </footer>
  )
}
