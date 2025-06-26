
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock service data - in a real app, this would come from an API or data file
  const services: Record<string, any> = {
    'cloud-security': {
      name: 'Cloud & Security Automation',
      tagline: 'Secure, Scalable Cloud Infrastructure',
      description: 'Transform your cloud operations with enterprise-grade automation that ensures security, compliance, and optimal performance across multi-cloud environments.',
      hero_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
      overview: 'Our Cloud & Security Automation service provides end-to-end solutions for modern cloud infrastructure management. We help organizations achieve unprecedented levels of security, compliance, and operational efficiency through intelligent automation and proven best practices.',
      approach: [
        'Infrastructure Assessment & Planning',
        'Security Framework Implementation',
        'Automated Deployment Pipelines',
        'Continuous Monitoring & Optimization',
        'Compliance & Governance Setup',
        'Team Training & Knowledge Transfer'
      ],
      deliverables: [
        'Fully automated cloud infrastructure',
        'Comprehensive security framework',
        'CI/CD pipeline implementation',
        'Monitoring and alerting systems',
        'Compliance documentation',
        'Team training materials'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Ansible']
    },
    'network-automation': {
      name: 'Network Automation',
      tagline: 'Intelligent Network Operations',
      description: 'Revolutionize your network infrastructure with intelligent automation that reduces downtime, improves performance, and streamlines operations across your entire network ecosystem.',
      hero_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      overview: 'Network Automation services deliver comprehensive solutions for modern network management challenges. Our approach combines cutting-edge automation tools with deep networking expertise to create self-healing, self-optimizing network infrastructures.',
      approach: [
        'Network Discovery & Documentation',
        'Automation Strategy Development',
        'Tool Selection & Implementation',
        'Configuration Management Setup',
        'Monitoring & Analytics Deployment',
        'Process Optimization & Training'
      ],
      deliverables: [
        'Automated network configuration management',
        'Real-time monitoring dashboard',
        'Predictive maintenance systems',
        'Performance optimization tools',
        'Documentation and runbooks',
        'Staff training and certification'
      ],
      technologies: ['Python', 'Ansible', 'NETCONF', 'RESTCONF', 'Cisco DNA', 'Juniper Contrail', 'SD-WAN', 'Network APIs']
    },
    'generative-ai': {
      name: 'Generative AI',
      tagline: 'AI-Powered Business Transformation',
      description: 'Unlock the potential of generative artificial intelligence to automate processes, enhance creativity, and drive innovation across your organization with custom AI solutions.',
      hero_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      overview: 'Our Generative AI services help organizations harness the transformative power of artificial intelligence. We design and implement custom AI solutions that automate complex tasks, generate valuable insights, and create new opportunities for innovation and growth.',
      approach: [
        'AI Readiness Assessment',
        'Use Case Identification & Prioritization',
        'Custom Model Development',
        'Integration & Deployment',
        'Performance Monitoring & Optimization',
        'Scaling & Governance Framework'
      ],
      deliverables: [
        'Custom AI models and applications',
        'Integration with existing systems',
        'Performance monitoring dashboard',
        'AI governance framework',
        'Training and documentation',
        'Ongoing optimization plan'
      ],
      technologies: ['OpenAI GPT', 'Anthropic Claude', 'Google Gemini', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'Vector Databases']
    }
  };

  const service = slug ? services[slug] : null;

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-blue-600 font-medium mb-6">
                {service.tagline}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div>
              <img
                src={service.hero_image}
                alt={service.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Service Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Approach & Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
              <div className="space-y-4">
                {service.approach.map((step: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Deliverables</h2>
              <div className="space-y-4">
                {service.deliverables.map((deliverable: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2"></div>
                    <p className="text-gray-700">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage industry-leading tools and platforms to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.technologies.map((tech: string, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-4"></div>
                <p className="font-medium text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Discuss Your {service.name} Needs
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to learn how we can help transform your operations.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Schedule Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
