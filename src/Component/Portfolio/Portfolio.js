import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { projects, categories } from '../../data/projects';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially
  const PROJECTS_PER_LOAD = 6; // Load 6 more projects each time

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [activeCategory]);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + PROJECTS_PER_LOAD);
  };

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

  const handleProjectClick = (project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600"
      onClick={() => handleProjectClick(project)}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
        ...(document.documentElement.classList.contains('dark') && {
          background: 'linear-gradient(145deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)'
        })
      }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <motion.img
          src={project.image}
          alt={`${project.title} - ${project.subtitle}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ filter: 'brightness(0.9)' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Animated Pattern Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-6 left-6 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-12 w-6 h-6 border-2 border-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-12 left-12 w-4 h-4 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-white rounded-lg rotate-12"></div>
        </motion.div>

        {/* Project Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
              ⭐ Featured
            </span>
          </motion.div>
        )}

        {/* Hover Overlay with Quick Actions */}
        <motion.div
          className="absolute inset-0 bg-primary-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0 }}
        >
          <motion.div
            className="text-center text-white"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="flex space-x-4 mb-4"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaEye className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.a>

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium text-sm shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
              )}
            </motion.div>
            <p className="text-sm opacity-90">Click to view details</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
              {project.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center mb-1">
              <FaCalendarAlt className="w-3 h-3 mr-1" />
              {project.year}
            </span>
            {project.status && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                {project.status}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Project Stats */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200 dark:border-primary-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg min-h-[44px] touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>View Live</span>
          </motion.a>

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-500 transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaCode className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🚀 Featured Projects & Case Studies
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Innovation</span> Portfolio
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our innovative technology solutions! Here you'll find a showcase of our professional projects and achievements,
            demonstrating our expertise in modern software development. Each project represents a unique
            challenge and showcases our commitment to delivering exceptional digital experiences for our clients.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['200+ Projects Delivered', 'Enterprise Grade', '99% Success Rate', 'Award Winning'].map((badge, index) => (
              <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl min-h-[48px] sm:min-h-[56px] touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaExternalLinkAlt className="mr-2 w-4 h-4" />
            <span className="hidden sm:inline">Start Your Project</span>
            <span className="sm:hidden">Start Project</span>
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm min-h-[36px] sm:min-h-[44px] touch-manipulation ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-600 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-slate-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(' ')[0]}</span>
              <span className="ml-1 sm:ml-2 text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {hasMoreProjects && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={loadMoreProjects}
              className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] sm:min-h-[56px] touch-manipulation"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlus className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Load More Projects</span>
              <span className="sm:hidden">Load More</span>
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
                +{Math.min(PROJECTS_PER_LOAD, filteredProjects.length - visibleProjects)}
              </span>
            </motion.button>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
              Showing {displayedProjects.length} of {filteredProjects.length} projects
            </p>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <FaCode className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try selecting a different category to see more projects.
            </p>
          </motion.div>
        )}

        {/* Show All Projects Button (when all are loaded) */}
        {!hasMoreProjects && filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              ✨ All {filteredProjects.length} projects are now displayed
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
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
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                💡 Let's Build Something Amazing Together
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                Transform your ideas into reality with our expert development team.
                We're here to help you build innovative solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg min-h-[56px] touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your Project</span>
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors min-h-[56px] touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Our Services</span>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;