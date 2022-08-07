import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import '../../Pages/Portfolio/style.css'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlus, faClose } from '@fortawesome/free-solid-svg-icons'


export default function Portfolio() {

  let dataP = localStorage.getItem('data')
  let parseData = JSON.parse(dataP)

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
    var x = document.querySelector('#modal')
    x.classList.add('active')
    var b = document.querySelector('.content')
    b.classList.add('active')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleCloseModal = () => {
    var x = document.querySelector('#modal')
    x.classList.remove('active')
    var b = document.querySelector('.content')
    b.classList.remove('active')
  }

  useEffect(() => {
    if(back < 1) {
      setBtnDisabledBack(btnDisabledBack)
    }
    const dd = document.getElementById('container')
    const verifyInputLanguages = dd.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')
    const animate = dd.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    animate.forEach((e) => e.addEventListener('change', () => {
      
      if (e.id == 'pt') {
        return setTransitionText(true) && setTransitionTextEn(false)
      } else if (e.id == 'en') {
        return setTransitionText(false) && setTransitionTextEn(true)
      }
    }
    ))

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
    }
    ))

  }, [])

  // function byDate

  return (
    <div className='allPages'>
      {languagesModal.filter(i => i.index == getModal).map(filtered => {
        return (
          <>
            <div key={filtered.id} id="modal" className="modal">
              <div className="content" ref={modalRef} value="modalRef">
                <h1>{filtered.title}</h1>
                <div className='textContent'>
                  <div className='groupText'>
                    <p>{filtered.text[0].p1}</p>
                    <p>{filtered.text[0].p2}</p>
                    <p>{filtered.text[0].p3}</p>
                  </div>
                  <div className='groupImage'>
                    <img src={filtered.img[0].img1} alt='images' />
                    <img src={filtered.img[0].img2} alt='images' />
                    <img src={filtered.img[0].img3} alt='images' />
                  </div>
                  <div className='dataModal'>
                    <span>{filtered.createAtText}</span>
                    <span>{filtered.createdAt}</span>
                  </div>
                </div>
                <button className='btnModalClose' onClick={() => handleCloseModal()}
                ><FontAwesomeIcon icon={faClose} /></button>
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
                          }>{item.text}
                            <button
                              id="btnModal"
                              onMouseOver={(e) => setGetModal(e.currentTarget.value)}
                              onClick={() => handleShowModal()}
                              value={item.more}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </p>

                          <ol key={index}>
                            <li><img src={item.icons[0].html} /></li>
                            <li><img src={item.icons[0].css} /></li>
                            <li><img src={item.icons[0].js} /></li>
                            <li><img src={item.icons[0].bootstrap} /></li>
                            <li><img src={item.icons[0].react} /></li>
                          </ol>

                          <div className="footer_card">
                            <div className="buttons">
                              <button><img src={item.icons[0].github} /><a href={item.repo} target="blank">Repo</a></button>
                              <button><img src={item.icons[0].www} /><a href={item.site} target="blank">Site</a></button>
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
