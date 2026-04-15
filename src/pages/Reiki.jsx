export default function Reiki() {
  const beneficios = [
    {
      titulo: "Harmonização Energética",
      descricao: "Equilibra os chakras e restaura o fluxo natural de energia vital do corpo."
    },
    {
      titulo: "Alívio do Estresse",
      descricao: "Reduz ansiedade, tensão e promove profundo relaxamento físico e mental."
    },
    {
      titulo: "Aceleração da Cura",
      descricao: "Potencializa o processo natural de cura do corpo em nível celular."
    },
    {
      titulo: "Clareza Mental",
      descricao: "Limpa a mente de ruídos emocionais, trazendo clareza e intuição."
    },
    {
      titulo: "Paz Interior",
      descricao: "Conecta você com sua Bússola Interna, restaurando a paz que já habita em você."
    },
    {
      titulo: "Transformação Emocional",
      descricao: "Trabalha em conjunto com a Alquimia Emocional para transmutação profunda."
    }
  ]

  const sessoes = [
    {
      nome: "Sessão Individual",
      duracao: "60 minutos",
      descricao: "Atendimento personalizado onde você recebe Reiki focado em suas necessidades específicas."
    },
    {
      nome: "Sessão Intensiva",
      duracao: "90 minutos",
      descricao: "Sessão aprofundada com trabalho energético completo e integração com a Alquimia Emocional."
    },
    {
      nome: "Pacote Mensal",
      duracao: "4 sessões",
      descricao: "Acompanhamento contínuo para transformação profunda e sustentável."
    }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 bg-gradient-to-r from-[#1a7c6b] to-[#2ba896] p-12 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Harmonie en Soi</h1>
          <p className="text-2xl text-gray-100 mb-4">Reiki Transformacional em Quebec</p>
          <p className="text-lg text-gray-200 max-w-3xl">
            Um espaço sagrado onde a energia universal se encontra com a Alquimia Emocional para restaurar sua harmonia interior e paz profunda.
          </p>
        </section>

        {/* O que é Reiki */}
        <section className="mb-16">
          <h2 className="section-title">O que é Reiki?</h2>
          <div className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#d4af37]">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Reiki é uma prática ancestral de cura energética que utiliza a <span className="text-[#d4af37] font-bold">energia universal</span> para harmonizar corpo, mente e espírito. A palavra Reiki significa "energia vital universal" em japonês.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              No espaço de <span className="text-[#2ba896] font-bold">Harmonie en Soi</span>, o Reiki não é apenas uma técnica de relaxamento. É um <span className="text-[#d4af37] font-bold">instrumento de transformação profunda</span> que trabalha em sinergia com a <span className="text-[#d4af37] font-bold">Alquimia Emocional</span>.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Enquanto a Alquimia Emocional trabalha a transformação das limitações mentais e emocionais, o Reiki trabalha a <span className="text-[#2ba896] font-bold">harmonização energética</span> que permite que essa transformação se manifeste no corpo físico e na realidade.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <h2 className="section-title">Benefícios do Reiki</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3d1a5c] to-[#1a0f2e] p-6 rounded-lg border-t-4 border-[#2ba896] hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-[#2ba896] mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-200 leading-relaxed">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tipos de Sessões */}
        <section className="mb-16">
          <h2 className="section-title">Sessões de Reiki</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessoes.map((sessao, index) => (
              <div key={index} className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#d4af37] hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-2">{sessao.nome}</h3>
                <p className="text-[#2ba896] font-semibold mb-4">{sessao.duracao}</p>
                <p className="text-gray-200 leading-relaxed">{sessao.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A Sinergia */}
        <section className="mb-16">
          <h2 className="section-title">A Sinergia: Reiki + Alquimia Emocional</h2>
          <div className="bg-gradient-to-r from-[#3d1a5c] via-[#1a7c6b] to-[#1a0f2e] p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Alquimia Emocional</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-[#d4af37] mr-3">✨</span>
                    <span>Transforma padrões mentais limitantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4af37] mr-3">✨</span>
                    <span>Trabalha a raiz emocional dos bloqueios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4af37] mr-3">✨</span>
                    <span>Restaura a Bússola Interna</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2ba896] mb-4">Reiki</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-[#2ba896] mr-3">✨</span>
                    <span>Harmoniza a energia vital do corpo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ba896] mr-3">✨</span>
                    <span>Facilita a manifestação física da transformação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ba896] mr-3">✨</span>
                    <span>Traz paz e equilíbrio ao sistema energético</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-lg text-[#e8c547] font-bold mt-8">
              Juntas, essas práticas criam uma transformação completa: mente, corpo e espírito em harmonia.
            </p>
          </div>
        </section>

        {/* Sobre o Espaço */}
        <section className="mb-16">
          <h2 className="section-title">Harmonie en Soi - Quebec</h2>
          <div className="bg-[#1a0f2e] p-8 rounded-lg border-l-4 border-[#2ba896]">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              <span className="text-[#2ba896] font-bold">Harmonie en Soi</span> é um espaço dedicado à cura e transformação em Quebec. Um ambiente acolhedor e sagrado onde você é recebido com amor, onde sua história é honrada e sua jornada de cura é respeitada.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Aqui, você não é apenas um cliente. Você é um ser em transformação, um co-criador da sua própria realidade, um jardineiro do seu próprio Jardim Alquímico.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Cada sessão de Reiki é uma oportunidade de se reconectar com a paz que já habita em você, de restaurar a harmonia que é seu direito divino.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#2ba896] to-[#1a7c6b] text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-lg">
            Agendar Sessão de Reiki
          </button>
          <p className="text-gray-300 mt-4">Quebec, Canada | Sessões Presenciais e Online</p>
        </div>
      </div>
    </div>
  )
}
