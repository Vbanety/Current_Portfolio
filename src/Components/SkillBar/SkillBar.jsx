import React from 'react'
import { motion } from 'framer-motion'
import { useSettings } from '../../Context/SettingsContext'
import './SkillBar.css'

export default function SkillBar({ icon, name, level }) {
  const { animationIntensity } = useSettings()
  const skipAnimation = animationIntensity === 'off'

  return (
    <li className="skill-bar-row">
      <img src={icon} alt={name} className="skill-bar-icon" loading="lazy" />
      <div className="skill-bar-info">
        <div className="skill-bar-labels">
          <span className="skill-bar-name">{name}</span>
          <span className="skill-bar-level">{level}%</span>
        </div>
        <div className="skill-bar-track">
          <motion.div
            className="skill-bar-fill"
            initial={skipAnimation ? false : { width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: skipAnimation ? 0 : animationIntensity === 'reduced' ? 0.3 : 1, ease: 'easeOut' }}
            style={skipAnimation ? { width: `${level}%` } : undefined}
          >
            <span className="skill-bar-glow" />
          </motion.div>
        </div>
      </div>
    </li>
  )
}
