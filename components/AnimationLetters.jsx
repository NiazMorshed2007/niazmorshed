import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 40 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

const AnimatedLetters = ({ title, disabled = false }) => {
  return (
    <motion.span
      className="row-title overflow-hidden flex"
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, i) => (
        <motion.span
          key={`child${i}`}
          className={`${letter === " " && "px-2"}`}
          initial={{ y: 70 }}
          transition={{ delay: 0.015 * i }}
          animate={{ y: 0 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedLetters;
