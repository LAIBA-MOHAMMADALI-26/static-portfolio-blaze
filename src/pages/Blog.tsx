
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogData from '@/data/blog.json';

const Blog = () => {
  const posts = blogData.posts;
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and innovations in enterprise automation, cloud security, and AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-200 bg-blue-500/30 rounded-full">
                    Featured Post
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-blue-200">{posts[0].author}</span>
                    <span className="text-blue-300">•</span>
                    <span className="text-blue-200">{posts[0].readTime}</span>
                  </div>
                  <span className="text-blue-200">{new Date(posts[0].date).toLocaleDateString()}</span>
                </div>
                <Link
                  to={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      post.category === 'AI' ? 'text-purple-600 bg-purple-100' :
                      post.category === 'Security' ? 'text-red-600 bg-red-100' :
                      post.category === 'Automation' ? 'text-blue-600 bg-blue-100' :
                      'text-green-600 bg-green-100'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700 font-medium">{post.author}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights on automation, AI, and cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
