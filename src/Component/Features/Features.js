import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaClock, FaUsers, FaGlobe, FaChartLine, FaCode, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Rapid Development',
      description: 'Accelerate your time-to-market with our agile development methodology and proven frameworks.',
      color: '#3B82F6'
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards to protect your valuable data and assets.',
      color: '#EF4444'
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.',
      color: '#10B981'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Dedicated team of certified professionals with deep expertise in cutting-edge technologies.',
      color: '#8B5CF6'
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Scalable solutions designed to support your business growth across multiple markets.',
      color: '#F59E0B'
    },
    {
      icon: FaChartLine,
      title: 'Performance Analytics',
      description: 'Real-time insights and analytics to optimize performance and drive business decisions.',
      color: '#06B6D4'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Maintainable, well-documented code following industry best practices and standards.',
      color: '#84CC16'
    },
    {
      icon: FaHeadset,
      title: 'Consultation',
      description: 'Strategic technology consulting to align your IT infrastructure with business objectives.',
      color: '#EC4899'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Why Choose TechVision?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            We combine technical expertise with business acumen to deliver solutions that drive real results. 
            Here's what sets us apart in the competitive technology landscape.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            variants={itemVariants}
          >
            {['ISO 27001 Certified', 'GDPR Compliant', 'SOC 2 Type II', 'AWS Partner'].map((badge, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-12 right-12 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
              <div className="absolute bottom-12 left-12 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience the TechVision Difference?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary-600 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg min-h-[48px] sm:min-h-[56px] touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-600 transition-colors min-h-[48px] sm:min-h-[56px] touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
