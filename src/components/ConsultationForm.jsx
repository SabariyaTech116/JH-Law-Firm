import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ConsultationForm = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [formRef, formVisible] = useScrollAnimation(0.1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className={`text-center mb-12 animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold gold-text mb-6">
              Request a Free Consultation
            </h2>
            <p className="text-lg text-off-white">
              Get expert legal advice tailored to your specific needs
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 animate-on-scroll animate-blur ${formVisible ? 'visible delay-2' : ''}`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-off-white mb-2 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-off-white mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-off-white mb-2 font-medium">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-off-white mb-2 font-medium">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="civil-litigation">Civil Litigation</option>
                  <option value="corporate-law">Corporate Law</option>
                  <option value="family-law">Family Law</option>
                  <option value="criminal-law">Criminal Law</option>
                  <option value="property-law">Property Law</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-off-white mb-2 font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors resize-none"
                placeholder="Please describe your legal matter in detail..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gold-gradient text-deep-black font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm