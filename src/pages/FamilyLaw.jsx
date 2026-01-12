import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { generateLegalSchema } from '../utils/SchemaGenerator'
import { FaHeartBroken, FaChild, FaHandHoldingHeart, FaHome, FaGavel, FaUserShield } from 'react-icons/fa'

const FamilyLaw = () => {
    const schema = generateLegalSchema(
        'LegalService',
        'Best Family Court Advocate & Top Divorce Lawyer Hyderabad',
        'Top-rated Family Court Advocate in Hyderabad specializing in Mutual/Contested Divorce, Child Custody, Alimony, and 498A defense.',
        'https://jhlawfirm.com/family-law'
    )

    const services = [
        {
            title: 'Divorce Proceedings',
            icon: <FaHeartBroken />,
            desc: 'Expert legal representation for both Mutual Consent Divorce and Contested Divorce cases in Hyderabad Family Courts.',
            keywords: ['Mutual Divorce Advocate', 'Contested Divorce Lawyer', 'Divorce Lawyer in Hyderabad']
        },
        {
            title: 'Child Custody & Visitation',
            icon: <FaChild />,
            desc: 'Securing your child’s future with strategic custody battles. We fight for your parental rights and visitation orders.',
            keywords: ['Best Child Custody Lawyer', 'Child Custody Advocate Hyderabad']
        },
        {
            title: 'Maintenance & Alimony',
            icon: <FaHandHoldingHeart />,
            desc: 'Ensuring fair maintenance (125 CrPC) and alimony settlements for wives, children, and dependent parents.',
            keywords: ['Maintenance Case Advocate', 'Alimony Advocate', '125 CrPC Lawyer']
        },
        {
            title: 'Domestic Violence (DV Act)',
            icon: <FaUserShield />,
            desc: 'Strong defense and prosecution in Domestic Violence cases. Protection orders and residence orders.',
            keywords: ['Domestic Violence Case Advocate', 'Domestic Violence Lawyer Hyderabad']
        },
        {
            title: 'Restitution of Conjugal Rights',
            icon: <FaHome />,
            desc: 'Legal support for RCR petitions to restore marriage and cohabitation.',
            keywords: ['Family Court Advocate', 'Family Disputes Advocate']
        },
        {
            title: '498A Defense / Bail',
            icon: <FaGavel />,
            desc: 'Specialized defense for 498A cruelty cases, including anticipatory bail and quashing of FIRs.',
            keywords: ['498A Lawyer', 'Family Disputes Lawyer']
        }
    ]

    return (
        <>
            <SEO
                title="Best Divorce Lawyer in Hyderabad | Family Court Advocate"
                description="Top-rated Family Court Advocate in Hyderabad. Expert in Mutual Divorce, Contested Divorce, Child Custody, Alimony, 498A Defense & Domestic Violence. Affordable, Experienced, Professional Family Lawyer Near You. Free Consultation."
                keywords="Family Court Advocate in Hyderabad, Best Divorce Lawyer, Top Divorce Lawyer, Experienced Divorce Lawyer, Affordable Divorce Lawyer, Divorce Lawyer Near Me, Child Custody Lawyer, Maintenance Advocate, Alimony Advocate, 498A Lawyer, Domestic Violence Advocate, Mutual Divorce Advocate, Contested Divorce Lawyer"
                canonicalUrl="/family-law"
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
                        Best Family Court Advocate in Hyderabad
                    </motion.h1>
                    <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-8 relative z-10">
                        Compassionate & Aggressive Legal Representation for Divorce, Child Custody, and Family Disputes.
                        Trusted by 500+ families for achieving favorable outcomes.
                    </p>
                </section>

                {/* SERVICES GRID */}
                <section className="px-6 lg:px-12 py-12">
                    <div className="container-max mx-auto">
                        <h2 className="text-3xl font-serif text-gold-400 mb-12 text-center">Our Specialized Family Law Services</h2>
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
                        <h2 className="text-3xl lg:text-4xl font-serif gold-text">Why Hire the Best Divorce Lawyer in Hyderabad?</h2>
                        <p className="leading-relaxed text-lg">
                            Family disputes are emotionally draining and legally complex. Whether it's a
                            <strong> Mutual Consent Divorce</strong> requiring quick resolution or a high-stakes
                            <strong> Contested Divorce</strong> involving <strong>Alimony</strong> and <strong>Child Custody</strong>,
                            you need an <strong>Experienced Family Court Advocate</strong> who understands the nuances of the Hindu Marriage Act,
                            Special Marriage Act, and Domestic Violence Act.
                        </p>
                        <p className="leading-relaxed text-lg">
                            Our team provides strategic counsel for <strong>125 CrPC Maintenance Cases</strong>, ensuring protecting your financial rights.
                            We are recognized as a <strong>Trusted Divorce Lawyer in Hyderabad</strong> for our high success rate in mediation and litigation.
                        </p>

                        <div className="bg-gold-400/5 p-8 rounded-xl border border-gold-400/20 mt-8">
                            <h3 className="text-2xl text-gold-400 font-serif mb-4">Areas We Serve</h3>
                            <p className="text-gray-300">
                                We represent clients across all Family Courts in Hyderabad, including:
                                <br />
                                <span className="text-white font-medium">City Civil Court, Secunderabad, L.B. Nagar Family Court, Kukatpally, Miyapur, and Ranga Reddy District Court.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION for Long-Tail Keywords */}
                <section className="px-6 lg:px-12 py-16 bg-deep-black">
                    <div className="container-max mx-auto max-w-4xl">
                        <h2 className="text-3xl font-serif text-gold-400 mb-8 text-center">Common Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Who is the best divorce lawyer in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    We are recognized as one of the <strong>Best Divorce Lawyers in Hyderabad</strong> with over 18 years of experience.
                                    Our <strong>Top Family Court Advocate</strong> team has successfully handled 500+ divorce cases with a 98% success rate,
                                    specializing in both <strong>Mutual Divorce</strong> and <strong>Contested Divorce</strong> proceedings.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Looking for an Affordable Divorce Lawyer in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    We understand that legal battles can be expensive. We pride ourselves on being an
                                    <strong> Affordable Family Court Advocate</strong> offering transparent fee structures for both
                                    <strong> Mutual Divorce</strong> and <strong>Contested Divorce</strong> cases.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Need a Family Court Advocate Near Me?</h3>
                                <p className="text-gray-400">
                                    Our office is centrally located, but we appear in all local courts including <strong>Kukatpally</strong>,
                                    <strong> Miyapur</strong>, and <strong>LB Nagar</strong>. If you are searching for a
                                    "<strong>Family Court Advocate Near Me</strong>", our team provides accessible legal support across the city.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">How much does a family court advocate cost in Hyderabad?</h3>
                                <p className="text-gray-400">
                                    As a <strong>Professional Family Court Advocate</strong>, our fees vary based on case complexity.
                                    <strong> Mutual Divorce</strong> cases typically range from ₹15,000-₹35,000, while <strong>Contested Divorce</strong>
                                    and <strong>Child Custody</strong> cases may range from ₹50,000-₹2,00,000. We offer free initial consultation
                                    to discuss your case and provide transparent pricing.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">What is the success rate for child custody cases?</h3>
                                <p className="text-gray-400">
                                    Our <strong>Expert Child Custody Lawyer</strong> team has an 85% success rate in custody battles.
                                    As a <strong>Leading Family Court Advocate in Hyderabad</strong>, we focus on the best interests of the child
                                    while protecting your parental rights. We handle custody disputes, visitation rights modification, and
                                    <strong> guardianship cases</strong> across all Hyderabad Family Courts.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Expert Counsel for Alimony & Maintenance?</h3>
                                <p className="text-gray-400">
                                    As a <strong>Top Maintenance Case Advocate</strong> and <strong>Expert Alimony Advocate in Hyderabad</strong>,
                                    we ensure you get fair alimony based on Section 24 and 25 of Hindu Marriage Act or <strong>125 CrPC</strong>.
                                    We also specialize in defending against false <strong>Domestic Violence</strong> claims and provide
                                    strategic representation for <strong>maintenance disputes</strong>.
                                </p>
                            </div>
                            <div className="bg-gray-900/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-xl text-off-white font-bold mb-2">Do you handle 498A and Domestic Violence cases?</h3>
                                <p className="text-gray-400">
                                    Yes, we are <strong>Experienced Domestic Violence Case Advocates</strong> providing both prosecution and defense.
                                    Our <strong>Trusted Family Disputes Advocate</strong> team handles <strong>498A cruelty cases</strong>,
                                    <strong>Protection orders</strong>, and <strong>DV Act violations</strong>. We provide 24/7 legal support
                                    for urgent matters and have successfully defended 200+ domestic violence cases.
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
                                to="/civil-law"
                                className="px-6 py-3 bg-deep-black border border-gold-400/20 text-off-white rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all"
                            >
                                Property & Civil Disputes →
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

export default FamilyLaw

