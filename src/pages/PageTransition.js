import React from "react";
import { motion } from "framer-motion";

// const opacityAnimation = {
//   initial: {
//     opacity: 0,
//     // scale: 0,
//   },
//   animate: {
//     opacity: 1,
//     // scale: 1,
//   },
//   exit: {
//     opacity: 0,
//     // scale: 0,
//   },
// };

// const rotateAmimation = {
//   initial: {
//     rotateY: 90,
//   },
//   animate: {
//     rotateY: 0,
//   },
//   exit: {
//     rotateY: -90,
//   },
// };

// const zoomAnimation = {
//   initial: {
//     scale: 0.7,
//     opacity: 0,
//   },
//   animate: {
//     scale: 1,
//     opacity: 1,
//   },
//   exit: {
//     scale: 1,
//     opacity: 0,
//   },
// };

const widthAnimation = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
  },
  exit: {
    width: "100%",
    x: window.innerWidth,
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.section
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      variants={widthAnimation}
      initial="initail"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
};

export default PageTransition;
