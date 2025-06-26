
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-dark via-brand-darker to-brand-neutral text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-light rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-accent to-brand-light rounded-xl opacity-30 -z-10"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
                  TechCorp
                </span>
                <div className="text-xs text-brand-light/70 font-medium">Innovation Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of enterprise automation solutions, cloud security, and AI-powered technologies. 
              Transforming businesses through intelligent innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group">
                <div className="w-10 h-10 bg-brand-light/20 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <div className="w-5 h-5 bg-white/80 rounded-sm"></div>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-brand-light/20 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <div className="w-5 h-5 bg-white/80 rounded-sm"></div>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-brand-light/20 hover:bg-brand-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <div className="w-5 h-5 bg-white/80 rounded-sm"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-6 relative">
              Products
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-accent to-brand-light"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/products/monetx" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">MonetX</Link></li>
              <li><Link to="/products/supportx" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">SupportX</Link></li>
              <li><Link to="/products/greenx" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">GreenX</Link></li>
              <li><Link to="/products/mapx" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">MapX</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-brand-accent to-brand-light"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-light transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-light/20">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} TechCorp. All rights reserved. Powered by innovation and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
