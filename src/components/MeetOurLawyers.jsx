import { FaLinkedin, FaEnvelope, FaArrowRight, FaGraduationCap, FaAward, FaStar } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MeetOurLawyers = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [lawyersRef, lawyersVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2)
  const lawyers = [
    {
      name: 'Advocate Rajesh Sharma',
      designation: 'Senior Partner & Founder',
      specialization: 'Corporate Law & Civil Litigation',
      bio: 'Leading expert in corporate law with exceptional courtroom presence. Known for handling high-stakes commercial disputes.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      experience: '25+ Years',
      cases: '500+ Cases Won',
      education: 'LLM Harvard Law School',
      rating: 4.9
    },
    {
      name: 'Advocate Priya Mehta',
      designation: 'Senior Partner',
      specialization: 'Family Law & Property Disputes',
      bio: 'Compassionate yet strategic approach to family matters. Renowned for achieving favorable outcomes in complex cases.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face',
      experience: '18+ Years',
      cases: '350+ Cases Won',
      education: 'LLB Delhi University',
      rating: 4.8
    },
    {
      name: 'Advocate Vikram Singh',
      designation: 'Senior Associate',
      specialization: 'Criminal Law & Constitutional Matters',
      bio: 'Fearless defender with exceptional track record in criminal defense. Specializes in white-collar crimes.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
      experience: '12+ Years',
      cases: '200+ Cases Won',
      education: 'LLM Criminal Law',
      rating: 4.7
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-deep-black via-gray-900/30 to-deep-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-600/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div ref={headerRef} className={`text-center mb-24 animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-full mb-8">
            <FaAward className="text-gold-400 mr-2" />
            <span className="text-gold-400 text-sm font-medium tracking-wide">OUR DISTINGUISHED LEGAL TEAM</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-serif font-bold gold-text mb-10 drop-shadow-2xl">
            Meet Our Lawyers
          </h2>
          <p className="text-xl lg:text-2xl text-off-white/90 max-w-4xl mx-auto leading-relaxed">
            Our distinguished team of legal professionals brings decades of combined experience 
            and unwavering dedication to achieving exceptional results for our clients.
          </p>
        </div>

        <div ref={lawyersRef} className={`grid lg:grid-cols-3 gap-12 animate-on-scroll animate-rotate ${lawyersVisible ? 'visible' : ''}`}>
          {lawyers.map((lawyer, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-b from-gray-900/60 to-deep-black/90 border border-gold-400/20 rounded-3xl overflow-hidden hover:border-gold-400/50 transition-all duration-700 hover:transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-gold-400/10 animate-on-scroll animate-scale ${lawyersVisible ? `visible delay-${index + 1}` : ''}`}
            >
              {/* Premium Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="flex items-center space-x-1 bg-gold-gradient px-3 py-1.5 rounded-full">
                  <FaStar className="text-deep-black text-xs" />
                  <span className="text-deep-black text-xs font-bold">{lawyer.rating}</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-12 h-12 bg-gold-400/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-deep-black transition-all duration-300 hover:scale-110">
                    <FaLinkedin className="text-sm" />
                  </button>
                  <button className="w-12 h-12 bg-gold-400/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-deep-black transition-all duration-300 hover:scale-110">
                    <FaEnvelope className="text-sm" />
                  </button>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-deep-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-400/30">
                    <span className="text-gold-400 text-sm font-semibold">{lawyer.experience}</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold gold-text leading-tight">
                    {lawyer.name}
                  </h3>
                  <p className="text-gold-400/90 font-medium text-lg">
                    {lawyer.designation}
                  </p>
                  <p className="text-off-white/70 text-sm font-medium">
                    {lawyer.specialization}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between py-4 border-y border-gold-400/10">
                  <div className="text-center">
                    <div className="text-gold-400 font-bold text-lg">{lawyer.cases.split(' ')[0]}</div>
                    <div className="text-off-white/60 text-xs">Cases Won</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <FaGraduationCap className="text-gold-400 text-sm" />
                      <span className="text-off-white/80 text-sm font-medium">{lawyer.education.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                <p className="text-off-white/80 leading-relaxed text-sm">
                  {lawyer.bio}
                </p>
                
                <button className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400/10 to-gold-600/10 hover:from-gold-400/20 hover:to-gold-600/20 border border-gold-400/30 hover:border-gold-400/50 rounded-xl py-4 px-6 text-gold-400 hover:text-gold-300 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
                  <span>View Full Profile</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div ref={ctaRef} className={`text-center mt-20 animate-on-scroll ${ctaVisible ? 'visible delay-4' : ''}`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-3xl p-12 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                  <FaArrowRight className="text-deep-black text-xl" />
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold gold-text mb-4">Ready to Work With Our Expert Team?</h3>
              <p className="text-off-white/80 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation with our distinguished legal professionals and experience the difference of working with industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gold-gradient text-deep-black font-bold text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg">
                  Book Free Consultation
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 font-semibold text-lg rounded-xl transition-all duration-300">
                  View All Lawyers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetOurLawyers