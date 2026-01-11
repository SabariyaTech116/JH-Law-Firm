import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const [badgeRef, badgeVisible] = useScrollAnimation(0.2)
  const [headingRef, headingVisible] = useScrollAnimation(0.2)
  const [descRef, descVisible] = useScrollAnimation(0.2)
  const [buttonsRef, buttonsVisible] = useScrollAnimation(0.2)
  const [cardRef, cardVisible] = useScrollAnimation(0.2)
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Multi-Layer Overlay System */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black/40_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black/20 via-transparent to-deep-black/30 mix-blend-multiply"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-12rem)]">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Premium Badge */}
              <div ref={badgeRef} className={`animate-on-scroll ${badgeVisible ? 'visible' : ''}`}>
                <div className="inline-block px-6 py-3 bg-black/40 backdrop-blur-sm border border-gold-400/30 rounded-full">
                  <span className="text-gold-400 text-sm font-medium tracking-wide">PREMIER LEGAL SERVICES</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <div ref={headingRef} className={`animate-on-scroll animate-left ${headingVisible ? 'visible' : ''}`}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.85] mb-6">
                  <span className="text-white drop-shadow-2xl">JH </span>
                  <span className="gold-text drop-shadow-2xl">LAW FIRM</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-gold-400 font-medium mb-8 drop-shadow-lg">
                  Advocates & Legal Consultants
                </p>
              </div>

              {/* Description */}
              <div ref={descRef} className={`animate-on-scroll animate-left ${descVisible ? 'visible delay-2' : ''}`}>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
                  Delivering exceptional legal services with unwavering commitment to justice. 
                  Our experienced team provides comprehensive legal solutions with the highest 
                  standards of professional excellence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className={`animate-on-scroll ${buttonsVisible ? 'visible delay-3' : ''} flex flex-col sm:flex-row gap-6`}>
                <Link 
                  to="/about" 
                  className="group px-10 py-5 bg-gold-gradient text-deep-black font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-500 flex items-center justify-center shadow-2xl rounded-lg"
                >
                  About Our Firm
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-black/40 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-500 font-semibold text-lg text-center shadow-2xl rounded-lg"
                >
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Content - 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div ref={cardRef} className={`animate-on-scroll animate-scale ${cardVisible ? 'visible delay-4' : ''}`}>
                {/* Trust Metrics Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-gold-400/20 rounded-2xl p-8 lg:p-12 shadow-2xl max-w-md">
                  <div className="text-center mb-8">
                    <FaCheckCircle className="text-5xl text-gold-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Professional Excellence</h3>
                    <p className="text-white/80">Trusted by thousands of clients</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group cursor-pointer">
                      <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:scale-110 group-hover:text-gold-400 transition-all duration-500">
                        1000+
                      </div>
                      <div className="text-white/80 mt-2 font-medium tracking-wide drop-shadow-lg group-hover:text-white transition-colors duration-300 text-sm">
                        CLIENTS SERVED
                      </div>
                    </div>
                    <div className="text-center group cursor-pointer">
                      <div className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:scale-110 group-hover:text-gold-400 transition-all duration-500">
                        98%
                      </div>
                      <div className="text-white/80 mt-2 font-medium tracking-wide drop-shadow-lg group-hover:text-white transition-colors duration-300 text-sm">
                        SUCCESS RATE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero