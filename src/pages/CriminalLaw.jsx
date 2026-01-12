import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { generateLegalSchema } from '../utils/SchemaGenerator'
import { FaUserSecret, FaGavel, FaFileSignature, FaShieldAlt, FaBalanceScale, FaPassport } from 'react-icons/fa'

const CriminalLaw = () => {
    const schema = generateLegalSchema(
        'LegalService',
        'Best Criminal Defence Lawyer & Leading Bail Advocate Hyderabad',
        'Top Criminal Lawyer in Hyderabad. Expert in Anticipatory Bail, FIR Quash, Cheque Bounce (138 NI), and Criminal Defense.',
        'https://jhlawfirm.com/criminal-law'
    )

    const services = [
        {
            title: 'Bail Matters',
            icon: <FaGavel />,
            desc: 'Expert representation for Anticipatory Bail and Regular Bail in Sessions Court and High Court.',
            keywords: ['Anticipatory Bail Advocate', 'Regular Bail Lawyer', 'Criminal Advocate in Hyderabad']
        },
        {
            title: 'FIR Quashing',
            icon: <FaFileSignature />,
            desc: 'Filing Quash Petitions (482 CrPC) in High Court to dismiss false FIRs and criminal charges.',
            keywords: ['FIR Quash Lawyer', 'Criminal Case Lawyer']
        },
        {
            title: 'Cheque Bounce (138 NI)',
            icon: <FaBalanceScale />,
            desc: 'Specialized legal defense and prosecution for Cheque Bounce cases under Section 138 of NI Act.',
            keywords: ['Cheque Bounce Case Advocate', '138 NI Act Lawyer']
        },
        {
            title: 'Criminal Trial Defense',
            icon: <FaUserSecret />,
            desc: 'Strong defense strategies for IPC offenses, fighting for acquittal in trial courts.',
            keywords: ['Criminal Defence Lawyer', 'Best Criminal Lawyer in Hyderabad']
        },
        {
            title: 'Cyber Crime',
            icon: <FaShieldAlt />,
            desc: 'defense against cyber frauds, data theft, and IT Act violations.',
            keywords: ['Cyber Crime Lawyer', 'White Collar Crime']
        },
        {
            title: 'NDPS & Passport Act',
            icon: <FaPassport />,
            desc: 'Handling complex cases related to Narcotics (NDPS) and Passport Act violations.',
            keywords: ['NDPS Lawyer', 'Criminal Advocate']
        }
    ]

    return (
        <>
            <SEO
                title="Best Criminal Lawyer in Hyderabad | Bail & Cheque Bounce Advocate"
                description="Leading Criminal Defence Lawyer in Hyderabad. Expert in Anticipatory Bail, Regular Bail, FIR Quashing, 498A Defense, Cheque Bounce (138 NI), Criminal Trials. Available 24/7 for Urgent Matters. Top Criminal Advocate Near You."
                keywords="Criminal Lawyer in Hyderabad, Best Criminal Advocate, Bail Lawyer, Anticipatory Bail Advocate, FIR Quash Advocate, Cheque Bounce Lawyer, 138 NI Act Lawyer, Criminal Defence Lawyer, 498A Lawyer, Criminal Lawyer Near Me"
                canonicalUrl="/criminal-law"
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
                        Best Criminal Defence Lawyer in Hyderabad
                    </motion.h1>
                    <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-8 relative z-10">
                        Fearless Representation. We specialize in securing
                        <strong> Bail</strong>, <strong>Quashing FIRs</strong>, and defending <strong>Cheque Bounce cases</strong>.
                    </p>
                </section>

                {/* SERVICES GRID */}
                <section className="px-6 lg:px-12 py-12">
                    <div className="container-max mx-auto">
                        <h2 className="text-3xl font-serif text-gold-400 mb-12 text-center">Criminal Law Services</h2>
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

                {/* WHY CHOOSE US / SEO CONTENT */}
                <section className="px-6 lg:px-12 py-16 bg-gradient-to-b from-gray-900/20 to-deep-black">
                    <div className="container-max mx-auto text-off-white/90 space-y-8 max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-serif gold-text">Experienced Criminal Advocate for Your Defense</h2>
                        <p className="leading-relaxed text-lg">
                            Facing criminal charges can be overwhelming. As a top-rated <strong>Criminal Advocate in Hyderabad</strong>,
                            we provide aggressive legal defense for <strong>498A</strong>, <strong>138 NI Act (Cheque Bounce)</strong>,
                            and <strong>Domestic Violence</strong> cases.
                        </p>
                        <p className="leading-relaxed text-lg">
                            Whether you need urgent <strong>Anticipatory Bail</strong> or legal representation for <strong>FIR Quashing</strong> in the
                            High Court, our team is dedicated to protecting your liberty and reputation.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION for Criminal Law Long-Tail Keywords */}
                <section className="px-6 lg:px-12 py-16 bg-deep-black text-center md:text-left">
                    <div className="container-max mx-auto max-w-4xl">
                        <h2 className="text-3xl font-serif text-gold-400 mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Who is the best criminal lawyer in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    We are recognized as a <strong>Leading Criminal Defence Lawyer in Hyderabad</strong> with 15+ years of experience.
                                    Our <strong>Expert Criminal Advocate</strong> team specializes in <strong>Anticipatory Bail</strong>, <strong>Regular Bail</strong>,
                                    <strong> FIR Quashing</strong>, and <strong>Criminal Trials</strong> with a proven track record of 300+ successful bail applications
                                    and case dismissals.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Need a Criminal Advocate Near Me?</h3>
                                <p className="text-gray-400">
                                    We are available 24/7 for urgent matters. If you are searching for a "<strong>Criminal Defence Lawyer Near Me</strong>"
                                    or need an advocate at <strong>Nampally Criminal Court</strong> or <strong>Medchal Court</strong>, our team is ready to assist immediately.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">How to handle a Cheque Bounce Case?</h3>
                                <p className="text-gray-400">
                                    We are experts as a <strong>138 NI Act Lawyer</strong>. We help you send legal notices, file complaints,
                                    or defend against false cheque bounce accusations.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">What is the success rate for anticipatory bail applications?</h3>
                                <p className="text-gray-400">
                                    As a <strong>Top Anticipatory Bail Advocate in Hyderabad</strong>, we have an 80% success rate for anticipatory bail applications
                                    in the High Court. Our <strong>Professional Criminal Lawyer</strong> team provides urgent legal assistance for
                                    <strong> 498A cases</strong>, <strong>Domestic Violence</strong> allegations, and other non-cognizable offenses,
                                    with expertise in drafting compelling petitions and effective court representation.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Do you handle 498A defense and FIR quashing?</h3>
                                <p className="text-gray-400">
                                    Yes, we are <strong>Experienced 498A Lawyers</strong> and <strong>Expert FIR Quash Advocates</strong>.
                                    Our <strong>Trusted Criminal Case Lawyer</strong> team has successfully quashed 100+ FIRs under Section 482 CrPC
                                    in the Telangana High Court. We provide comprehensive defense for false accusations including <strong>498A cruelty</strong>,
                                    <strong> Domestic Violence</strong>, and <strong>dowry harassment</strong> cases.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Affordable Criminal Lawyer?</h3>
                                <p className="text-gray-400">
                                    We believe justice should be accessible. We operate as an <strong>Affordable Advocate</strong> providing
                                    high-quality representation for Bail and Criminal Trials without exorbitant fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CriminalLaw
