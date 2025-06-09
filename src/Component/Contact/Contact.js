import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email to you (the recipient)
            const result1 = await emailjs.sendForm(
                'service_4njj19l',        // Your service ID
                'template_etoozjr',       // Template for receiving messages
                form.current,
                'AUzC2gFdurqgzldWG'      // Your public key
            );

            // Send auto-reply thank you email to the sender
            const result2 = await emailjs.sendForm(
                'service_4njj19l',        // Same service ID
                'template_4o7u72q',    // Template for auto-reply (you need to create this)
                form.current,
                'AUzC2gFdurqgzldWG'      // Same public key
            );

            console.log('Main email sent successfully:', result1.text);
            console.log('Auto-reply sent successfully:', result2.text);
            setSubmitStatus('success');
            form.current.reset();
        } catch (error) {
            console.error('Email send failed:', error.text);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
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
        <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Let's Work Together
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                    >
                        Interested in hiring me for your project or just want to say hi? You can fill in the contact
                        form below or send me an email to{' '}
                        <a
                            href="mailto:jppatel10125@gmail.com"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
                        >
                            jppatel10125@gmail.com
                        </a>
                    </motion.p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Get In Touch
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                I'm always open to discussing new opportunities and exciting projects.
                                Let's create something amazing together!
                            </p>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                                    <FaEnvelope className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                                    <a
                                        href="mailto:jppatel10125@gmail.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    >
                                        jppatel10125@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                                    <FaMapMarkerAlt className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                                    <FaPhone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Send Message
                        </motion.h3>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                            >
                                <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="text-green-800 dark:text-green-200">
                                    Message sent successfully! I'll get back to you soon. Check your email for a confirmation.
                                </span>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                            >
                                <FaExclamationTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                <span className="text-red-800 dark:text-red-200">
                                    Failed to send message. Please try again or email me directly.
                                </span>
                            </motion.div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    placeholder="Your Phone Number (Optional)"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                    placeholder="Tell me about your project or just say hello..."
                                ></textarea>
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center space-x-2 sm:space-x-3 py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                                }`}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="hidden sm:inline">Send Message</span>
                                        <span className="sm:hidden">Send</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact