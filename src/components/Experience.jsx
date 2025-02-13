import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-white">
          My Experience
        </h2>
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 md:mb-16 md:flex justify-between items-center w-full relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="hidden md:block w-5/12"></div>
              {/* Branch line */}
              <motion.div 
                className="hidden md:block absolute top-1/2 bg-blue-500"
                style={{
                  width: '20px', // Approximately half a centimeter
                  height: '2px',
                  margin: '1px',
                  left: index % 2 === 0 ? 'auto' : 'calc(50% - 1px)',
                  right: index % 2 === 0 ? 'calc(50% - 1px)' : 'auto',
                  transform: 'translateY(-50%)'
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              ></motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-white text-lg sm:text-xl mb-1">{exp.title}</h3>
                <h4 className="font-semibold text-blue-300 text-sm sm:text-md mb-2">{exp.location}</h4>
                <p className="text-xs sm:text-sm text-stone-300 mb-2">{exp.yearRange}</p>
                <ul className="list-disc list-inside text-xs sm:text-sm leading-snug tracking-wide text-stone-300 text-opacity-100">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-1">{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
