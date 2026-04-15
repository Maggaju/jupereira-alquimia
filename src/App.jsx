import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Mentoria from './pages/Mentoria'
import Perolas from './pages/Perolas'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'mentoria':
        return <Mentoria />
      case 'perolas':
        return <Perolas />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0f2e] to-[#0f0f0f]">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
