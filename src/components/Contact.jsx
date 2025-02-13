import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/aniketmdinde', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/aniketmdinde', color: 'hover:text-gray-400' },
  { name: 'Gmail', icon: FaGoogle, url: 'mailto:aniketmdinde@gmail.com', color: 'hover:text-red-500' },
];

const ContactItem = ({ icon: Icon, name, url, color, index }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-colors duration-300 w-full ${color}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{
      duration: 0.3,
      delay: index * 0.1,
      type: "spring",
      stiffness: 50,
      ease: "easeInOut"
    }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-4xl mb-3" />
    <span className="text-white text-sm font-medium">{name}</span>
  </motion.a>
);

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 lg:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.3 }}
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
            viewport={{ amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
              Get in Touch
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaEnvelope className="ml-2 text-blue-400" />
              </motion.div>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. 
              Don't hesitate to reach out!
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
            viewport={{ amount: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <ContactItem key={index} {...link} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;