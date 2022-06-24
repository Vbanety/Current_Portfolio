import { motion } from "framer-motion"
const Animation = ({ children }) => {

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  }

  return (
    <motion.div
      className="allPages"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: .8}}
    >
      {children}
    </motion.div>
  )
}

export default Animation
