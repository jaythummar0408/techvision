import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'InnovateTech Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'TechVision transformed our entire digital infrastructure. Their AI-powered analytics platform increased our operational efficiency by 40% and provided insights we never thought possible. The team\'s expertise and dedication are unmatched.',
      project: 'AI Analytics Platform',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Global Finance Corp',
      image: '👨‍💼',
      rating: 5,
      text: 'Working with TechVision was a game-changer for our fintech startup. They delivered a secure, scalable banking platform that exceeded all our expectations. Their attention to security and compliance was exceptional.',
      project: 'Digital Banking Platform',
      industry: 'Financial Services'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'HealthCare Plus',
      image: '👩‍⚕️',
      rating: 5,
      text: 'The healthcare management system TechVision built for us has revolutionized patient care. The intuitive interface and robust features have improved our workflow efficiency by 60%. Outstanding work!',
      project: 'Healthcare Management System',
      industry: 'Healthcare'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Director of IT',
      company: 'Manufacturing Excellence',
      image: '👨‍🔧',
      rating: 5,
      text: 'TechVision\'s IoT solution for our manufacturing processes has been incredible. Real-time monitoring and predictive maintenance have reduced downtime by 35% and saved us millions in operational costs.',
      project: 'IoT Manufacturing Solution',
      industry: 'Manufacturing'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Chief Marketing Officer',
      company: 'EduTech Innovations',
      image: '👩‍🎓',
      rating: 5,
      text: 'The e-learning platform TechVision developed has transformed online education for our students. The interactive features and seamless user experience have increased student engagement by 80%.',
      project: 'E-Learning Platform',
      industry: 'Education'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about their experience working with TechVision.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400 mx-1" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8 font-medium">
                "{current.text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl mr-4">
                    {current.image}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{current.name}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">{current.position}</p>
                    <p className="text-gray-600 dark:text-gray-400">{current.company}</p>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {current.project}
                  </span>
                  <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    {current.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors touch-manipulation ${
                  index === currentTestimonial
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
            Trusted by industry leaders worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['InnovateTech', 'Global Finance', 'HealthCare Plus', 'Manufacturing Excellence', 'EduTech'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-16 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
