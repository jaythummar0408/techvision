import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaArrowRight,
  FaDownload,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaBrain,
  FaPlus
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiDocker, SiBootstrap, SiMui, SiAntdesign, SiAngular, SiApacheecharts } from 'react-icons/si';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState(12); // Show 12 skills initially

  const skills = [
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26', level: 98 },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6', level: 95 },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E', level: 96 },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', level: 92 },
    { icon: FaReact, name: 'React.js', color: '#61DAFB', level: 98 },
    { icon: SiAngular, name: 'Angular', color: '#DD0031', level: 88 },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000', level: 94 },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933', level: 93 },
    { icon: SiExpress, name: 'Express.js', color: '#000000', level: 90 },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', level: 88 },
    { icon: FaDatabase, name: 'PostgreSQL', color: '#336791', level: 85 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', level: 95 },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3', level: 90 },
    { icon: SiMui, name: 'Material-UI', color: '#007FFF', level: 92 },
    { icon: SiAntdesign, name: 'Ant Design', color: '#1890FF', level: 88 },
    { icon: SiApacheecharts, name: 'Data Visualization', color: '#AA344D', level: 85 },
    { icon: FaBrain, name: 'AI/ML Integration', color: '#10A37F', level: 82 },
    { icon: SiDocker, name: 'Docker', color: '#2496ED', level: 80 },
    { icon: FaGithub, name: 'Git & DevOps', color: '#181717', level: 95 },
  ];

  const services = [
    {
      icon: FaLaptopCode,
      title: 'Enterprise Software Development',
      description: 'Building scalable enterprise applications with modern frameworks, microservices architecture, and cloud-native solutions.',
      technologies: ['React', 'Angular', 'Next.js', 'Microservices']
    },
    {
      icon: FaServer,
      title: 'Cloud & DevOps Solutions',
      description: 'Implementing robust cloud infrastructure, CI/CD pipelines, and containerized applications for optimal performance.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      icon: FaMobile,
      title: 'IoT & Smart Solutions',
      description: 'Developing Internet of Things applications, smart city solutions, and connected device management platforms.',
      technologies: ['MQTT', 'InfluxDB', 'Edge Computing', 'Sensors']
    },
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Integrating artificial intelligence, machine learning models, and data analytics to drive intelligent business decisions.',
      technologies: ['TensorFlow', 'PyTorch', 'Data Science', 'Predictive Analytics']
    }
  ];

  const displayedSkills = skills.slice(0, visibleSkills);
  const hasMoreSkills = skills.length > visibleSkills;

  const loadMoreSkills = () => {
    setVisibleSkills(skills.length); // Show all skills at once
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
  return (
    <section id="aboutme" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About TechVision
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital excellence.
          </p>
        </motion.div>
        {/* Hero Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                TechVision
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
                Innovative Technology Solutions
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
            TechVision is a leading technology solutions provider with over <span className="text-primary-600 dark:text-primary-400 font-bold">8+</span> years of experience in delivering cutting-edge digital transformation solutions. We specialize in enterprise software development, AI integration, cloud solutions, and digital innovation. Our expert team of <span className="text-primary-600 dark:text-primary-400 font-bold">50+</span> certified professionals creates scalable, high-performance applications that transform businesses across industries.

            <br /><br />

            From Fortune 500 companies to innovative startups, we've partnered with organizations worldwide to accelerate their digital journey. Our comprehensive approach combines strategic consulting, cutting-edge technology, and agile methodologies to deliver solutions that drive measurable business results.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              From startups to Fortune 500 companies, we've helped <span className="text-primary-600 dark:text-primary-400 font-bold">200+</span> clients achieve their digital goals. Explore our{' '}
              <a href="#portfolio" className="font-bold text-primary-600 dark:text-primary-400 hover:underline font-medium">
                innovative projects
              </a>{' '}
              and discover our comprehensive{' '}
              <a href="#services" className="font-bold text-primary-600 dark:text-primary-400 hover:underline font-medium">
                technology services
              </a>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#portfolio"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaArrowRight className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">View Projects</span>
                <span className="sm:hidden">Projects</span>
              </motion.a>

              <motion.a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Our Services</span>
                <span className="sm:hidden">Services</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Banner */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative w-80 h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Tech Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute top-20 right-15 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
                  <div className="absolute bottom-20 left-15 w-12 h-12 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-12"></div>
                </div>

                {/* Main Content */}
                <div className="text-center text-white z-10">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-2">TechVision</h3>
                  <p className="text-primary-100">Innovation in Technology</p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Team Members' },
              { number: '8+', label: 'Years of Excellence' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Innovation First',
                description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
              },
              {
                icon: '🤝',
                title: 'Client Partnership',
                description: 'We build lasting relationships through transparency, communication, and shared success.'
              },
              {
                icon: '⚡',
                title: 'Excellence Delivered',
                description: 'We maintain the highest standards in every project, ensuring quality and reliability.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              TechVision specializes in delivering comprehensive technology solutions with a focus on innovation,
              scalability, and digital transformation. Here's how we help businesses thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cutting-edge technologies and tools we master
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={visibleSkills} // Re-trigger animation when skills change
          >
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-gray-200 dark:border-slate-700"
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ '--skill-color': skill.color }}
              >
                <div className="text-center">
                  <skill.icon
                    className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform"
                    style={{ color: skill.color }}
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 block">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Skills Button */}
          {hasMoreSkills && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={loadMoreSkills}
                className="inline-flex items-center px-4 py-3 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlus className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Show All Skills</span>
                <span className="sm:hidden">Show All</span>
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm">
                  +{skills.length - visibleSkills}
                </span>
              </motion.button>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                Showing {displayedSkills.length} of {skills.length} skills
              </p>
            </motion.div>
          )}

          {/* All Skills Loaded Message */}
          {!hasMoreSkills && skills.length > 12 && (
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                ✨ All {skills.length} skills are now displayed
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About