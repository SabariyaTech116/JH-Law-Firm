import React from 'react'
import { motion } from 'framer-motion'
import { FaBalanceScale, FaShieldAlt, FaUsers, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SEOContentSection = () => {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.1)

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-deep-black border-t border-gold-400/10">
            <div className="container-max section-padding">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold gold-text mb-6">
                        Experienced Advocate & Trusted Legal Consultant in Hyderabad
                    </h2>
                    <div className="w-24 h-1 bg-gold-400 mx-auto mb-8"></div>
                </motion.div>

                {/* Rich SEO Content */}
                <div className="max-w-5xl mx-auto space-y-8 text-off-white/90">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={sectionVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-lg leading-relaxed"
                    >
                        When seeking a <strong>Best Advocate in Hyderabad</strong>, you need more than just legal representation—you need
                        a <strong>Trusted Legal Consultant</strong> who understands your unique situation. As a <strong>Practising Advocate</strong>
                        with extensive courtroom experience, our <strong>Senior Advocate</strong> team specializes in providing
                        <strong> Professional Legal Services</strong> across <strong>Civil Law</strong>, <strong>Criminal Law</strong>, and
                        <strong> Family Law</strong> matters.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={sectionVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-lg leading-relaxed"
                    >
                        Our <strong>Experienced Advocate</strong> services cover a comprehensive range of legal matters. Whether you need a
                        <strong> Court Lawyer</strong> for property disputes, a <strong>Civil & Criminal Lawyer</strong> for complex litigation,
                        or <strong>Legal Advice in Hyderabad</strong> for family matters, we deliver <strong>Result-Oriented Advocate</strong> solutions
                        with a <strong>Client-Focused Lawyer</strong> approach. We proudly serve as your <strong>Affordable Advocate</strong>
                        without compromising on quality or expertise.
                    </motion.p>

                    {/* Service Highlights Grid */}
                    <div className="grid md:grid-cols-3 gap-8 py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-900/50 border border-gold-400/20 rounded-xl p-8 hover:border-gold-400/40 transition-all"
                        >
                            <FaBalanceScale className="text-4xl text-gold-400 mb-4" />
                            <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">
                                Civil Law Excellence
                            </h3>
                            <p className="text-off-white/80 leading-relaxed">
                                <strong>Best Civil Advocate in Hyderabad</strong> for property disputes, partition suits,
                                injunction cases, and recovery of money. Expert <strong>Legal Notice Drafting Advocate</strong>
                                and <strong>Court Petition Drafting Lawyer</strong>.
                            </p>
                            <Link to="/civil-law" className="inline-block mt-4 text-gold-400 hover:text-gold-300 transition-colors">
                                Learn More →
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-900/50 border border-gold-400/20 rounded-xl p-8 hover:border-gold-400/40 transition-all"
                        >
                            <FaShieldAlt className="text-4xl text-gold-400 mb-4" />
                            <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">
                                Criminal Defense
                            </h3>
                            <p className="text-off-white/80 leading-relaxed">
                                <strong>Leading Criminal Defence Lawyer</strong> specializing in anticipatory bail,
                                regular bail, FIR quashing, and cheque bounce cases. 24/7 emergency legal assistance
                                for <strong>Criminal Advocate in Hyderabad</strong>.
                            </p>
                            <Link to="/criminal-law" className="inline-block mt-4 text-gold-400 hover:text-gold-300 transition-colors">
                                Learn More →
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-900/50 border border-gold-400/20 rounded-xl p-8 hover:border-gold-400/40 transition-all"
                        >
                            <FaUsers className="text-4xl text-gold-400 mb-4" />
                            <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">
                                Family Law Specialists
                            </h3>
                            <p className="text-off-white/80 leading-relaxed">
                                <strong>Top Family Court Advocate</strong> and <strong>Best Divorce Lawyer in Hyderabad</strong>
                                handling mutual divorce, contested divorce, child custody, alimony, and domestic violence cases
                                with compassion and expertise.
                            </p>
                            <Link to="/family-law" className="inline-block mt-4 text-gold-400 hover:text-gold-300 transition-colors">
                                Learn More →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Consultation CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-r from-gold-400/10 to-gold-600/10 border border-gold-400/30 rounded-2xl p-10 text-center"
                    >
                        <FaPhone className="text-5xl text-gold-400 mx-auto mb-6" />
                        <h3 className="text-3xl font-serif font-bold text-gold-400 mb-4">
                            Get Online Legal Consultation Today
                        </h3>
                        <p className="text-xl text-off-white/90 mb-6 max-w-3xl mx-auto">
                            Need immediate <strong>Legal Advice in Hyderabad</strong>? Our <strong>Professional Legal Services</strong>
                            include <strong>Online Legal Consultation</strong> for your convenience. Speak with an experienced lawyer today.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-gold-400 text-deep-black font-bold text-lg rounded-lg hover:bg-gold-300 transition-all transform hover:-translate-y-1"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>

                    {/* Location/Court Coverage */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={sectionVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="text-center pt-8"
                    >
                        <p className="text-lg text-off-white/80">
                            Serving clients across Hyderabad | <strong>Advocate at Medchal Court</strong> |
                            <strong> Advocate at Kukatpally Court</strong> | <strong>Advocate at Nizampet Court</strong> |
                            <strong> Advocate at LB Nagar Family Court</strong> | <strong>Advocate at Ranga Reddy District Court</strong> |
                            <strong> Advocate at City Civil Court, Hyderabad</strong>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SEOContentSection
