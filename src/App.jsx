import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Mentoria from './pages/Mentoria'
import Perolas from './pages/Perolas'
import Reiki from './pages/Reiki'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [language, setLanguage] = useState('pt')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home language={language} />
      case 'about':
        return <About language={language} />
      case 'mentoria':
        return <Mentoria language={language} />
      case 'perolas':
        return <Perolas language={language} />
      case 'reiki':
        return <Reiki language={language} />
      default:
        return <Home language={language} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF8] via-[#F5F3F0] to-[#FAFAF8]">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
