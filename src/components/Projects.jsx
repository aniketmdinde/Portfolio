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
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
  >
    {children}
  </motion.div>
)

const BentoGridItem = ({ project }) => (
  <motion.div 
    variants={projectVariant}
    className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg h-[250px] transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
  >
    <div className='h-full w-full p-6 flex flex-col justify-center items-center transition-all duration-300'>
      <h3 className='text-2xl font-bold text-white text-center mb-4 group-hover:scale-95 transition-transform duration-300'>
        {project.name}
      </h3>
      
      {/* Technologies */}
      <div className='flex flex-wrap gap-2 justify-center mb-4'>
        {project.technologies?.map((tech, index) => (
          <span 
            key={index}
            className='bg-white/10 px-3 py-1 rounded-full text-xs text-blue-200'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-900/95 to-purple-900/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='p-6 text-center'>
          <p className='text-gray-200 text-sm mb-4'>
            {project.description}
          </p>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition duration-300 text-sm font-medium'
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
                <BentoGrid>
                    {PROJECTS.map((project, index) => (
                        <BentoGridItem 
                            key={index} 
                            project={project}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export default Projects