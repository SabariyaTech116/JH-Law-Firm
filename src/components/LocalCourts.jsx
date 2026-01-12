import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLandmark, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaBalanceScale } from 'react-icons/fa'

const LocalCourts = () => {
    const [expandedCourt, setExpandedCourt] = useState(null)

    const courts = [
        {
            name: "Advocate at High Court Telangana",
            shortName: "High Court",
            jurisdiction: "Appellate jurisdiction over all civil and criminal cases in Telangana",
            address: "High Court Complex, Erragadda, Hyderabad",
            specialties: ["Writ Petitions", "Appeals", "Constitutional Matters", "PIL"]
        },
        {
            name: "Advocate at City Civil Court Hyderabad",
            shortName: "City Civil Court",
            jurisdiction: "Civil suits, property disputes, partition suits, specific performance cases",
            address: "Nampally, Hyderabad",
            specialties: ["Property Disputes", "Civil Suits", "Money Recovery", "Injunction Cases"]
        },
        {
            name: "Advocate at Ranga Reddy District Court",
            shortName: "Ranga Reddy Court",
            jurisdiction: "All civil and criminal matters within Ranga Reddy District",
            address: "LB Nagar, Hyderabad",
            specialties: ["Land Disputes", "Criminal Cases", "Family Matters", "Revenue Cases"]
        },
        {
            name: "Advocate at Medchal Court",
            shortName: "Medchal Court",
            jurisdiction: "Civil and criminal cases in Medchal-Malkajgiri district",
            address: "Medchal, Hyderabad",
            specialties: ["Local Disputes", "Criminal Defense", "Property Cases", "Family Court"]
        },
        {
            name: "Advocate at Kukatpally Court",
            shortName: "Kukatpally Court",
            jurisdiction: "Metropolitan Magistrate Court covering Kukatpally area",
            address: "KPHB, Kukatpally, Hyderabad",
            specialties: ["Cheque Bounce Cases", "Criminal Complaints", "Civil Disputes"]
        },
        {
            name: "Advocate at Nizampet Court",
            shortName: "Nizampet Court",
            jurisdiction: "Local civil and criminal jurisdiction for Nizampet area",
            address: "Nizampet, Hyderabad",
            specialties: ["Local Cases", "Property Disputes", "Criminal Matters"]
        },
        {
            name: "Advocate at LB Nagar Family Court",
            shortName: "LB Nagar Family Court",
            jurisdiction: "Exclusive jurisdiction for family law matters",
            address: "LB Nagar, Hyderabad",
            specialties: ["Divorce Cases", "Child Custody", "Maintenance", "Domestic Violence"]
        },
        {
            name: "Advocate at Malkajgiri Court",
            shortName: "Malkajgiri Court",
            jurisdiction: "Civil and criminal cases in Malkajgiri area",
            address: "Malkajgiri, Hyderabad",
            specialties: ["Criminal Defense", "Civil Litigation", "Local Disputes"]
        }
    ]

    const toggleCourt = (index) => {
        setExpandedCourt(expandedCourt === index ? null : index)
    }

    return (
        <section className="py-16 bg-deep-black border-t border-gold-400/10">
            <div className="container-max section-padding">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center px-4 py-2 bg-gold-400/10 rounded-full border border-gold-400/20 mb-6"
                    >
                        <FaLandmark className="text-gold-400 mr-2" />
                        <span className="text-gold-400 font-medium text-sm tracking-widest uppercase">Local Court Expertise</span>
                    </motion.div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold gold-text mb-6">
                        Practicing Across All Major Courts in Hyderabad
                    </h2>
                    <p className="text-off-white/80 max-w-2xl mx-auto text-lg">
                        Our <strong>experienced court lawyers</strong> provide professional representation across Hyderabad,
                        Secunderabad, and Ranga Reddy Districts. Available as your trusted <strong>advocate near me</strong>
                        at all local courts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {courts.map((court, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-900/50 border border-gold-400/10 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all"
                        >
                            {/* Court Header */}
                            <button
                                onClick={() => toggleCourt(index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <FaMapMarkerAlt className="text-gold-400/50 text-xl group-hover:text-gold-400 transition-colors flex-shrink-0" />
                                    <div>
                                        <h3 className="text-off-white font-semibold text-lg group-hover:text-gold-400 transition-colors">
                                            {court.shortName}
                                        </h3>
                                        <p className="text-off-white/60 text-sm">{court.name}</p>
                                    </div>
                                </div>
                                {expandedCourt === index ? (
                                    <FaChevronUp className="text-gold-400 flex-shrink-0" />
                                ) : (
                                    <FaChevronDown className="text-off-white/50 group-hover:text-gold-400 transition-colors flex-shrink-0" />
                                )}
                            </button>

                            {/* Expandable Details */}
                            <AnimatePresence>
                                {expandedCourt === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 border-t border-gold-400/10 space-y-4">
                                            {/* Jurisdiction */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <FaBalanceScale className="text-gold-400 text-sm" />
                                                    <h4 className="text-gold-400 font-semibold text-sm">Jurisdiction</h4>
                                                </div>
                                                <p className="text-off-white/70 text-sm pl-6">{court.jurisdiction}</p>
                                            </div>

                                            {/* Address */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <FaMapMarkerAlt className="text-gold-400 text-sm" />
                                                    <h4 className="text-gold-400 font-semibold text-sm">Location</h4>
                                                </div>
                                                <p className="text-off-white/70 text-sm pl-6">{court.address}</p>
                                            </div>

                                            {/* Specialties */}
                                            <div>
                                                <h4 className="text-gold-400 font-semibold text-sm mb-2">Our Expertise</h4>
                                                <div className="flex flex-wrap gap-2 pl-0">
                                                    {court.specialties.map((specialty, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs bg-gold-400/10 text-gold-300 px-3 py-1 rounded-full border border-gold-400/20"
                                                        >
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional SEO Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center max-w-4xl mx-auto"
                >
                    <p className="text-off-white/70 text-lg leading-relaxed">
                        Looking for an <strong>advocate near me in Hyderabad</strong>? Our team provides local court representation
                        as a <strong>trusted advocate at Medchal Court</strong>, <strong>advocate at Kukatpally Court</strong>,
                        <strong> advocate at Nizampet Court</strong>, and across all major courts. We combine deep local knowledge
                        with professional expertise to deliver results.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default LocalCourts

