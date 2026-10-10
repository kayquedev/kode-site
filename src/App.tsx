import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import KodeSaude from './pages/KodeSaude'
import KodeAps from './pages/KodeAps'
import KodeEndemias from './pages/KodeEndemias'
import Ferramentas from './pages/Ferramentas'
import QuemSomos from './pages/QuemSomos'
import SobreMim from './pages/SobreMim'
import Lgpd from './pages/Lgpd'
import Contato from './pages/Contato'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kode-saude" element={<KodeSaude />} />
          <Route path="/kode-aps" element={<KodeAps />} />
          <Route path="/kode-endemias" element={<KodeEndemias />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/lgpd" element={<Lgpd />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App