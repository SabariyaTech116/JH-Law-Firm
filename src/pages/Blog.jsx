const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding Corporate Compliance in India',
      excerpt: 'A comprehensive guide to corporate compliance requirements and best practices for Indian businesses.',
      date: 'January 15, 2024',
      category: 'Corporate Law',
      readTime: '8 min read'
    },
    {
      title: 'Recent Amendments in Family Law',
      excerpt: 'Key changes in family law legislation and their impact on divorce and custody proceedings.',
      date: 'January 10, 2024',
      category: 'Family Law',
      readTime: '6 min read'
    },
    {
      title: 'Property Rights and Documentation',
      excerpt: 'Essential documentation required for property transactions and common pitfalls to avoid.',
      date: 'January 5, 2024',
      category: 'Property Law',
      readTime: '10 min read'
    },
    {
      title: 'Criminal Law Reforms: What You Need to Know',
      excerpt: 'Analysis of recent criminal law reforms and their implications for legal practice.',
      date: 'December 28, 2023',
      category: 'Criminal Law',
      readTime: '7 min read'
    },
    {
      title: 'Intellectual Property Protection Strategies',
      excerpt: 'Effective strategies for protecting intellectual property rights in the digital age.',
      date: 'December 20, 2023',
      category: 'IP Law',
      readTime: '9 min read'
    },
    {
      title: 'Civil Litigation: Best Practices',
      excerpt: 'Key considerations and best practices for successful civil litigation outcomes.',
      date: 'December 15, 2023',
      category: 'Civil Law',
      readTime: '5 min read'
    }
  ]

  const categories = ['All', 'Corporate Law', 'Family Law', 'Property Law', 'Criminal Law', 'IP Law', 'Civil Law']

  return (
    <div className="pt-20">
      <section className="page-padding bg-deep-black">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold gold-text mb-8">
              Legal Insights & Blog
            </h1>
            <p className="text-xl text-off-white max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest legal developments, insights, and expert analysis 
              from our experienced legal professionals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 border border-gold-400/30 text-off-white hover:border-gold-400 hover:text-gold-400 transition-all duration-300 ${
                  index === 0 ? 'bg-gold-400/10 text-gold-400 border-gold-400' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-gradient-to-b from-gray-900 to-deep-black border border-gold-400/20 overflow-hidden hover:border-gold-400/40 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gold-400/20 text-gold-400 text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-off-white/60 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold gold-text mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-off-white leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-off-white/60 text-sm">{post.date}</span>
                    <button className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-black transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="page-padding bg-gradient-to-b from-deep-black to-gray-900">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold gold-text mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-off-white max-w-2xl mx-auto">
              Get the latest legal insights and updates delivered directly to your inbox.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-deep-black border border-gold-400/30 text-off-white focus:border-gold-400 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gold-gradient text-deep-black font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog