
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogData from '@/data/blog.json';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Convert markdown-style content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6">{paragraph.slice(2)}</h1>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{paragraph.slice(3)}</h2>;
        }
        if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(4)}</h3>;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return <p key={index} className="font-bold text-gray-900 mb-4">{paragraph.slice(2, -2)}</p>;
        }
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              {items.map((item, idx) => (
                <li key={idx}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index} className="text-gray-700 mb-6 leading-relaxed">{paragraph}</p>;
      });
  };

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                post.category === 'AI' ? 'text-purple-600 bg-purple-100' :
                post.category === 'Security' ? 'text-red-600 bg-red-100' :
                post.category === 'Automation' ? 'text-blue-600 bg-blue-100' :
                'text-green-600 bg-green-100'
              }`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{post.author}</h4>
                <p className="text-gray-600">
                  Technology writer and industry expert specializing in enterprise automation and cloud technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.posts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
