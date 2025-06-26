
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const timeline = [
    { year: '2015', title: 'Company Founded', description: 'Started with a vision to revolutionize enterprise automation' },
    { year: '2017', title: 'First Product Launch', description: 'Launched MonetX, our flagship financial automation platform' },
    { year: '2019', title: 'AI Integration', description: 'Integrated advanced AI capabilities across all product lines' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded operations to serve clients across 25+ countries' },
    { year: '2023', title: 'Sustainability Focus', description: 'Launched GreenX to help organizations achieve carbon neutrality' },
    { year: '2024', title: 'Innovation Leadership', description: 'Recognized as industry leader in enterprise automation' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Engineering at leading cloud platform with 15+ years in enterprise software.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c955?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'AI researcher and former Principal Engineer at major tech company specializing in automation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      name: 'Emma Thompson',
      role: 'Chief Product Officer',
      bio: 'Product strategist with expertise in enterprise software and user experience design.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'David Park',
      role: 'Chief Operating Officer',
      bio: 'Operations expert with track record of scaling enterprise software companies globally.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional quality in everything we do, exceeding customer expectations consistently.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles in all our business practices.',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'We\'re committed to environmental responsibility and helping our clients achieve their sustainability goals.',
      icon: '🌱'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About TechCorp
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform how enterprises operate through intelligent automation, 
              AI-powered solutions, and sustainable technology practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower organizations worldwide with intelligent automation solutions that drive efficiency, 
                innovation, and sustainable growth. We believe that the right technology can transform not just 
                businesses, but entire industries.
              </p>
              <p className="text-lg text-gray-600">
                Through our comprehensive suite of products and services, we help enterprises automate complex 
                processes, make data-driven decisions, and achieve their strategic objectives while maintaining 
                the highest standards of security and compliance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the global leader in enterprise automation, creating a future where intelligent 
                technology seamlessly integrates with human expertise to solve the world's most complex 
                business challenges.
              </p>
              <p className="text-gray-700">
                We envision a world where every organization, regardless of size or industry, has access 
                to advanced automation capabilities that drive growth, sustainability, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and evolution as a technology leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced leaders driving our vision and strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our impact and growth in the enterprise automation space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Client Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your organization with intelligent automation? Let's explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

export default About;
