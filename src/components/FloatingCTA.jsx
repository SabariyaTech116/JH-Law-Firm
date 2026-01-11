import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const FloatingCTA = () => {
  const handleCall = () => {
    window.open('tel:+911123456789', '_self')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/911123456789?text=Hello, I need legal consultation', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group w-16 h-16 bg-gold-gradient hover:opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
      >
        <FaWhatsapp className="text-deep-black text-2xl group-hover:scale-110 transition-transform" />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="group w-16 h-16 bg-gold-gradient hover:opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <FaPhone className="text-deep-black text-xl group-hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}

export default FloatingCTA