import MeetOurLawyers from '../components/MeetOurLawyers'
import { FaAward, FaUsers, FaBalanceScale, FaHandshake } from 'react-icons/fa'

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="page-padding bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
            alt="Law Firm Office"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-deep-black/70"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-8">
              <span className="text-gold-400 text-sm font-medium">Established 1995</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif font-bold gold-text mb-10">
              About JH Law Firm
            </h1>
            <p className="text-2xl text-off-white leading-relaxed">
              Established with a vision to provide exceptional legal services, we have grown to become 
              one of India's most trusted law firms, serving clients across diverse legal domains.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="page-padding bg-gradient-to-b from-deep-black to-gray-900">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=700&fit=crop"
                alt="Law Books and Gavel"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent rounded-2xl"></div>
              
              {/* Floating Achievement */}
              <div className="absolute bottom-6 left-6 right-6 bg-deep-black/90 backdrop-blur-sm border border-gold-400/30 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <FaAward className="text-3xl text-gold-400" />
                  <div>
                    <h3 className="text-lg font-semibold gold-text">Award Winning Firm</h3>
                    <p className="text-off-white text-sm">Recognized for legal excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold gold-text mb-8">Our Legacy</h2>
                <p className="text-xl text-off-white leading-relaxed mb-8">
                  Founded in 1995, JH Law Firm has built a reputation for excellence in legal practice. 
                  Our journey began with a commitment to uphold justice and provide unparalleled legal counsel 
                  to individuals and corporations alike.
                </p>
                <p className="text-lg text-off-white leading-relaxed">
                  Over the decades, we have successfully handled thousands of cases, establishing ourselves 
                  as a cornerstone of legal expertise in India. Our approach combines traditional legal wisdom 
                  with modern practices to deliver optimal outcomes for our clients.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20 rounded-xl p-6 text-center">
                  <FaBalanceScale className="text-3xl text-gold-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold gold-text">5000+</div>
                  <div className="text-off-white text-sm">Cases Won</div>
                </div>
                <div className="bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20 rounded-xl p-6 text-center">
                  <FaHandshake className="text-3xl text-gold-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold gold-text">98%</div>
                  <div className="text-off-white text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { icon: FaAward, number: '25+', label: 'Years of Excellence', color: 'from-gold-400/20' },
              { icon: FaUsers, number: '50+', label: 'Legal Professionals', color: 'from-gold-500/20' },
              { icon: FaBalanceScale, number: '5000+', label: 'Cases Won', color: 'from-gold-600/20' },
              { icon: FaHandshake, number: '1000+', label: 'Happy Clients', color: 'from-gold-400/20' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="group text-center">
                  <div className={`bg-gradient-to-br ${stat.color} to-transparent border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/40 transition-all duration-300 group-hover:transform group-hover:-translate-y-2`}>
                    <IconComponent className="text-4xl text-gold-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold gold-text mb-2">{stat.number}</div>
                    <div className="text-off-white font-medium">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <MeetOurLawyers />

      {/* Mission & Vision */}
      <section className="page-padding bg-deep-black relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&h=1080&fit=crop"
            alt="Justice Statue"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-deep-black/80"></div>
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold gold-text mb-8">Our Mission & Vision</h2>
            <p className="text-xl text-off-white max-w-4xl mx-auto leading-relaxed">
              To provide exceptional legal services that protect our clients' interests while upholding 
              the highest standards of professional integrity and ethical practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20 rounded-2xl p-10">
              <h3 className="text-3xl font-serif font-bold gold-text mb-6">Our Vision</h3>
              <p className="text-lg text-off-white leading-relaxed">
                To be India's most trusted legal partner, known for our unwavering commitment 
                to justice and client success. We envision a future where legal excellence 
                and ethical practice set the standard for the entire legal profession.
              </p>
            </div>
            
            <div className="bg-gradient-to-bl from-gold-400/10 to-transparent border border-gold-400/20 rounded-2xl p-10">
              <h3 className="text-3xl font-serif font-bold gold-text mb-6">Our Values</h3>
              <p className="text-lg text-off-white leading-relaxed">
                Integrity, Excellence, Client Focus, and Professional Ethics guide every 
                aspect of our legal practice. These core values ensure that we deliver 
                not just legal solutions, but lasting partnerships built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About