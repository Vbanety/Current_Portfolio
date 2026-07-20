import { motion } from "framer-motion"
import { useSettings } from "../Context/SettingsContext"

const AnimationCards = ({ children }) => {
  const { animationIntensity } = useSettings()

  if (animationIntensity === 'off') {
    return <div className="allPages">{children}</div>
  }

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  const duration = animationIntensity === 'reduced' ? 0.3 : 1

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

export default AnimationCards
