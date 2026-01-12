import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { generateLegalSchema } from '../utils/SchemaGenerator'
import { FaBuilding, FaFileContract, FaGavel, FaHandHoldingUsd, FaLandmark, FaBalanceScale } from 'react-icons/fa'

const CivilLaw = () => {
    const schema = generateLegalSchema(
        'LegalService',
        'Best Civil Advocate & Top Property Lawyer Hyderabad',
        'Expert Civil Lawyer in Hyderabad for Property Disputes, Land Grabbing, Injunction Suits, and Specific Performance cases.',
        'https://jhlawfirm.com/civil-law'
    )

    const services = [
        {
            title: 'Property Disputes',
            icon: <FaBuilding />,
            desc: 'Expert legal resolution for ancestral property disputes, partition suits, and land grabbing cases.',
            keywords: ['Property Dispute Lawyer', 'Land Dispute Advocate', 'Partition Suit Lawyer']
        },
        {
            title: 'Injunction & Stay Orders',
            icon: <FaHandHoldingUsd />,
            desc: 'Immediate legal relief through temporary and permanent injunctions to protect your possession.',
            keywords: ['Injunction Case Advocate', 'Civil Advocate in Hyderabad']
        },
        {
            title: 'Money Recovery Suits',
            icon: <FaFileContract />,
            desc: 'Filing Summary Suits (Order 37) and Recovery Suits for unpaid debts, bouncy cheques, and breach of contract.',
            keywords: ['Recovery of Money Advocate', 'Cheque Bounce Notice Advocate']
        },
        {
            title: 'Declaration Suits',
            icon: <FaLandmark />,
            desc: 'Legal title declaration and correction of revenue records (Dharani Portal issues).',
            keywords: ['Declaration Suit Lawyer', 'Civil Lawyer Hyderabad']
        },
        {
            title: 'Specific Performance',
            icon: <FaGavel />,
            desc: 'Enforcing sale agreements and contracts through Specific Performance suits in Civil Courts.',
            keywords: ['Specific Performance Advocate', 'Legal Documentation Services']
        },
        {
            title: 'Legal Opinions',
            icon: <FaBalanceScale />,
            desc: 'Comprehensive property title verification and legal opinions for real estate transactions.',
            keywords: ['Legal Consultant', 'Property Legal Opinion']
        }
    ]

    return (
        <>
            <SEO
                title="Best Civil Advocate in Hyderabad | Property Dispute Lawyer"
                description="Expert Civil Lawyer in Hyderabad for Property Disputes, Land Cases, Partition Suits, Injunction, Money Recovery & Legal Notice Drafting. Top Civil Advocate with 20+ Years Experience. Affordable, Professional Legal Services."
                keywords="Civil Advocate in Hyderabad, Best Civil Lawyer, Property Dispute Lawyer, Land Dispute Advocate, Partition Suit Lawyer, Injunction Case Advocate, Recovery of Money Advocate, Legal Notice Drafting Advocate, Court Petition Drafting, Affidavit Drafting, Civil Lawyer Near Me"
                canonicalUrl="/civil-law"
                schema={schema}
            />

            <div className="pt-24 pb-16 bg-deep-black min-h-screen">
                {/* HERO SECTION */}
                <section className="relative px-6 lg:px-12 py-20 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/20 via-deep-black to-deep-black pointer-events-none"></div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-serif font-bold gold-text mb-6 relative z-10"
                    >
                        Top Civil Advocate & Property Lawyer
                    </motion.h1>
                    <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-8 relative z-10">
                        Protecting Your Assets & Rights. Specialized in Complex Land Litigation, Property Disputes, and Civil Suits
                        across Telangana Courts.
                    </p>
                </section>

                {/* SERVICES GRID */}
                <section className="px-6 lg:px-12 py-12">
                    <div className="container-max mx-auto">
                        <h2 className="text-3xl font-serif text-gold-400 mb-12 text-center">Civil Litigation Expertise</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-900/50 border border-gold-400/20 p-8 rounded-2xl hover:border-gold-400/50 transition-all hover:-translate-y-2 backdrop-blur-sm"
                                >
                                    <div className="text-4xl text-gold-400 mb-6">{service.icon}</div>
                                    <h3 className="text-2xl text-off-white font-serif mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.keywords.map((kw, i) => (
                                            <span key={i} className="text-xs bg-gold-400/10 text-gold-300 px-3 py-1 rounded-full border border-gold-400/10">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LEGAL DRAFTING & NOTICES SECTION */}
                <section className="px-6 lg:px-12 py-12 bg-deep-black border-t border-gold-400/10">
                    <div className="container-max mx-auto max-w-4xl">
                        <h2 className="text-3xl font-serif text-gold-400 mb-8 text-center">Legal Drafting & Documentation Services</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-gold-400/30 transition-colors">
                                <h3 className="text-xl text-off-white font-bold mb-3">Legal Notice & Reply Drafting</h3>
                                <p className="text-gray-400 text-sm">
                                    Professional <strong>Legal Notice Drafting Advocate</strong> for property disputes and <strong>Cheque Bounce Notice Advocate</strong> services.
                                    We also provide strong <strong>Reply Notice Lawyer</strong> services to counter false claims.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-gold-400/30 transition-colors">
                                <h3 className="text-xl text-off-white font-bold mb-3">Petitions & Deeds</h3>
                                <p className="text-gray-400 text-sm">
                                    Expert <strong>Court Petition Drafting Lawyer</strong> for civil suits. We handle <strong>Affidavit Drafting</strong>,
                                    Sale Deeds, Gift Deeds, and Will registration.
                                    Trusted <strong>Legal Documentation Services</strong> in Hyderabad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US / SEO CONTENT */}
                <section className="px-6 lg:px-12 py-16 bg-gradient-to-b from-gray-900/20 to-deep-black">
                    <div className="container-max mx-auto text-off-white/90 space-y-8 max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-serif gold-text">Trusted Civil Lawyer in Hyderabad</h2>
                        <p className="leading-relaxed text-lg">
                            Civil litigation often involves high stakes, especially in <strong>Property Disputes</strong> and <strong>Land Matters</strong>.
                            As a leading <strong>Civil Advocate in Hyderabad</strong>, we offer precise legal strategies for
                            <strong> Partition Suits</strong>, <strong>Declaration Suits</strong>, and <strong>Specific Performance</strong> cases.
                        </p>
                        <p className="leading-relaxed text-lg">
                            Whether you are facing an
                            <strong> Injunction Case</strong> or need help with <strong>Recovery of Money</strong>, our team provides
                            result-oriented representation in the <strong>City Civil Court</strong>, <strong>Ranga Reddy District Court</strong>,
                            and the Hon'ble High Court.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION for Civil Law */}
                <section className="px-6 lg:px-12 py-16 bg-deep-black border-t border-gold-400/10">
                    <div className="container-max mx-auto max-w-4xl">
                        <h2 className="text-3xl font-serif text-gold-400 mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Who is the best property dispute lawyer in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    We are recognized as one of the <strong>Best Property Dispute Lawyers in Hyderabad</strong> with 20+ years of experience.
                                    Our <strong>Expert Civil Advocate</strong> team specializes in <strong>Land Disputes</strong>, ancestral property conflicts,
                                    <strong> Partition Suits</strong>, and land grabbing cases with a 90% success rate across Telangana courts.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">How much does a civil advocate charge in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    As a <strong>Professional Civil Lawyer</strong>, our fees depend on case complexity. <strong>Injunction Cases</strong>
                                    typically range from ₹25,000-₹75,000, while <strong>Property Dispute</strong> litigation ranges from
                                    ₹50,000-₹3,00,000. We are known as an <strong>Affordable Civil Advocate</strong> offering transparent pricing
                                    and flexible payment options.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Do you provide legal notice drafting services?</h3>
                                <p className="text-gray-400">
                                    Yes! As a <strong>Top Legal Notice Drafting Advocate</strong>, we provide comprehensive documentation services including
                                    <strong> Legal Notice Drafting</strong>, <strong>Reply Notice Lawyer</strong> services, <strong>Cheque Bounce Notice</strong> drafting,
                                    <strong> Court Petition Drafting</strong>, <strong>Affidavit Drafting</strong>, and complete <strong>Legal Documentation Services</strong>.
                                    Our notices are legally sound and drafted to maximize your position.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Which courts do you practice in?</h3>
                                <p className="text-gray-400">
                                    We are experienced <strong>Advocates at City Civil Court Hyderabad</strong>, <strong>Ranga Reddy District Court</strong>,
                                    <strong> Medchal Court</strong>, <strong>Kukatpally Court</strong>, and appear regularly in the Telangana High Court.
                                    Our team provides representation across all civil courts in Hyderabad and surrounding districts.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Can you help with recovery of money suits?</h3>
                                <p className="text-gray-400">
                                    Absolutely. As a <strong>Leading Recovery of Money Advocate</strong> and <strong>Expert Cheque Bounce Case Advocate</strong>,
                                    we file Summary Suits under Order 37 CPC and regular Recovery Suits for unpaid debts, breach of contract,
                                    and dishonored cheques. We also handle <strong>Money Recovery</strong> through negotiated settlements and court litigation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Services - Internal Linking */}
                <section className="px-6 lg:px-12 py-12 bg-gray-900/30 border-t border-gold-400/10">
                    <div className="container-max mx-auto max-w-4xl text-center">
                        <h3 className="text-2xl font-serif text-gold-400 mb-6">Related Legal Services</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/family-law"
                                className="px-6 py-3 bg-deep-black border border-gold-400/20 text-off-white rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all"
                            >
                                Family Law & Divorce →
                            </Link>
                            <Link
                                to="/criminal-law"
                                className="px-6 py-3 bg-deep-black border border-gold-400/20 text-off-white rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all"
                            >
                                Criminal Defense & Bail →
                            </Link>
                            <Link
                                to="/services"
                                className="px-6 py-3 bg-deep-black border border-gold-400/20 text-off-white rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all"
                            >
                                All Legal Services →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CivilLaw

