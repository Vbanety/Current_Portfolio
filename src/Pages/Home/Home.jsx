import React from 'react'
import { Link } from 'react-router-dom'
import myPicture from '/assets/ComponentMyself.svg'
import Animation from '../../Components/Animation'
import { useLangContent } from '../../hooks/useLangContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCode, faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './style.css'

export default function Home() {
  const languagesBrEn = useLangContent()
  const home = languagesBrEn.home
  const resumePdf = languagesBrEn.about.aboutMe[0].pdf

  return (
    <>
      <Animation>
      <div id="container" className="container">
      <h1 className='title_page'>Home</h1>
        <div className="hero-card">
          <div className="hero-content">
            <span className="hero-eyebrow">{home.eyebrow}</span>
            <h1 className="hero-name">{home.position}</h1>

            <div className="hero-chips">
              <div className="hero-chip">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>{home.chipYears}</span>
              </div>
              <div className="hero-chip">
                <FontAwesomeIcon icon={faCode} />
                <span>{home.chipStack}</span>
              </div>
            </div>

            <p className="hero-description">{home.description}</p>

            <div className="hero-highlight">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>{home.highlight}</p>
            </div>

            <div className="hero-actions">
              <Link to="/portfolio" className="hero-btn-primary">
                {home.ctaProjects}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a href={resumePdf} download target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                <FontAwesomeIcon icon={faDownload} />
                {home.ctaResume}
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/vbanety" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/vinicius-batista-815983137/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-media-frame">
              <img src={myPicture} alt="Vinícius Batista" />
            </div>
            <div className="hero-media-badge">
              <FontAwesomeIcon icon={faCode} />
              <div>
                <p className="hero-media-badge-label">Stack</p>
                <p className="hero-media-badge-value">{home.badgeLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Animation>
    </>
  )
}
