import { FaBullseye, FaBolt, FaShieldAlt, FaGem } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Legal Consultation',
      description: 'Expert legal advice and strategic counsel for complex legal matters',
      features: ['Initial Case Assessment', 'Legal Strategy Development', 'Risk Analysis', 'Compliance Review']
    },
    {
      title: 'Document Drafting',
      description: 'Professional drafting of legal documents and agreements',
      features: ['Contracts & Agreements', 'Legal Notices', 'Petitions & Applications', 'Corporate Documents']
    },
    {
      title: 'Court Representation',
      description: 'Skilled advocacy and representation in courts at all levels',
      features: ['Trial Court Representation', 'Appellate Court Advocacy', 'Supreme Court Matters', 'Arbitration Proceedings']
    },
    {
      title: 'Legal Research',
      description: 'Comprehensive legal research and case law analysis',
      features: ['Case Law Research', 'Statutory Analysis', 'Precedent Studies', 'Legal Opinion Drafting']
    },
    {
      title: 'Compliance Services',
      description: 'Ensuring regulatory compliance across various industries',
      features: ['Regulatory Compliance', 'Policy Development', 'Audit Support', 'Training Programs']
    },
    {
      title: 'Dispute Resolution',
      description: 'Alternative dispute resolution through mediation and arbitration',
      features: ['Mediation Services', 'Arbitration Proceedings', 'Negotiation Support', 'Settlement Agreements']
    }
  ]

  return (
    <div className="pt-20">
      <section className="page-padding bg-deep-black">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold gold-text mb-8">
              Our Services
            </h1>
            <p className="text-xl text-off-white max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal solutions tailored to meet your specific needs with 
              the highest standards of professional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-900 to-deep-black border border-gold-400/20 p-8 hover:border-gold-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold gold-text mb-4">
                  {service.title}
                </h3>
                <p className="text-off-white mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-off-white">
                      <span className="text-gold-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-padding bg-gradient-to-b from-deep-black to-gray-900">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold gold-text mb-6">
              Why Choose Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaBullseye className="text-4xl mb-4 text-gold-400 mx-auto" />
              <h3 className="text-xl font-semibold gold-text mb-2">Tailored Solutions</h3>
              <p className="text-off-white">Customized legal strategies for your unique requirements</p>
            </div>
            <div className="text-center">
              <FaBolt className="text-4xl mb-4 text-gold-400 mx-auto" />
              <h3 className="text-xl font-semibold gold-text mb-2">Quick Response</h3>
              <p className="text-off-white">Prompt attention to urgent legal matters</p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-4xl mb-4 text-gold-400 mx-auto" />
              <h3 className="text-xl font-semibold gold-text mb-2">Confidentiality</h3>
              <p className="text-off-white">Strict adherence to client confidentiality</p>
            </div>
            <div className="text-center">
              <FaGem className="text-4xl mb-4 text-gold-400 mx-auto" />
              <h3 className="text-xl font-semibold gold-text mb-2">Premium Quality</h3>
              <p className="text-off-white">Highest standards of legal service delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services