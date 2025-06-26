
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      name: 'MonetX',
      slug: 'monetx',
      tagline: 'Advanced Financial Automation Platform',
      description: 'Streamline your financial operations with AI-powered automation, real-time analytics, and comprehensive compliance management.',
      features: ['Automated Transaction Processing', 'Risk Assessment & Compliance', 'Real-time Financial Analytics', 'Multi-currency Support'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'Financial'
    },
    {
      name: 'SupportX',
      slug: 'supportx',
      tagline: 'AI-Powered Customer Support Solution',
      description: 'Transform customer service with intelligent chatbots, automated ticket routing, and predictive support analytics.',
      features: ['24/7 AI Customer Support', 'Intelligent Ticket Routing', 'Multi-channel Integration', 'Predictive Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'Customer Service'
    },
    {
      name: 'GreenX',
      slug: 'greenx',
      tagline: 'Sustainable Energy Management System',
      description: 'Optimize energy consumption and reduce carbon footprint with smart monitoring, predictive maintenance, and sustainability reporting.',
      features: ['Smart Energy Monitoring', 'Carbon Footprint Tracking', 'Predictive Maintenance', 'Sustainability Reporting'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      category: 'Energy'
    },
    {
      name: 'MapX',
      slug: 'mapx',
      tagline: 'Intelligent Mapping & Analytics Platform',
      description: 'Advanced geospatial analytics and mapping solutions for data visualization, route optimization, and location intelligence.',
      features: ['Real-time Mapping', 'Geospatial Analytics', 'Route Optimization', 'Location Intelligence'],
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
      category: 'Analytics'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Product Suite
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed to automate, optimize, and transform your business operations across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={product.slug} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}>
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/products/${product.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can create tailored solutions that perfectly fit your unique business requirements.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">
              Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
