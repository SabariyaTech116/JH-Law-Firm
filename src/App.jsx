import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import PracticeAreas from './pages/PracticeAreas'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FamilyLaw from './pages/FamilyLaw'
import CivilLaw from './pages/CivilLaw'
import CriminalLaw from './pages/CriminalLaw'

function App() {
  console.log('App.jsx: rendering');
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-deep-black">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/civil-law" element={<CivilLaw />} />
            <Route path="/criminal-law" element={<CriminalLaw />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App