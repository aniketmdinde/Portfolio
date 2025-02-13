import React from "react";
import { motion } from "framer-motion";


const linearVariants = {
  animate1: {
    opacity: [0.5, 1, 0.5],
    x: ['-200%', '100%', '-200%'],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate2: {
    opacity: [0.6, 1, 0.6],
    x: ['-180%', '120%', '-180%'],
    transition: {
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate3: {
    opacity: [0.7, 1, 0.7],
    x: ['-160%', '140%', '-160%'],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate4: {
    opacity: [0.8, 1, 0.8],
    x: ['-140%', '160%', '-140%'],
    transition: {
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate5: {
    opacity: [0.9, 1, 0.9],
    x: ['-120%', '180%', '-120%'],
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate6: {
    opacity: [1, 1, 1],
    x: ['-100%', '200%', '-100%'],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Blurbackground = () => {
  return (
    <div className="fixed top-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[120px] opacity-60">
      <motion.div
        className="bg-yellow-300 w-[350px] h-[250px] rounded-full absolute"
        variants={linearVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-orange-300 w-[360px] h-[260px] rounded-full absolute"
        variants={linearVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-green-300 w-[370px] h-[270px] rounded-full absolute"
        variants={linearVariants}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="bg-teal-300 w-[380px] h-[280px] rounded-full absolute"
        variants={linearVariants}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="bg-blue-300 w-[390px] h-[290px] rounded-full absolute"
        variants={linearVariants}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="bg-indigo-300 w-[400px] h-[300px] rounded-full absolute"
        variants={linearVariants}
        animate="animate6"
      ></motion.div>
    </div>
  );
};

export default Blurbackground;
