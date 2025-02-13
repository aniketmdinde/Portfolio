import React, { useState } from 'react'
import { LINKS } from '../constants'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e, href) => {
        e.preventDefault()
        setIsOpen(false)
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        } else if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6">
            <div className='flex justify-between items-center max-w-6xl mx-auto px-6 py-3 bg-white/5 rounded-2xl backdrop-blur-lg shadow-lg'>
                <div className='text-xl font-semibold uppercase text-white'>
                    <a href="#home" onClick={(e) => handleClick(e, '#home')}>
                        AD
                    </a>
                </div>
                <div className='hidden md:flex space-x-8'>
                    {LINKS.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.href} 
                            className='text-white hover:text-stone-400 transition duration-300'
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none p-2' aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>  
                        {isOpen ? <XMarkIcon className='w-6 h-6'/> : <Bars3Icon className='w-6 h-6'/>}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-white/5 backdrop-blur-lg md:hidden flex items-center justify-center'>
                    <div className='absolute top-6 right-6'>
                        <button onClick={() => setIsOpen(false)} className='text-white focus:outline-none p-2' aria-label='Close Menu'>
                            <XMarkIcon className='w-6 h-6' />
                        </button>
                    </div>
                    <div className='flex flex-col items-center space-y-8 w-full px-4'>
                        {LINKS.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                className='text-white hover:text-stone-400 transition duration-300 text-xl py-2'
                                onClick={(e) => handleClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
