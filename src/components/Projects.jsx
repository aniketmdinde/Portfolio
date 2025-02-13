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

const BentoGrid = ({ children, className }) => (
  <motion.div 
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
  >
    {children}
  </motion.div>
)

const BentoGridItem = ({ project, className }) => (
  <motion.div 
    variants={projectVariant}
    className={`group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
  >
    <div className='relative overflow-hidden'>
      <img 
        src={project.image} 
        alt={project.name} 
        className='w-full h-40 sm:h-48 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-105' 
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
        <h3 className='text-lg sm:text-xl font-bold text-white text-center px-4'>
          {project.name}
        </h3>
      </div>
    </div>
    <div className='p-4 sm:p-6'>
      <p className='text-xs sm:text-sm text-stone-300 mb-3 sm:mb-4'>
        {project.description}
      </p>
      {project.technologies && (
        <div className='flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4'>
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className='bg-white/10 text-stone-300 px-2 py-1 rounded-full text-xs'>
              {tech}
            </span>
          ))}
        </div>
      )}
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='inline-block bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transition duration-300 text-xs sm:text-sm font-medium'
        >
          View Project
        </a>
      )}
    </div>
  </motion.div>
)

const Projects = () => {
    return (
        <section id='projects' className='py-8 sm:py-12 md:py-20 lg:py-24'>
            <div className='container mx-auto px-4 sm:px-6 md:px-8'>
                <motion.h2 
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-white'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                <BentoGrid>
                    {PROJECTS.map((project, index) => (
                        <BentoGridItem 
                            key={index} 
                            project={project}
                            className={index === 3 || index === 6 ? "sm:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export default Projects
