import { FaUserTie, FaBullseye, FaBalanceScale, FaTrophy } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhyChooseUs = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1)
  const reasons = [
    {
      title: 'Experienced Advocates',
      description: 'Our senior advocates bring decades of courtroom experience and deep legal expertise across multiple jurisdictions.',
      icon: FaUserTie
    },
    {
      title: 'Client-First Approach',
      description: 'Every strategy is tailored to your specific needs, ensuring personalized attention and optimal outcomes.',
      icon: FaBullseye
    },
    {
      title: 'Ethical Practice',
      description: 'We maintain the highest standards of professional conduct, ensuring transparent and honest legal representation.',
      icon: FaBalanceScale
    },
    {
      title: 'Proven Track Record',
      description: 'Our consistent success rate and satisfied clients demonstrate our commitment to achieving favorable results.',
      icon: FaTrophy
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container-max section-padding">
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold gold-text mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-off-white max-w-3xl mx-auto">
            Distinguished by our unwavering commitment to excellence and client success
          </p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll animate-scale ${cardsVisible ? 'visible' : ''}`}>
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div 
                key={index} 
                className={`bg-deep-black border border-gold-400/20 p-8 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 animate-on-scroll animate-blur ${cardsVisible ? `visible delay-${index + 1}` : ''}`}
              >
                <IconComponent className="text-4xl mb-6 text-gold-400 mx-auto" />
                <h3 className="text-xl font-semibold gold-text mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-off-white text-center leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs