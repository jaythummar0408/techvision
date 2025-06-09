import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import Navbar from '../Navbar/Navbar';

const Hero = lazy(() => import('../Hero/Hero'));
const Features = lazy(() => import('../Features/Features'));
const About = lazy(() => import('../About/About'));
const Services = lazy(() => import('../Services/Services'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
const Team = lazy(() => import('../Team/Team'));
const Contact = lazy(() => import('../Contact/Contact'));
const Footer = lazy(() => import('../Footer/Footer'));

const LoadingSpinner = () => (
  <motion.div
    className="fixed inset-0 bg-white dark:bg-dark-900 flex items-center justify-center z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center">
      <ClipLoader color="#54B689" size={50} />
      <motion.p
        className="mt-4 text-gray-600 dark:text-gray-400 font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Loading portfolio...
      </motion.p>
    </div>
  </motion.div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <Navbar />

      <AnimatePresence>
        {loading && <LoadingSpinner />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          className="min-h-screen pt-20 lg:pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Suspense fallback={
            <div className="flex items-center justify-center h-64">
              <ClipLoader color="#54B689" size={40} />
            </div>
          }>
            <Hero />
            <Features />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Team />
            <Contact />
            <Footer />
          </Suspense>
        </motion.main>
      )}
    </div>
  );
};

export default Home;
