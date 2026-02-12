import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StatusNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl text-custom-green inter-character">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - same size as main navbar */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              className="w-[200px] h-auto"
              src="/applogo.png"
              alt="ZetScore Home"
            />
          </Link>

          {/* Desktop menu - same font style as main navbar */}
          <div className="items-center hidden space-x-4 lg:flex">
            <nav className="flex space-x-8">
              <Link 
                to="/zetcollect-status" 
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-Complementary"
              >
                STATUS
              </Link>
              <Link 
                to="/upcoming-maintainance" 
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-Complementary"
              >
                UPCOMING MAINTENANCE
              </Link>
            </nav>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-Complementary"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        ref={dropdownRef}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" onClick={toggleMenu}>
              <img
                className="w-[150px] h-auto"
                src="/applogo.png"
                alt="ZetScore Home"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-2xl font-bold text-gray-700 rounded-md hover:bg-gray-100"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-4 space-y-2">
            <Link
              to="/zetcollect-status"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:text-Complementary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              STATUS
            </Link>
            <Link
              to="/upcoming-maintainance"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:text-Complementary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              UPCOMING MAINTENANCE
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default StatusNavbar;