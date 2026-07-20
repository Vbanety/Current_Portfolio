import { motion } from "framer-motion"
import { useSettings } from "../Context/SettingsContext"

const Animation = ({ children }) => {
  const { animationIntensity } = useSettings()

  if (animationIntensity === 'off') {
    return <div className="allPages">{children}</div>
  }

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  }

  const duration = animationIntensity === 'reduced' ? 0.2 : 0.8

  return (
    <motion.div
      className="allPages"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration }}
    >
      {children}
    </motion.div>
  )
}

export default Animation
