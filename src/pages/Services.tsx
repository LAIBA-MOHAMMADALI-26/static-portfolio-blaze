
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      name: 'Cloud & Security Automation',
      slug: 'cloud-security',
      description: 'Comprehensive cloud infrastructure automation with enterprise-grade security protocols, compliance monitoring, and automated incident response.',
      features: [
        'Infrastructure as Code (IaC)',
        'Automated Security Scanning',
        'Compliance Monitoring',
        'Incident Response Automation',
        'Multi-cloud Management',
        'Identity & Access Management'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve security posture by 90%',
        'Ensure 100% compliance',
        'Lower operational costs by 50%'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    },
    {
      name: 'Network Automation',
      slug: 'network-automation',
      description: 'Intelligent network operations with automated configuration management, performance optimization, and predictive maintenance capabilities.',
      features: [
        'Network Configuration Management',
        'Automated Monitoring & Alerting',
        'Performance Optimization',
        'Predictive Maintenance',
        'Zero-touch Provisioning',
        'SD-WAN Management'
      ],
      benefits: [
        'Reduce network downtime by 95%',
        'Improve performance by 60%',
        'Lower maintenance costs by 70%',
        'Accelerate deployment by 75%'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      name: 'Generative AI',
      slug: 'generative-ai',
      description: 'Harness the power of generative artificial intelligence to automate content creation, enhance decision-making, and drive innovation across your organization.',
      features: [
        'Custom AI Model Development',
        'Content Generation & Automation',
        'Intelligent Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      benefits: [
        'Increase productivity by 3x',
        'Automate 80% of routine tasks',
        'Improve decision accuracy by 85%',
        'Accelerate innovation cycles'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert consultation and implementation services to accelerate your digital transformation journey with proven methodologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.slug} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities:</h3>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Services:</h3>
                      <ul className="space-y-2">
                        {service.features.slice(3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Outcomes:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery and optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive analysis of your current infrastructure and requirements' },
              { step: '02', title: 'Strategy', description: 'Develop a customized roadmap aligned with your business objectives' },
              { step: '03', title: 'Implementation', description: 'Execute the solution with minimal disruption to your operations' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and optimization for peak performance' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your automation and digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/use-cases">View Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
