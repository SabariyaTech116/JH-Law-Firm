import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-deep-black/95 backdrop-blur-sm border-b border-gold-400/20 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="JH Law Firm" className="h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-off-white hover:text-gold-400 transition-colors">Home</Link>
            <Link to="/about" className="text-off-white hover:text-gold-400 transition-colors">About</Link>
            <Link to="/services" className="text-off-white hover:text-gold-400 transition-colors">Services</Link>
            <Link to="/practice-areas" className="text-off-white hover:text-gold-400 transition-colors">Practice Areas</Link>
            <Link to="/blog" className="text-off-white hover:text-gold-400 transition-colors">Blog</Link>
            <Link to="/contact" className="text-off-white hover:text-gold-400 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-black transition-all duration-300">
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-gold-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-400/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-off-white hover:text-gold-400 transition-colors">Home</Link>
              <Link to="/about" className="text-off-white hover:text-gold-400 transition-colors">About</Link>
              <Link to="/services" className="text-off-white hover:text-gold-400 transition-colors">Services</Link>
              <Link to="/practice-areas" className="text-off-white hover:text-gold-400 transition-colors">Practice Areas</Link>
              <Link to="/blog" className="text-off-white hover:text-gold-400 transition-colors">Blog</Link>
              <Link to="/contact" className="text-off-white hover:text-gold-400 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header