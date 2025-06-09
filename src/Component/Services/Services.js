import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaMobile,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable and robust software.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration'],
      color: '#54B689'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Comprehensive cloud migration, infrastructure management, and DevOps implementation to optimize your operations and reduce costs.',
      features: ['AWS/Azure Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Analytics'],
      color: '#3B82F6'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: '#8B5CF6'
    },
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate processes and gain valuable insights.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbots & AI Assistants'],
      color: '#F59E0B'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving cyber threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      color: '#EF4444'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Modeling', 'ETL Processes'],
      color: '#10B981'
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
    <section id="services" className="py-20 bg-white dark:bg-slate-800">
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
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            We provide comprehensive technology solutions to help businesses thrive in the digital age.
            From custom software development to AI integration, we've got you covered.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            variants={itemVariants}
          >
            {['Fortune 500 Trusted', 'ISO 27001 Certified', '24/7 Support', 'Agile Methodology'].map((badge, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon 
                    className="w-8 h-8" 
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <FaCheckCircle 
                      className="w-4 h-4 flex-shrink-0" 
                      style={{ color: service.color }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                className="mt-6 w-full flex items-center justify-center space-x-2 py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base min-h-[44px] sm:min-h-[48px] touch-manipulation"
                style={{
                  backgroundColor: service.color,
                  color: 'white'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn More</span>
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-12 right-12 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
            <div className="absolute bottom-12 left-12 w-8 h-8 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 border-2 border-white rounded-lg rotate-45"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals
              and stay ahead of the competition.
            </p>
            <motion.button
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg min-h-[48px] sm:min-h-[56px] touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started Today</span>
              <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
