import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillBar from '../SkillBar/SkillBar'
import './SkillCategoryCard.css'

export default function SkillCategoryCard({ icon, title, description, descriptionClassName, skills, secondarySkills = [] }) {
  return (
    <section className="skill-category-card">
      <div className="skill-category-header">
        <div className="skill-category-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{title}</h2>
      </div>

      <p className={descriptionClassName}>{description}</p>

      <ul className="skill-bar-list">
        {skills.map((item) => (
          <SkillBar key={item.index} icon={item.icon} name={item.name} level={item.level} />
        ))}
      </ul>

      {secondarySkills.length > 0 && (
        <div className="skill-category-chips">
          {secondarySkills.map((item) => (
            <span key={item.index} className="skill-category-chip">{item.name}</span>
          ))}
        </div>
      )}
    </section>
  )
}
