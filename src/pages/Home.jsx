import Hero from '../components/Hero'
import PracticeAreasStrip from '../components/PracticeAreasStrip'
import WhoWeAre from '../components/WhoWeAre'
import WhyChooseUs from '../components/WhyChooseUs'
import MeetOurLawyers from '../components/MeetOurLawyers'
import ConsultationForm from '../components/ConsultationForm'
import ContactInfoStrip from '../components/ContactInfoStrip'

// Simple Blog Preview Component
const BlogPreview = () => {
  const featuredPosts = [
    {
      title: 'Understanding Corporate Compliance in India',
      excerpt: 'A comprehensive guide to corporate compliance requirements and best practices.',
      date: 'January 15, 2024',
      category: 'Corporate Law'
    },
    {
      title: 'Recent Amendments in Family Law',
      excerpt: 'Key changes in family law legislation and their impact on proceedings.',
      date: 'January 10, 2024',
      category: 'Family Law'
    },
    {
      title: 'Property Rights and Documentation',
      excerpt: 'Essential documentation required for property transactions.',
      date: 'January 5, 2024',
      category: 'Property Law'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold gold-text mb-6">
            Latest Legal Insights
          </h2>
          <p className="text-lg text-off-white max-w-2xl mx-auto">
            Stay informed with expert analysis and legal updates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="bg-gradient-to-b from-gray-900 to-deep-black border border-gold-400/20 p-6 hover:border-gold-400/40 transition-all duration-300">
              <span className="px-3 py-1 bg-gold-400/20 text-gold-400 text-sm font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h3 className="text-xl font-serif font-bold gold-text mb-3">
                {post.title}
              </h3>
              <p className="text-off-white mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-off-white/60 text-sm">{post.date}</span>
                <button className="text-gold-400 hover:text-gold-300 transition-colors">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <ContactInfoStrip />
      <WhoWeAre />
      <PracticeAreasStrip />
      <WhyChooseUs />
      <MeetOurLawyers />
      <BlogPreview />
      <ConsultationForm />
    </>
  )
}

export default Home