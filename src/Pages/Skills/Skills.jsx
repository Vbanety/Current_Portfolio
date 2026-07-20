import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faDatabase, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { IconData } from './dataSkills'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { useLangContent } from '../../hooks/useLangContent'
import SkillCategoryCard from '../../Components/SkillCategoryCard/SkillCategoryCard'
import './style.css'

export default function Skills() {
  const languagesBrEn = useLangContent()
    const [transitionText, setTransitionText] = useState(false)
    const [transitionTextEn, setTransitionTextEn] = useState(false)
  useEffect(() => {
    const d = document.getElementById('container')
    if (!d) return

    const animate = d.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')

    if (animate) {
      animate.forEach((e) => e.addEventListener('change', () => {
        if (e.id == 'pt') {
          return setTransitionText(true) && setTransitionTextEn(false)
        } else if (e.id == 'en') {
          return setTransitionText(false) && setTransitionTextEn(true)
        }
      }))
    }
  }, [])

  const descClassName = (
    transitionText ? 'animateText' : 'animateText active'
      &&
      transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
  )

  const byCategory = (category) => IconData.filter((i) => i.category === category && !i.secondary)
  const secondaryByCategory = (category) => IconData.filter((i) => i.category === category && i.secondary)

  return (
    <div className='allPages'>
      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id='container' className='container'>
          <h1 className='title_page'>{languagesBrEn.shills.titlePage}</h1>
          <p className='skills-subtitle'>{languagesBrEn.shills.subtitle}</p>
          <AnimationCards>
            <div className="skills-grid">
              <SkillCategoryCard
                icon={faDisplay}
                title={languagesBrEn.shills.titleOne}
                description={languagesBrEn.shills.descOne}
                descriptionClassName={descClassName}
                skills={byCategory('frontend')}
                secondarySkills={secondaryByCategory('frontend')}
              />
              <SkillCategoryCard
                icon={faDatabase}
                title={languagesBrEn.shills.titleTwo}
                description={languagesBrEn.shills.descTwo}
                descriptionClassName={descClassName}
                skills={byCategory('backend')}
                secondarySkills={secondaryByCategory('backend')}
              />
              <SkillCategoryCard
                icon={faDiagramProject}
                title={languagesBrEn.shills.titleThree}
                description={languagesBrEn.shills.descThree}
                descriptionClassName={descClassName}
                skills={byCategory('fullstack')}
                secondarySkills={secondaryByCategory('fullstack')}
              />
            </div>
          </AnimationCards>
        </div>
        <div className='line_blue'>
          <hr />
        </div>
        <Footer />
      </Animation>
    </div>
  )
}
