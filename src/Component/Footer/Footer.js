import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithubAlt, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Custom Software Development',
      'Cloud Solutions & DevOps',
      'Mobile App Development',
      'AI & Machine Learning',
      'Cybersecurity Solutions',
      'Data Analytics & BI'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact'
    ],
    resources: [
      'Documentation',
      'API Reference',
      'Support Center',
      'Community',
      'Webinars',
      'White Papers'
    ]
  };

  const socialLinks = [
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/techvision-solutions', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/TechVisionOrg', label: 'Twitter' },
    { icon: FaGithubAlt, href: 'https://github.com/techvision-org', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/techvision.official', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">TechVision</h3>
                    <p className="text-gray-400 text-sm">Technology Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming businesses through innovative technology solutions. We deliver cutting-edge 
                  software development, AI integration, and digital transformation services to help companies 
                  thrive in the digital age.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300">contact@techvision.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300">San Francisco, CA 94105</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => {
                    // Map footer links to appropriate sections or external URLs
                    const linkMap = {
                      'About Us': '#aboutme',
                      'Our Team': '#team',
                      'Careers': '#contact',
                      'Contact': '#contact',
                      'Privacy Policy': '/privacy',
                      'Terms of Service': '/terms'
                    };

                    return (
                      <li key={index}>
                        <a
                          href={linkMap[link] || '#contact'}
                          className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => {
                    // Map resource links to appropriate sections or external URLs
                    const linkMap = {
                      'Blog': '/blog',
                      'Documentation': '/docs',
                      'Case Studies': '#portfolio',
                      'White Papers': '/resources',
                      'API Reference': '/api-docs',
                      'Support': '#contact',
                      'Help Center': '/help',
                      'Community': '/community'
                    };

                    return (
                      <li key={index}>
                        <a
                          href={linkMap[link] || '/resources'}
                          className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
              <div className="lg:flex-1">
                <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
                <p className="text-gray-400">Get the latest insights on technology trends and innovations.</p>
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 flex-1"
                  />
                  <motion.button
                    className="px-5 py-3 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] touch-manipulation"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2024 TechVision. All rights reserved. | Privacy Policy | Terms of Service
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50 flex items-center justify-center touch-manipulation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
