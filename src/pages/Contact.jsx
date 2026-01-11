import ContactInfoStrip from '../components/ContactInfoStrip'
import ConsultationForm from '../components/ConsultationForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="page-padding bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Modern Office Building"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-deep-black/70"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-8">
              <span className="text-gold-400 text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif font-bold gold-text mb-10">
              Contact Us
            </h1>
            <p className="text-2xl text-off-white max-w-4xl mx-auto leading-relaxed">
              Get in touch with our legal experts for professional consultation 
              and personalized legal solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="page-padding bg-gradient-to-b from-deep-black to-gray-900">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-serif font-bold gold-text mb-8">Get in Touch</h2>
                <p className="text-xl text-off-white leading-relaxed mb-12">
                  Ready to discuss your legal matter? Our experienced team is here to help 
                  you navigate complex legal challenges with confidence.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt className="text-xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-3">Office Address</h3>
                    <p className="text-off-white leading-relaxed text-lg">
                      123 Legal Complex, Connaught Place<br />
                      New Delhi - 110001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaPhone className="text-xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-3">Phone Numbers</h3>
                    <p className="text-off-white text-lg">
                      +91 11 2345 6789<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-3">Email</h3>
                    <p className="text-off-white text-lg">
                      contact@sharmaassociates.in<br />
                      info@sharmaassociates.in
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaClock className="text-xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold gold-text mb-3">Office Hours</h3>
                    <p className="text-off-white text-lg">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-b from-gray-900/50 to-deep-black border border-gold-400/20 rounded-2xl p-10 backdrop-blur-sm">
                <h2 className="text-3xl font-serif font-bold gold-text mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-off-white mb-3 font-medium">Your Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 bg-deep-black/50 border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-off-white mb-3 font-medium">Your Email *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-6 py-4 bg-deep-black/50 border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-off-white mb-3 font-medium">Subject *</label>
                    <input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      className="w-full px-6 py-4 bg-deep-black/50 border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-off-white mb-3 font-medium">Your Message *</label>
                    <textarea
                      rows={6}
                      placeholder="Please describe your legal matter in detail..."
                      className="w-full px-6 py-4 bg-deep-black/50 border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors resize-none rounded-xl"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-gradient text-deep-black font-semibold text-lg hover:opacity-90 transition-opacity rounded-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoStrip />
      <ConsultationForm />

      {/* CTA Section */}
      <section className="page-padding bg-deep-black relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
            alt="Professional Meeting"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-deep-black/80"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-3xl p-12">
              <FaCalendarAlt className="text-5xl text-gold-400 mx-auto mb-6" />
              <h2 className="text-4xl font-serif font-bold gold-text mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-xl text-off-white mb-8 leading-relaxed">
                Ready to discuss your legal matter? Schedule a consultation with our experienced legal team 
                and take the first step towards resolving your legal challenges.
              </p>
              <button className="px-12 py-4 bg-gold-gradient text-deep-black font-semibold text-xl hover:opacity-90 transition-opacity rounded-xl">
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact