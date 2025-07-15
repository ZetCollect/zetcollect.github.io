import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const timeoutRef = useRef(null);
  const location = useLocation();

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'sw', label: 'Kiswahili', flag: '🇰🇪' },
  ];

  const navigation = [
    { name: t('nav.home') || 'Home', href: '/', hash: '#hero' },
    { name: t('nav.features') || 'Features', href: '/', hash: '#features' },
    { name: t('nav.why') || 'Why ZetCollect', href: '/', hash: '#why-zetcollect' },
    { name: t('nav.upcoming') || 'Upcoming', href: '/', hash: '#upcoming' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/FAQPage' },
    { name: 'Customer Support', href: '/Customer-Support-Page' },
    { name: 'Training and Certification', href: '/Work-in-Progress-Page' },
  ];

  const handleMouseEnterSupport = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsSupportOpen(true);
  };

  const handleMouseLeaveSupport = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSupportOpen(false);
    }, 200);
  };

  const handleMouseEnterLang = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsLangOpen(true);
  };

  const handleMouseLeaveLang = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLangOpen(false);
    }, 200);
  };

  const handleNavClick = (href, hash, e) => {
    if (location.pathname === '/' && hash) {
      e.preventDefault();
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on the homepage or no hash, let the Link handle navigation
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="text-sm text-white bg-primary">
        <div className="flex items-center justify-end h-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex space-x-6">
            <div
              className="relative group"
              onMouseEnter={handleMouseEnterSupport}
              onMouseLeave={handleMouseLeaveSupport}
            >
              <button
                className="flex items-center text-gray-300 transition-colors cursor-pointer hover:text-white"
                aria-label="Open support menu"
              >
                SUPPORT
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isSupportOpen && (
                <div
                  className="absolute right-0 z-10 w-64 py-1 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={handleMouseEnterSupport}
                  onMouseLeave={handleMouseLeaveSupport}
                >
                  {supportLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={() => setIsSupportOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={handleMouseEnterLang}
              onMouseLeave={handleMouseLeaveLang}
            >
              <button
                className="flex items-center space-x-1 text-gray-300 transition-colors hover:text-white"
                aria-label="Open language menu"
              >
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div
                  className="absolute right-0 z-10 w-64 py-1 mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={handleMouseEnterLang}
                  onMouseLeave={handleMouseLeaveLang}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-secondary ${
                        language === lang.code ? 'bg-orange-50 text-secondary' : 'text-gray-700'
                      }`}
                      aria-label={`Select ${lang.label} language`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-[200px] h-auto" src="/applogo.png" alt="Company Logo" />
          </Link>

          <div className="items-center hidden space-x-4 lg:flex">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href + (item.hash || '')}
                  onClick={(e) => handleNavClick(item.href, item.hash, e)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-Complementary"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/80"
            >
              Request Demo
            </a>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-secondary"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="py-4 border-t border-gray-200 lg:hidden">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href + (item.hash || '')}
                  onClick={(e) => {
                    handleNavClick(item.href, item.hash, e);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 mt-4 font-medium text-center text-white transition-colors rounded-lg bg-secondary hover:bg-secondary/80"
              >
                {t('nav.login') || 'Login'}
              </Link>
              <a
                href="#demo"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 mt-4 font-medium text-center text-white transition-colors rounded-lg bg-primary hover:bg-primary/80"
              >
                Request Demo
              </a>
            </div>

            <div className="pt-4 mt-4 space-y-2 text-gray-700 border-t border-gray-200">
              <span className="block px-3 text-xs font-semibold text-gray-500 uppercase">Utility Links</span>
              <Link to="#" className="block px-3 py-1 hover:bg-gray-50">
                SEARCH
              </Link>

              <div className="relative px-3 py-1">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-secondary"
                  aria-label="Open language menu"
                >
                  <span>{languages.find((l) => l.code === language)?.flag}</span>
                  <span>{language.toUpperCase()}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLangOpen && (
                  <div className="mt-2 space-y-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`flex items-center space-x-2 w-full text-left px-3 py-1 text-sm hover:bg-gray-100 hover:text-secondary ${
                          language === lang.code ? 'bg-orange-50 text-secondary' : 'text-gray-600'
                        }`}
                        aria-label={`Select ${lang.label} language`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="pl-4 space-y-2">
                <span className="block text-sm font-semibold text-gray-500">SUPPORT</span>
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-gray-600 hover:text-secondary hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;