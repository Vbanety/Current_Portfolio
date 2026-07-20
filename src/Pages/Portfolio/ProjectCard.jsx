import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode, faCircleCheck, faPalette } from '@fortawesome/free-solid-svg-icons'
import { useSettings } from '../../Context/SettingsContext'
import { playBeep } from '../../utils/playBeep'

const TILT_RANGE = 6 // degrees

const TECH_LABELS = {
  html: 'HTML5',
  css: 'CSS3',
  js: 'JavaScript',
  ts: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  node: 'Node.js',
  bootstrap: 'Bootstrap',
  php: 'PHP',
  laravel: 'Laravel',
  sql: 'SQL',
  apiIcon: 'REST API',
}

function TechChips({ icons }) {
  return (
    <ol className="tech_chips_list">
      {Object.entries(TECH_LABELS).map(([key, label]) => (
        icons[0][key] && (
          <li key={key} className="tech_chip">
            <img src={icons[0][key]} alt="" loading="lazy" />
            {label}
          </li>
        )
      ))}
    </ol>
  )
}

function ProjectLinks({ item }) {
  return (
    <div className="project_links">
      {item.site && (
        <a href={item.site} target="_blank" rel="noopener noreferrer" className="project_link_primary">
          Ver site <FontAwesomeIcon icon={faArrowRight} />
        </a>
      )}
      {item.repo && item.repo !== 'https://github.com/vbanety' && (
        <a href={item.repo} target="_blank" rel="noopener noreferrer" className="project_link_secondary">
          <FontAwesomeIcon icon={faCode} /> Repositório
        </a>
      )}
    </div>
  )
}

export default function ProjectCard({ item, thumbnail, featured, transitionClassName, setGetModal, handleShowModal }) {
  const cardRef = useRef(null)
  const { animationIntensity, hoverSfx } = useSettings()
  const tiltEnabled = animationIntensity === 'full'

  const handleMouseEnter = () => {
    if (hoverSfx) playBeep({ frequency: 600, duration: 0.05, volume: 0.08 })
  }

  const handleMouseMove = (e) => {
    if (!tiltEnabled || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * TILT_RANGE * 2
    const rotateX = (0.5 - py) * TILT_RANGE * 2
    cardRef.current.style.setProperty('--tilt-x', `${rotateX}deg`)
    cardRef.current.style.setProperty('--tilt-y', `${rotateY}deg`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty('--tilt-x', '0deg')
    cardRef.current.style.setProperty('--tilt-y', '0deg')
  }

  const viewMoreButton = (
    <button
      className="btn_view_more"
      id="btnModal"
      onMouseOver={(e) => setGetModal(e.currentTarget.value)}
      onClick={() => handleShowModal()}
      value={item.more}
      aria-label="Ver mais detalhes"
    >
      Ver mais
    </button>
  )

  if (featured) {
    return (
      <li
        className="boxJobs boxJobs-featured"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="featured_media">
          {thumbnail ? (
            <img src={thumbnail} alt={item.title} loading="lazy" />
          ) : (
            <div className="featured_media_placeholder">
              <FontAwesomeIcon icon={faPalette} />
            </div>
          )}
        </div>
        <div className="featured_content">
          <span className="project_status">
            <FontAwesomeIcon icon={faCircleCheck} /> {item.createAtText} {item.createdAt}
          </span>
          <h2 className="featured_title">{item.title}</h2>
          <p className={transitionClassName}>{item.text}</p>
          <TechChips icons={item.icons} />
          <div className="featured_footer">
            <ProjectLinks item={item} />
            {viewMoreButton}
          </div>
        </div>
      </li>
    )
  }

  return (
    <li
      className="boxJobs"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid_media">
        {thumbnail ? (
          <img src={thumbnail} alt={item.title} loading="lazy" />
        ) : (
          <div className="grid_media_placeholder">
            <FontAwesomeIcon icon={faPalette} />
          </div>
        )}
      </div>

      <div className="title">
        {item.title}
      </div>
      <span className="project_status project_status-grid">
        <FontAwesomeIcon icon={faCircleCheck} /> {item.createAtText} {item.createdAt}
      </span>
      <p className={transitionClassName}>{item.text}</p>

      <TechChips icons={item.icons} />

      <div className="footer_card">
        {viewMoreButton}
        <ProjectLinks item={item} />
      </div>
    </li>
  )
}
