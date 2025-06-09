import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaMedal,
  FaStar,
  FaCertificate,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUsers,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";
import jay_cv from '../../assets/jaythummar.pdf'
import dark_cv from '../../assets/jaythummar.pdf';

const Resume = () => {
  // Check if dark mode is active
  const isDarkMode = document.documentElement.classList.contains('dark');

  // Professional Experience
  const experience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "RapidOps Solutions",
      location: "Ahmedabad, India",
      duration: "March 2025 - Present",
      type: "Full-time",
      description: "Spearheading complex projects to deliver scalable, high-quality solutions.",
      achievements: [
        "Developed reusable UI components to speed up development by 30%",
        "Created dynamic dashboards using Ant Design and Recharts",
        "Built secure authentication and role-based access using JWT and middleware",
        "Automated CI/CD deployment workflows using GitHub Actions and Vercel"
      ],
      technologies: ["React.js","Tailwind","TypeScript","Antd", "Node.js",  "Express.js","MongoDB", "Vercel","Railway"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Tristate Technology",
      location: "Ahmedabad, India",
      duration: "Apr 2023 - Feb 2025",
      type: "Full-time",
      description: "Built dynamic and responsive admin panels as well as Ecommerce websites using React, Material UI, and Tailwind CSS. Focused on creating intuitive interfaces for managing users, products, and content. Ensured consistency and scalability by developing reusable components and integrating with backend APIs.",
      achievements: [
        "Developed multiple dynamic admin panels and eCommerce websites using React, Material UI, and Tailwind CSS",
        "Increased development speed by 30% through reusable component architecture",
        "Improved overall UI consistency and reduced maintenance effort with modular design",
        "Integrated seamlessly with RESTful APIs for real-time data management",
        "Delivered fully responsive layouts optimized for both desktop and mobile users",
        "Reduced bug rate by implementing form validation using Formik and Yup"
      ],
      technologies: ["React.js", "Next.js","TypeScript","Redux toolkit","Axios","Eslint", "Material UI","Formik & Yup","Echarts", "Tailwind CSS","Docker"]
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Constantsys",
      location: "Bangalore, India",
      duration: "March 2022 - May 2023",
      type: "Full-time",
      description: "Specialized in creating modern, responsive user interfaces.",
      achievements: [
        "Converted 5+ Figma designs to responsive React components",
        "Improved user engagement by 25% through UX enhancements",
        "Implemented state management using Redux and Context API",
        "Achieved 95+ Google Lighthouse performance scores"
      ],
      technologies: ["React.js", "TypeScript", "Bootstrap", "Redux-thunk","Formik-yup","Joi"]
    }
  ];

  // Education
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Gujarat Technological University",
      location: "Gujarat, India",
      duration: "2018 - 2022",
      grade: "CGPA: 8.5/10",
      description: "Specialized in software engineering, and web-technologies."
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (Science)",
      institution: "Gujarat State Board",
      location: "Gujarat, India",
      duration: "2016 - 2018",
      grade: "Percentage: 80.02%",
      description: "Focused on Mathematics, Physics, and Computer Science fundamentals."
    }
  ];

  // Achievements data
  const achievements = [

    {
      id: 2,
      icon: FaCertificate,
      title: "React.js Expert Certification",
      organization: "Sololearn",
      date: "August 2023",
      location: "Online",
      description: "Completed advanced course on React.js covering hooks, state management, and performance.",
      color: "text-blue-500"
    },
  
    {
      id: 4,
      icon: FaMedal,
      title: "Full-Stack Developer Certification",
      organization: "MongoDB University",
      date: "March 2023",
      location: "Online",
      description: "Comprehensive certification covering MERN stack development and database optimization.",
      color: "text-purple-500"
    },
    {
      id: 5,
      icon: FaStar,
      title: "Client Excellence Award",
      organization: "Freelance Projects",
      date: "January 2023",
      location: "Remote",
      description: "Achieved 5-star rating across 3+ projects with 100% client satisfaction rate.",
      color: "text-orange-500"
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
    <section id="resume" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              3.5+ years of experience in full-stack development, delivering scalable solutions and leading development teams.
            </p>

            {/* Download Button */}
            <motion.a
              href={isDarkMode ? dark_cv : jay_cv}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download Resume PDF</span>
              <span className="sm:hidden">Download PDF</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Professional Experience Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaBriefcase className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Professional Experience
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in software development and the impact I've made
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-6 md:space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line - Hidden on mobile */}
                {index !== experience.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600"></div>
                )}

                <div className="flex items-start space-x-4 md:space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaBriefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
                    {/* Header Section - Mobile Optimized */}
                    <div className="mb-4">
                      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm md:text-base">
                            {exp.company}
                          </p>
                        </div>

                        {/* Mobile: Stack vertically, Desktop: Right aligned */}
                        <div className="flex flex-col space-y-2 md:text-right md:space-y-1">
                          <div className="inline-flex items-center px-2 py-1 md:px-3 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium w-fit">
                            {exp.type}
                          </div>

                          {/* Duration and Location - Mobile: Horizontal, Desktop: Stacked */}
                          <div className="flex flex-col space-y-1 md:space-y-1">
                            <div className="flex items-center space-x-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              <FaCalendarAlt className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements - Mobile Optimized */}
                    <div className="mb-4">
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FaRocket className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 flex items-start leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies - Mobile Optimized */}
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FaCode className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaGraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic foundation that shaped my technical expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Certifications Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaTrophy className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Achievements & Certifications
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition and certifications that showcase my expertise and commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>

                    <div className="space-y-2 mb-3">
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                        {achievement.organization}
                      </p>

                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          <span>{achievement.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how my expertise can help your project succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers className="mr-2 w-5 h-5" />
                Get In Touch
              </motion.a>

              <motion.a
                href={isDarkMode ? dark_cv : jay_cv}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2 w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
