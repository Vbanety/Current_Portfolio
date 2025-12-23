import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { IconData } from './dataSkills'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import './style.css'

export default function Skills() {
  
  let data = localStorage.getItem('data')

  let parseData = data ? JSON.parse(data) : null

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese : parseData

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData)  
    const [transitionText, setTransitionText] = useState(false)
    const [transitionTextEn, setTransitionTextEn] = useState(false)
  useEffect(() => {
    const d = document.getElementById('container')
    if (!d) return
    
    const verifyInputLanguages = d.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')
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

    if (verifyInputLanguages) {
      verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
        if(e.id == 'pt') {
          localStorage.setItem('data', JSON.stringify(TextContentDataTest[0].portuguese))
          let dataPt = localStorage.getItem('data')
          let parseDataPt = JSON.parse(dataPt)
          setLanguagesBrEn(parseDataPt)
        } else if(e.id == 'en') {
          localStorage.setItem('data', JSON.stringify(TextContentDataTest[1].english))
          let dataEn = localStorage.getItem('data')
          let parseDataEn = JSON.parse(dataEn)
          setLanguagesBrEn(parseDataEn)
        }
      }))
    }
  }, [])

  return (
    <div className='allPages'>
      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id='container' className='container'>
          <h1 className='title_page'>{languagesBrEn.shills.titlePage}</h1>
          <AnimationCards>
            <div className="cardSkills">
              <div className="languages l-left">
                <h2>{languagesBrEn.shills.titleTechs}</h2>
                <ul>
                  {IconData.map((item) => {
                    return (
                      <>
                        {<li key={item.index}><img src={item.icon} /></li>}
                      </>
                    )
                  })}
                </ul>
              </div>

              <div className="languages l-right">
                <div className="experiences">
                  <div>
                    <h4>{languagesBrEn.shills.titleOne}</h4>
                    <p className={
                            transitionText ? 'animateText' : 'animateText active'
                            &&
                            transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
                            }>{languagesBrEn.shills.descOne}</p>
                  </div>
                  <div>
                    <h4>{languagesBrEn.shills.titleTwo}</h4>
                    <p className={
                            transitionText ? 'animateText' : 'animateText active'
                            &&
                            transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
                            }>{languagesBrEn.shills.descTwo}</p>
                  </div>
                  <div>
                  <h4>{languagesBrEn.shills.titleThree}</h4>
                    <p className={
                            transitionText ? 'animateText' : 'animateText active'
                            &&
                            transitionTextEn ? 'animateTextEn' : 'animateTextEn active'
                            }>{languagesBrEn.shills.descThree}</p>
                  </div>
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
