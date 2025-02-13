import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { FaChevronDown, FaMouse } from "react-icons/fa";

const textVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scrollDownVariant = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const waveVariant = {
  animate: {
    rotate: [0, 15, -15, 15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.6, 1],
    },
  },
};

const Home = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      <motion.div
        className="w-full max-w-3xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          {HERO_CONTENT.greeting.split(" ").map((word, index) => (
            <span key={index} className="inline-block mr-2">
              {word === "Hello" ? (
                <span className="relative group">
                  {word}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              ) : (
                word
              )}
            </span>
          ))}
          <span>
            <motion.span
              className="inline-block"
              variants={waveVariant}
              animate="animate"
              style={{ originX: 0.7, originY: 0.7 }}
            >
              👋
            </motion.span>
          </span>
        </motion.h1>
        <motion.div
          variants={textVariant}
          className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400"
        >
          <TypeAnimation
            sequence={[
              "Software Development",
              2000,
              "Artificial Intelligence",
              2000,
              "Cybersecurity",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p variants={textVariant} className="text-xl mb-4">
          {HERO_CONTENT.introduction}
        </motion.p>
        <motion.p variants={textVariant} className="text-lg mb-8 text-gray-300">
          {HERO_CONTENT.description}
        </motion.p>
        <motion.a
          variants={textVariant}
          href="./ResumeJayminWeb.pdf"
          target="_blank"
          className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105 hover:bg-opacity-80"
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>
      </motion.div>

      {/* Scroll down animation */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            variants={scrollDownVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <FaMouse className="text-2xl md:text-3xl text-white mb-2" />
            <FaChevronDown className="text-xl md:text-2xl text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
