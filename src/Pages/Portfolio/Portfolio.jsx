import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import '../../Pages/Portfolio/style.css'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import gitHubIcon from '/assets/gitubIcon.svg'
import wwwIcon from '/assets/www.svg'


export default function Portfolio() {

  let dataP = localStorage.getItem('data')
  let parseData = dataP ? JSON.parse(dataP) : null

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese.portfolio : parseData.portfolio

  const [transitionText, setTransitionText] = useState(false)
  const [transitionTextEn, setTransitionTextEn] = useState(false)
  const [languages, setLanguages] = useState(verifyData.info.ct)
  const [languagesModal, setLanguagesModal] = useState(verifyData.dataModal.ct)
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
    
    const verifyInputLanguages = dd.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')
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

    if (verifyInputLanguages) {
      verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
        if (e.id == 'pt') {
          localStorage.setItem('data', JSON.stringify(TextContentDataTest[0].portuguese))
          let dataPt = localStorage.getItem('data')
          let parseDataPt = JSON.parse(dataPt)
          setLanguages(parseDataPt.portfolio.info.ct)
          setLanguagesModal(parseDataPt.portfolio.dataModal.ct)
        } else if (e.id == 'en') {
          localStorage.setItem('data', JSON.stringify(TextContentDataTest[1].english))
          let dataEn = localStorage.getItem('data')
          let parseDataEn = JSON.parse(dataEn)
          setLanguages(parseDataEn.portfolio.info.ct)
          setLanguagesModal(parseDataEn.portfolio.dataModal.ct)
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
                      {filtered.img[0].img1 && <img src={filtered.img[0].img1} alt={`${filtered.title} screenshot 1`} />}
                      {filtered.img[0].img2 && <img src={filtered.img[0].img2} alt={`${filtered.title} screenshot 2`} />}
                      {filtered.img[0].img3 && <img src={filtered.img[0].img3} alt={`${filtered.title} screenshot 3`} />}
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
                          <img src={gitHubIcon} alt="GitHub" />
                          <span>Ver código</span>
                        </a>
                      )}
                      {filtered.site && (
                        <a href={filtered.site} target="_blank" rel="noopener noreferrer" className="modal_link">
                          <img src={wwwIcon} alt="Website" />
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
                    return (
                      <>
                        <li key={index} className="boxJobs">

                          <div className="title">
                            {item.title}
                          </div>
                          <p className={
                            transitionText ? 'animateText' : 'animateText active'
                              &&
                              transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
                          }>{item.text}</p>
                          <button
                            className="btn_view_more"
                            id="btnModal"
                            onMouseOver={(e) => setGetModal(e.currentTarget.value)}
                            onClick={() => handleShowModal()}
                            value={item.more}
                            aria-label="Ver mais detalhes"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Ver mais</span>
                          </button>

                          <ol key={index} className="tech_icons_list">
                            {item.icons[0].html && <li><img src={item.icons[0].html} alt="HTML" title="HTML5" /></li>}
                            {item.icons[0].css && <li><img src={item.icons[0].css} alt="CSS" title="CSS3" /></li>}
                            {item.icons[0].js && <li><img src={item.icons[0].js} alt="JavaScript" title="JavaScript" /></li>}
                            {item.icons[0].react && <li><img src={item.icons[0].react} alt="React" title="React" /></li>}
                            {item.icons[0].bootstrap && <li><img src={item.icons[0].bootstrap} alt="Tech" title="Technology" /></li>}
                            {item.icons[0].php && <li><img src={item.icons[0].php} alt="Tech" title="Technology" /></li>}
                            {item.icons[0].laravel && <li><img src={item.icons[0].laravel} alt="Tech" title="Technology" /></li>}
                          </ol>

                          <div className="footer_card">
                            <div className="buttons">
                              {item.repo && item.repo !== 'https://github.com/vbanety' && (
                                <a href={item.repo} target="_blank" rel="noopener noreferrer" className="btn_link">
                                  <img src={item.icons[0].github} alt="GitHub" />
                                  <span>Repositório</span>
                                </a>
                              )}
                              {item.site && (
                                <a href={item.site} target="_blank" rel="noopener noreferrer" className="btn_link">
                                  <img src={item.icons[0].www} alt="Website" />
                                  <span>Ver site</span>
                                </a>
                              )}
                            </div>

                            <div className="dates">
                              <span>{item.createAtText}</span>
                              <span>{item.createdAt}</span>
                            </div>
                          </div>
                        </li>
                      </>
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
                    <FontAwesomeIcon icon={faAngleLeft} size={50} />
                  </button>
                  <button className='number'>
                    {count}
                  </button>
                  <button 
                    className={!btnDisabledPrev ? 'btnDisabledPrev' : 'btnDisabledPrev active'}
                    onClick={() => handleNext()}
                    >
                  <FontAwesomeIcon icon={faAngleRight} size={50} />
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
