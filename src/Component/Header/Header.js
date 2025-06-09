import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithubAlt, FaInstagram, FaUser, FaLaptopCode, FaFileAlt, FaEnvelopeOpenText } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState('aboutme');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle hash changes for navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial tab based on URL

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle escape key and prevent body scroll when menu is open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Close menu first, then scroll after a small delay
    setIsMenuOpen(false);

    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(tab);
      if (element) {
        // Calculate offset for mobile header
        const isMobile = window.innerWidth < 1024; // lg breakpoint
        const offset = isMobile ? 80 : 0; // Mobile header height

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure menu animation completes
  };

  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com/TechVisionOrg", label: "Twitter" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/techvision-solutions", label: "LinkedIn" },
    { icon: FaGithubAlt, href: "https://github.com/techvision-org", label: "GitHub" },
    { icon: FaInstagram, href: "https://www.instagram.com/techvision.official", label: "Instagram" },
  ];

  const navigationItems = [
    { id: 'aboutme', label: 'Home', icon: FaUser },
    { id: 'aboutme', label: 'About', icon: FaUser },
    { id: 'services', label: 'Services', icon: FaFileAlt },
    { id: 'portfolio', label: 'Portfolio', icon: FaLaptopCode },
    { id: 'team', label: 'Team', icon: FaUser },
    { id: 'contact', label: 'Contact', icon: FaEnvelopeOpenText },
  ];
  return (
    <>
      {/* Mobile Header */}
      <motion.header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between p-4">
          <motion.h1
            className="text-xl font-bold text-gray-800 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            TechVision
          </motion.h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 sm:p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors text-sm sm:text-base"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
            >
              {isMenuOpen ? '✕' : '☰'}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
            >
              <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg text-left transition-colors text-sm sm:text-base ${
                      activeTab === item.id
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 border-r border-gray-200 dark:border-gray-700"
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col w-full h-full overflow-hidden">
          {/* Header */}
          <motion.div
            className="p-8 text-center bg-gradient-to-br from-primary-500 to-primary-600 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
            >
              TechVision
            </motion.h1>
            <p className="text-primary-100 text-sm font-medium">
              Technology Solutions Provider
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            className="px-8 py-8 text-center bg-gradient-to-br from-primary-500 to-primary-600 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-36 h-36 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <div className="text-white text-xs font-bold">TechVision</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold mb-2">Welcome to TechVision!</h2>
              <p className="text-primary-100 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions and digital excellence.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 bg-white dark:bg-gray-900 flex items-center">
            <div className="space-y-2 w-full">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center space-x-4 p-3 rounded-xl text-left transition-all duration-300 group ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-white/20'
                      : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>


        </div>
      </motion.aside>
    </>
  );
};

export default Header;

