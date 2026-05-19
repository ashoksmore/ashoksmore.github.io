import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  const pageVariants = reduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
      };

  const pageTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
