import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (item.hash && location.pathname === '/') {
      // If we're on the home page and there's a hash, scroll to the section
      setTimeout(() => {
        const element = document.querySelector(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const isActive = (item) => {
    if (item.path !== '/' && location.pathname === item.path) return true;
    if (item.path === '/' && location.pathname === '/' && !item.hash) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur border-b border-gray-200 dark:border-gray-700' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-poppins font-bold text-xl text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Jeet Anil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path + item.hash}
                onClick={() => handleNavClick(item)}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://jeetanil.com/Jeet_Anil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path + item.hash}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isActive(item)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://jeetanil.com/Jeet_Anil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
