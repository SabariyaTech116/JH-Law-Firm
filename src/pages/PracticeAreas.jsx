import { FaBalanceScale, FaBuilding, FaUsers, FaShieldAlt, FaHome, FaLightbulb } from 'react-icons/fa'

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: 'Civil Litigation',
      icon: FaBalanceScale,
      description: 'Comprehensive civil litigation services covering contract disputes, property matters, and commercial conflicts.',
      services: [
        'Contract Disputes',
        'Property Litigation',
        'Commercial Disputes',
        'Tort Claims',
        'Recovery Suits',
        'Injunction Matters'
      ]
    },
    {
      title: 'Corporate Law',
      icon: FaBuilding,
      description: 'Complete corporate legal solutions for businesses of all sizes, from startups to multinational corporations.',
      services: [
        'Company Formation',
        'Corporate Governance',
        'Mergers & Acquisitions',
        'Securities Law',
        'Corporate Restructuring',
        'Compliance Management'
      ]
    },
    {
      title: 'Family Law',
      icon: FaUsers,
      description: 'Sensitive handling of family matters with compassionate legal counsel and strategic representation.',
      services: [
        'Divorce Proceedings',
        'Child Custody',
        'Maintenance & Alimony',
        'Adoption Matters',
        'Domestic Violence',
        'Marriage Registration'
      ]
    },
    {
      title: 'Criminal Law',
      icon: FaShieldAlt,
      description: 'Robust criminal defense representation with extensive experience in defending complex criminal cases.',
      services: [
        'Criminal Defense',
        'Bail Applications',
        'White Collar Crimes',
        'Economic Offenses',
        'Appeals & Revisions',
        'Anticipatory Bail'
      ]
    },
    {
      title: 'Property Law',
      icon: FaHome,
      description: 'Expert guidance on all property-related matters including transactions, disputes, and documentation.',
      services: [
        'Property Transactions',
        'Title Verification',
        'Property Disputes',
        'Real Estate Documentation',
        'Land Acquisition',
        'Property Registration'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: FaLightbulb,
      description: 'Protection and enforcement of intellectual property rights including patents, trademarks, and copyrights.',
      services: [
        'Patent Registration',
        'Trademark Protection',
        'Copyright Matters',
        'IP Litigation',
        'Licensing Agreements',
        'Trade Secrets'
      ]
    }
  ]

  return (
    <div className="pt-20">
      <section className="page-padding bg-deep-black">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold gold-text mb-8">
              Practice Areas
            </h1>
            <p className="text-xl text-off-white max-w-3xl mx-auto leading-relaxed">
              Specialized legal expertise across diverse practice areas to serve 
              all your legal needs with professional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-b from-gray-900 to-deep-black border border-gold-400/20 p-8 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <IconComponent className="text-5xl mb-4 text-gold-400 mx-auto" />
                    <h3 className="text-2xl font-serif font-bold gold-text mb-4">
                      {area.title}
                    </h3>
                    <p className="text-off-white leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold gold-text mb-4">Key Services:</h4>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-off-white">
                          <span className="text-gold-400 mr-2">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="page-padding bg-gradient-to-b from-deep-black to-gray-900">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold gold-text mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-off-white max-w-3xl mx-auto">
              We combine deep legal expertise with strategic thinking to deliver optimal outcomes across all practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-deep-black">1</span>
              </div>
              <h3 className="text-xl font-semibold gold-text mb-4">Analysis</h3>
              <p className="text-off-white">Thorough case analysis and legal research to understand all aspects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-deep-black">2</span>
              </div>
              <h3 className="text-xl font-semibold gold-text mb-4">Strategy</h3>
              <p className="text-off-white">Development of customized legal strategies for optimal outcomes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-deep-black">3</span>
              </div>
              <h3 className="text-xl font-semibold gold-text mb-4">Execution</h3>
              <p className="text-off-white">Precise execution with continuous monitoring and client updates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PracticeAreas