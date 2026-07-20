import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import { useLangContent } from '../../hooks/useLangContent'
import '../../Pages/Portfolio/style.css'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import gitHubIcon from '/assets/gitubIcon.svg'
import wwwIcon from '/assets/www.svg'
import ProjectCard from './ProjectCard'


export default function Portfolio() {
  const languagesBrEn = useLangContent()
  const languages = languagesBrEn.portfolio.info.ct
  const languagesModal = languagesBrEn.portfolio.dataModal.ct

  const [transitionText, setTransitionText] = useState(false)
  const [transitionTextEn, setTransitionTextEn] = useState(false)
  const [getModal, setGetModal] = useState('')
  const [back, setback] = useState(0)
  const [prev, setPrev] = useState(3)
  const [count, setCount] = useState(1)
  const [btnDisabledBack, setBtnDisabledBack] = useState(false)
  const [btnDisabledPrev, setBtnDisabledPrev] = useState(false)
  const modalRef = useRef(null);
  const currentBtn = document.querySelectorAll('#btnModal')

  let x = currentBtn.forEach((v) => { return v.value })

  const mount = languages.length
  
  const handleBack = () => {
    
    if(back >= 3) {
      setback((back) => back - 3)
      setPrev((prev) => prev - 3) 
      const values = count - 1
      setCount(values)
      setBtnDisabledBack(!btnDisabledBack)
    }
  }

  const handleNext = () => {
    if(prev < mount) {
      setback((back) => back + 3)
      setPrev((prev) => prev + 3)
      const values = count + 1
      setCount(values)
      setBtnDisabledPrev(!btnDisabledPrev)
    }
  }

  
  const data = TextContentDataTest[0].portuguese.portfolio.dataModal.ct;
  data.filter(e => e.index === getModal)
  const handleShowModal = () => {
    const modal = document.querySelector('#modal')
    const content = document.querySelector('.content')
    if (modal && content) {
      modal.classList.add('active')
      content.classList.add('active')
      document.body.style.overflow = 'hidden'
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const handleCloseModal = () => {
    const modal = document.querySelector('#modal')
    const content = document.querySelector('.content')
    if (modal && content) {
      modal.classList.remove('active')
      content.classList.remove('active')
      document.body.style.overflow = 'auto'
    }
  }

  const handleModalBackdropClick = (e) => {
    if (e.target.id === 'modal') {
      handleCloseModal()
    }
  }

  useEffect(() => {
    if(back < 1) {
      setBtnDisabledBack(btnDisabledBack)
    }
    const dd = document.getElementById('container')
    if (!dd) return

    const animate = dd.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')

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

  // function byDate

  return (
    <div className='allPages'>
      {languagesModal.filter(i => i.index == getModal).map(filtered => {
        return (
          <>
            <div 
              key={filtered.id} 
              id="modal" 
              className="modal"
              onClick={handleModalBackdropClick}
            >
              <div className="content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <button className='btnModalClose' onClick={handleCloseModal} aria-label="Fechar modal">
                  <FontAwesomeIcon icon={faClose} />
                </button>
                <h1>{filtered.title}</h1>
                <div className='textContent'>
                  <div className='groupText'>
                    <p>{filtered.text[0].p1}</p>
                    <p>{filtered.text[0].p2}</p>
                    <p>{filtered.text[0].p3}</p>
                  </div>
                  {filtered.img && filtered.img[0] && (
                    <div className='groupImage'>
                      {filtered.img[0].img1 && <img src={filtered.img[0].img1} alt={`${filtered.title} screenshot 1`} loading="lazy" />}
                      {filtered.img[0].img2 && <img src={filtered.img[0].img2} alt={`${filtered.title} screenshot 2`} loading="lazy" />}
                      {filtered.img[0].img3 && <img src={filtered.img[0].img3} alt={`${filtered.title} screenshot 3`} loading="lazy" />}
                    </div>
                  )}
                  <div className='dataModal'>
                    <span>{filtered.createAtText}</span>
                    <span>{filtered.createdAt}</span>
                  </div>
                  {(filtered.repo || filtered.site) && (
                    <div className='modal_links'>
                      {filtered.repo && filtered.repo !== 'https://github.com/vbanety' && (
                        <a href={filtered.repo} target="_blank" rel="noopener noreferrer" className="modal_link">
                          <img src={gitHubIcon} alt="GitHub" loading="lazy" />
                          <span>Ver código</span>
                        </a>
                      )}
                      {filtered.site && (
                        <a href={filtered.site} target="_blank" rel="noopener noreferrer" className="modal_link">
                          <img src={wwwIcon} alt="Website" loading="lazy" />
                          <span>Visitar site</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )
      })}

      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id='container' className='container'>
          <h1 className='title_page'>Portfolio</h1>
          <AnimationCards>
            <div className="jobs">
              <div>
                {/* {console.log(languages)} */}
                <ul className='jobs'>
                  {languages.sort((a,b) => { return b.sortDate - a.sortDate}).slice(back, prev).map((item, index) => {
                    const transitionClassName = transitionText ? 'animateText' : 'animateText active'
                      && transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
                    const modalEntry = languagesModal.find((m) => m.index === item.more)
                    const thumbnail = modalEntry?.img?.[0]?.img1 || null
                    return (
                      <ProjectCard
                        key={index}
                        item={item}
                        thumbnail={thumbnail}
                        featured={index === 0}
                        transitionClassName={transitionClassName}
                        setGetModal={setGetModal}
                        handleShowModal={handleShowModal}
                      />
                    );
                  }).sort((a, b) => {
                    return a.sortDate - b.sortDate;
                  })}
                </ul>
                <div className='pagination'>
                  
                  <button 
                    className={btnDisabledBack ? 'btnDisabled' : 'btnDisabled active'}
                    onClick={() => handleBack()}
                    >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                  <button className='number'>
                    {count}
                  </button>
                  <button 
                    className={!btnDisabledPrev ? 'btnDisabledPrev' : 'btnDisabledPrev active'}
                    onClick={() => handleNext()}
                    >
                  <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </div>
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
