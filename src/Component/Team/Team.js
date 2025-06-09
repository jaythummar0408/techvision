import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithubAlt, FaEnvelope, FaUser, FaCode, FaCloud, FaBrain, FaCogs, FaChartLine } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'Chief Technology Officer',
      department: 'Leadership',
      avatar: '👨‍💼',
      bgColor: '#3B82F6',
      icon: FaUser,
      bio: 'Visionary leader with 15+ years in enterprise software development and digital transformation.',
      skills: ['Strategic Planning', 'Team Leadership', 'Enterprise Architecture'],
      experience: '15+ years',
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson',
        github: 'https://github.com/alexjohnson',
        email: 'alex@techvision.dev'
      }
    },
    {
      id: 2,
      name: 'Sarah Chen',
      position: 'Lead Frontend Developer',
      department: 'Development',
      avatar: '👩‍💻',
      bgColor: '#10B981',
      icon: FaCode,
      bio: 'Expert in modern web technologies with a passion for creating exceptional user experiences.',
      skills: ['React.js', 'TypeScript', 'UI/UX Design'],
      experience: '8+ years',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen',
        email: 'sarah@techvision.dev'
      }
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      position: 'Senior Backend Engineer',
      department: 'Development',
      avatar: '👨‍💻',
      bgColor: '#8B5CF6',
      icon: FaCloud,
      bio: 'Specialist in scalable backend systems, cloud architecture, and database optimization.',
      skills: ['Node.js', 'Python', 'AWS', 'Database Design'],
      experience: '10+ years',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez',
        email: 'michael@techvision.dev'
      }
    },
    {
      id: 4,
      name: 'Emily Watson',
      position: 'AI/ML Engineer',
      department: 'Innovation',
      avatar: '👩‍🔬',
      bgColor: '#F59E0B',
      icon: FaBrain,
      bio: 'Data scientist and AI specialist focused on implementing intelligent solutions for business problems.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis'],
      experience: '7+ years',
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson',
        email: 'emily@techvision.dev'
      }
    },
    {
      id: 5,
      name: 'David Kim',
      position: 'DevOps Engineer',
      department: 'Infrastructure',
      avatar: '👨‍🔧',
      bgColor: '#EF4444',
      icon: FaCogs,
      bio: 'Cloud infrastructure expert specializing in automation, monitoring, and scalable deployments.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      experience: '9+ years',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
        github: 'https://github.com/davidkim',
        email: 'david@techvision.dev'
      }
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      position: 'Project Manager',
      department: 'Management',
      avatar: '👩‍💼',
      bgColor: '#06B6D4',
      icon: FaChartLine,
      bio: 'Agile project management expert ensuring smooth delivery of complex technology projects.',
      skills: ['Agile/Scrum', 'Project Planning', 'Team Coordination'],
      experience: '12+ years',
      social: {
        linkedin: 'https://linkedin.com/in/lisathompson',
        twitter: 'https://twitter.com/lisathompson',
        github: 'https://github.com/lisathompson',
        email: 'lisa@techvision.dev'
      }
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
    <section id="team" className="py-20 bg-gray-50 dark:bg-slate-900">
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
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our diverse team of experts brings together years of experience in cutting-edge technologies 
            and innovative solutions to deliver exceptional results for our clients.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-slate-700"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Profile Avatar */}
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-64 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: member.bgColor }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-6 w-6 h-6 border-2 border-white rounded-lg rotate-45"></div>
                    <div className="absolute bottom-8 left-6 w-4 h-4 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-lg rotate-12"></div>
                  </div>

                  {/* Avatar */}
                  <div className="text-center text-white z-10">
                    <div className="text-6xl mb-2">{member.avatar}</div>
                    <member.icon className="w-8 h-8 mx-auto opacity-80" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaGithubAlt className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {member.position}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span
                      className="inline-block px-3 py-1 text-white text-xs rounded-full font-medium"
                      style={{ backgroundColor: member.bgColor }}
                    >
                      {member.department}
                    </span>
                    <member.icon
                      className="w-4 h-4"
                      style={{ color: member.bgColor }}
                    />
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-slate-600 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                  <button
                    className="w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 min-h-[44px] touch-manipulation"
                    style={{
                      backgroundColor: `${member.bgColor}20`,
                      color: member.bgColor,
                      border: `1px solid ${member.bgColor}30`
                    }}
                  >
                    Connect with {member.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-lg border border-gray-200 dark:border-slate-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. Explore career opportunities with TechVision.
            </p>
            <motion.button
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-primary-700 transition-colors min-h-[48px] sm:min-h-[56px] touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Open Positions</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
