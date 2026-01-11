import { FaBalanceScale, FaBuilding, FaUsers, FaShieldAlt, FaHome } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PracticeAreasStrip = () => {
  const [stripRef, stripVisible] = useScrollAnimation(0.3)
  const practiceAreas = [
    { name: 'Civil Litigation', icon: FaBalanceScale },
    { name: 'Corporate Law', icon: FaBuilding },
    { name: 'Family Law', icon: FaUsers },
    { name: 'Criminal Law', icon: FaShieldAlt },
    { name: 'Property Law', icon: FaHome }
  ]

  return (
    <section className="bg-gold-gradient py-8">
      <div className="container-max section-padding">
        <div ref={stripRef} className={`grid grid-cols-2 md:grid-cols-5 gap-6 animate-on-scroll animate-left ${stripVisible ? 'visible' : ''}`}>
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <div key={index} className={`text-center text-deep-black animate-on-scroll ${stripVisible ? `visible delay-${index + 1}` : ''}`}>
                <IconComponent className="text-3xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">{area.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasStrip