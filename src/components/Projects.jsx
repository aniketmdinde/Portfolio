import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const projectVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: 'easeOut' } 
    }
}

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.1
        }
    }
}

const getRandomGradient = (index) => {
  const gradients = [
    'from-blue-500/20 via-purple-500/10 to-indigo-500/20',
    'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    'from-rose-500/20 via-pink-500/10 to-orange-500/20',
    'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20'
  ];
  return gradients[index % gradients.length];
};

const getGridSpan = (index) => {
  // Define different layout patterns for the cards
  const patterns = [
    'md:col-span-2 md:row-span-2', // Large square
    'md:col-span-1 md:row-span-1', // Small square
    'md:col-span-1 md:row-span-2', // Tall rectangle
    'md:col-span-2 md:row-span-1'  // Wide rectangle
  ];
  return patterns[index % patterns.length];
};

const BentoGridItem = ({ project, index }) => (
  <motion.div 
    variants={projectVariant}
    className={`group relative bg-gradient-to-br ${getRandomGradient(index)} backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${getGridSpan(index)}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
  >
    <div className='h-full w-full p-6 md:p-8 flex flex-col justify-center items-center transition-all duration-500'>
      <h3 className='text-2xl md:text-3xl font-bold text-white text-center mb-4 group-hover:scale-95 transition-transform duration-500'>
        {project.name}
      </h3>
      
      <div className='flex flex-wrap gap-2 justify-center mb-4'>
        {project.technologies?.map((tech, index) => (
          <span 
            key={index}
            className='bg-white/10 px-3 py-1 rounded-full text-sm text-blue-200 font-medium'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover overlay with content */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/95 to-blue-900/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-110'>
        <div className='p-6 md:p-8 text-center max-h-full overflow-y-auto'>
          <p className='text-gray-200 text-base md:text-lg mb-6 leading-relaxed'>
            {project.description}
          </p>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 text-base font-medium hover:scale-105 hover:shadow-lg'
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
    return (
        <section id='projects' className='py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
                <motion.h2 
                    className='text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 text-white'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]'
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                >
                    {PROJECTS.map((project, index) => (
                        <BentoGridItem 
                            key={index} 
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects