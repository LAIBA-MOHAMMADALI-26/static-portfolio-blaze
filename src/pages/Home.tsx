
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Brain, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const products = [
    {
      name: 'MonetX',
      description: 'Advanced financial automation platform for enterprise-grade transactions',
      slug: 'monetx',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['Real-time Analytics', 'Automated Compliance', 'Risk Management']
    },
    {
      name: 'SupportX',
      description: 'AI-powered customer support solution with intelligent routing',
      slug: 'supportx',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      features: ['24/7 AI Support', 'Smart Ticketing', 'Multi-channel']
    },
    {
      name: 'GreenX',
      description: 'Sustainable energy management system for carbon neutrality',
      slug: 'greenx',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      features: ['Energy Optimization', 'Carbon Tracking', 'Cost Reduction']
    },
    {
      name: 'MapX',
      description: 'Intelligent mapping and analytics platform with real-time insights',
      slug: 'mapx',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['Geospatial Analysis', 'Live Tracking', 'Predictive Modeling']
    },
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '50M+', label: 'Transactions Daily' },
    { value: '150+', label: 'Countries Served' }
  ];

  const testimonials = [
    {
      quote: "TechCorp's automation solutions transformed our entire workflow. Productivity increased by 300%.",
      author: "Sarah Chen",
      role: "CTO, Global Finance Corp",
      rating: 5
    },
    {
      quote: "The AI-powered insights have revolutionized our decision-making process.",
      author: "Michael Rodriguez",
      role: "CEO, InnovateTech",
      rating: 5
    },
    {
      quote: "Exceptional support and cutting-edge technology. Highly recommended.",
      author: "Emily Watson",
      role: "Director of Operations, NextGen",
      rating: 5
    }
  ];

  return (
    <div className="pt-16 bg-brand-darker">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-brand-darker to-brand-neutral py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-light/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-accent">
                Redefined
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge cloud security, network automation, 
              and AI-powered technologies that drive unprecedented innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white font-semibold px-8 py-3 text-lg">
                <Link to="/products">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark px-8 py-3 text-lg">
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-light mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your enterprise automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.slug} className="group bg-brand-dark/50 border-brand-light/20 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/20">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white group-hover:text-brand-light transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-brand-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center text-brand-light hover:text-brand-accent font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert consultation and implementation services to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-brand-darker to-brand-neutral border-brand-light/20 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Cloud & Security Automation</CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  Secure, scalable cloud infrastructure with automated security protocols and compliance monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="text-brand-light hover:text-brand-accent font-medium inline-flex items-center transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-darker to-brand-neutral border-brand-light/20 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Network Automation</CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  Streamline network operations with intelligent automation, monitoring, and optimization tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="text-brand-light hover:text-brand-accent font-medium inline-flex items-center transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-darker to-brand-neutral border-brand-light/20 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-4">Generative AI</CardTitle>
                <CardDescription className="text-gray-300 mb-4">
                  Harness the power of AI to automate complex processes and generate intelligent insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/services" className="text-brand-light hover:text-brand-accent font-medium inline-flex items-center transition-colors">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what our clients say about their transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-brand-dark/50 border-brand-light/20 hover:border-brand-accent/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-accent fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust our solutions to drive their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 text-lg">
              <Link to="/use-cases">View Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
