
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UseCases = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Technology'];

  const useCases = [
    {
      title: 'High-Frequency Trading Automation',
      category: 'Financial Services',
      description: 'Automated trading systems processing millions of transactions with microsecond latency and 99.99% accuracy.',
      challenge: 'Manual trading processes were too slow and prone to human error in volatile markets.',
      solution: 'Implemented MonetX platform with AI-powered risk assessment and automated execution.',
      results: ['90% reduction in trade execution time', '99.99% accuracy rate', '60% increase in trading volume'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      products: ['MonetX']
    },
    {
      title: 'Patient Care Automation',
      category: 'Healthcare',
      description: '24/7 patient support system with intelligent triage and automated care coordination.',
      challenge: 'Overwhelmed healthcare staff struggling to provide timely patient support.',
      solution: 'Deployed SupportX with healthcare-specific AI models and integration with EHR systems.',
      results: ['75% reduction in response time', '40% improvement in patient satisfaction', '50% decrease in staff workload'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      products: ['SupportX']
    },
    {
      title: 'Smart Factory Operations',
      category: 'Manufacturing',
      description: 'Comprehensive automation of manufacturing processes with predictive maintenance and quality control.',
      challenge: 'Frequent equipment failures and quality issues causing costly production delays.',
      solution: 'Integrated GreenX for energy management and predictive maintenance across all production lines.',
      results: ['35% reduction in energy costs', '90% decrease in unplanned downtime', '25% improvement in product quality'],
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      products: ['GreenX', 'MonetX']
    },
    {
      title: 'Supply Chain Optimization',
      category: 'Retail',
      description: 'Real-time supply chain visibility with automated route optimization and inventory management.',
      challenge: 'Complex global supply chain with limited visibility and inefficient routing.',
      solution: 'Implemented MapX for route optimization and real-time tracking of shipments.',
      results: ['40% reduction in delivery times', '25% lower fuel costs', '95% improvement in delivery accuracy'],
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      products: ['MapX']
    },
    {
      title: 'Cloud Infrastructure Automation',
      category: 'Technology',
      description: 'Complete automation of cloud deployment, scaling, and security management.',
      challenge: 'Manual cloud operations causing delays, security vulnerabilities, and cost overruns.',
      solution: 'Deployed comprehensive cloud automation solution with AI-powered optimization.',
      results: ['80% faster deployment time', '90% improvement in security posture', '50% reduction in cloud costs'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      products: ['All Products']
    },
    {
      title: 'Customer Service Revolution',
      category: 'Technology',
      description: 'AI-powered customer service transformation with multilingual support and sentiment analysis.',
      challenge: 'Growing customer base overwhelming traditional support channels.',
      solution: 'Implemented SupportX with advanced NLP and integration across all customer touchpoints.',
      results: ['24/7 support availability', '85% first-contact resolution', '60% cost reduction'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      products: ['SupportX']
    }
  ];

  const filteredUseCases = selectedCategory === 'All' 
    ? useCases 
    : useCases.filter(useCase => useCase.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Use Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how organizations across industries are transforming their operations with our automation solutions. Explore proven success stories and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                      {useCase.category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {useCase.products.map((product) => (
                        <span key={product} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {useCase.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <div className="space-y-2">
                        {useCase.results.map((result, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Impact Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions deliver measurable results for organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Average Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Average Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of organizations that have transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
