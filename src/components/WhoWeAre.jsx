import { FaBullseye, FaHandshake, FaGem, FaBolt, FaBalanceScale } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WhoWeAre = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [leftValuesRef, leftValuesVisible] = useScrollAnimation(0.2)
  const [centerRef, centerVisible] = useScrollAnimation(0.2)
  const [rightValuesRef, rightValuesVisible] = useScrollAnimation(0.2)
  const [statsRef, statsVisible] = useScrollAnimation(0.2)
  const values = [
    {
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in every case',
      icon: FaBullseye
    },
    {
      title: 'Trust',
      description: 'Building lasting relationships through reliable counsel',
      icon: FaHandshake
    },
    {
      title: 'Honesty',
      description: 'Transparent communication and straightforward advice',
      icon: FaGem
    },
    {
      title: 'Commitment',
      description: 'Dedicated advocacy for every client\'s unique needs',
      icon: FaBolt
    }
  ]

  return (
    <section id="about" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop"
          alt="Law Office Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-deep-black/80"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div ref={headerRef} className={`text-center mb-20 animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-block px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-6">
            <span className="text-gold-400 text-sm font-medium">About Our Firm</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold gold-text mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-off-white max-w-4xl mx-auto leading-relaxed">
            We are a distinguished law firm committed to providing exceptional legal services 
            across India. With decades of combined experience, our team delivers strategic 
            legal solutions while maintaining the highest standards of professional integrity 
            and client service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Values */}
          <div ref={leftValuesRef} className={`space-y-10 animate-on-scroll animate-left ${leftValuesVisible ? 'visible' : ''}`}>
            {values.slice(0, 2).map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-2xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold gold-text mb-3">{value.title}</h3>
                    <p className="text-off-white leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Justice Symbol */}
          <div ref={centerRef} className={`flex justify-center animate-on-scroll animate-scale ${centerVisible ? 'visible delay-1' : ''}`}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-400/30">
                <FaBalanceScale className="text-8xl text-gold-400" />
              </div>
              
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-400/20 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-gold-400/10"></div>
              <div className="absolute -inset-8 rounded-full border border-gold-400/5"></div>
            </div>
          </div>

          {/* Right Values */}
          <div ref={rightValuesRef} className={`space-y-10 animate-on-scroll animate-right ${rightValuesVisible ? 'visible delay-2' : ''}`}>
            {values.slice(2, 4).map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-l from-gold-400/5 to-transparent border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-2xl text-deep-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold gold-text mb-3">{value.title}</h3>
                    <p className="text-off-white leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className={`mt-20 grid md:grid-cols-4 gap-8 animate-on-scroll ${statsVisible ? 'visible delay-3' : ''}`}>
          {[
            { number: '25+', label: 'Years Experience' },
            { number: '1000+', label: 'Cases Handled' },
            { number: '98%', label: 'Success Rate' },
            { number: '50+', label: 'Legal Experts' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-b from-gold-400/10 to-transparent border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/40 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                <div className="text-4xl font-bold gold-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-off-white font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre