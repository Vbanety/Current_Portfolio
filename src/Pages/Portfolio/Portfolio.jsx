import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { dataPortfolio } from './dataPortfolio'
import { dataModal } from './dataModal'
import '../../Pages/Portfolio/style.css'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons'


export default function Portfolio() {
  const [transitionText, setTransitionText] = useState(false)
  const [transitionTextEn, setTransitionTextEn] = useState(false)
  const [languages, setLanguages] = useState(dataPortfolio[0].pt)
  const array = [languages]
  const [getModal, setGetModal] = useState('')
  const modalRef = useRef(null);
  const currentBtn = document.querySelectorAll('#btnModal')
  
  let x = currentBtn.forEach((v) => { return v.value })

  const data = dataModal.filter(e => e.index === getModal)
  const handleShowModal = () => {
    console.log(data);
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
        return setLanguages(dataPortfolio[0].pt) 
      } else if (e.id == 'en') {
        return setLanguages(dataPortfolio[0].en) 
      }
    }
    ))
    
  }, [])

  // console.log(languages)
  return (
    <div className='allPages'>
      {dataModal.filter(i => i.index == getModal).map(filtered => {
        return (
          <>
            <div id="modal" className="modal">
              <div className="content" ref={modalRef}value="modalRef">
                <h1>{filtered.title}</h1>
                <div className='textContent'>
                  <p>{filtered.text}</p>
                  <div className='groupImage'>
                    <img src={filtered.img[0].img1} alt='images' />
                    <img src={filtered.img[0].img2} alt='images' />
                    <img src={filtered.img[0].img3} alt='images' />
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
              <div >
                <ul className='jobs'>
                  {languages.map((item, index) => {
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

                          <ol>
                            <li><img src={item.icons[0].html} /></li>
                            <li><img src={item.icons[0].css} /></li>
                            <li><img src={item.icons[0].js} /></li>
                            <li><img src={item.icons[0].bootstrap} /></li>
                            <li><img src={item.icons[0].react} /></li>
                          </ol>

                          <div className="buttons">
                            <button><img src={item.icons[0].github} /><a href={item.repo} target="blank">Repo</a></button>
                            <button><img src={item.icons[0].www} /><a href={item.site} target="blank">Site</a></button>
                          </div>
                        </li>
                      </>
                    )
                  })}
                </ul>
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
