
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-lg shadow-xl border-b border-brand-accent/20' : 'bg-brand-dark/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-accent to-brand-light rounded-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
                TechCorp
              </span>
              <div className="text-xs text-brand-light/70 font-medium">Innovation Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg'
                    : 'text-brand-light hover:text-white hover:bg-brand-accent/20'
                }`}
              >
                {item.name}
                {!isActive(item.path) && (
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-light hover:text-white hover:bg-brand-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-brand-darker/95 backdrop-blur-lg border-t border-brand-accent/20 rounded-b-2xl shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg'
                      : 'text-brand-light hover:text-white hover:bg-brand-accent/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
