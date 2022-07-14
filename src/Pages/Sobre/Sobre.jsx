import {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import downloadIcon from '/assets/download.svg'
import mySelf from '/assets/me.png'
import medal from '/assets/medal.svg'
import card_message from '/assets/cartao_stars.png'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'

import './style.css'

export default function Contato() {
  
  let dataA = localStorage.getItem('data')

  let parseData = JSON.parse(dataA)

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese.about : parseData

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData) 

  useEffect(() => {
    const dx = document.getElementById('container')
    const verifyInputLanguages = dx.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
      if(e.id == 'pt') {
        localStorage.setItem('data', JSON.stringify(TextContentDataTest[0].portuguese))
        let dataPt = localStorage.getItem('data')
        let parseDataPt = JSON.parse(dataPt)
        setLanguagesBrEn(parseDataPt)
        console.log(languagesBrEn)
      } else if(e.id == 'en') {
        localStorage.setItem('data', JSON.stringify(TextContentDataTest[1].english))
        let dataEn = localStorage.getItem('data')
        let parseDataEn = JSON.parse(dataEn)
        setLanguagesBrEn(parseDataEn)
        console.log(languagesBrEn)
      } else {
        return false
      }
    }
    ))

  }, [])

  return (
    <div className='allPages'>
      <Animation>

        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id="container" className='container'>
          <div className='card_me'>
            <h1 style={{ color: '#f8e85f' }}>{languagesBrEn.about.aboutMe[0].titlePage}</h1>
              <div className="card-contact">
                <img src={mySelf} alt="" />
                <h1 className='titleName'>{languagesBrEn.about.aboutMe[0].name}</h1>
                <p>{languagesBrEn.about.aboutMe[0].positionJob}</p>
              </div>
            {/* <AnimationCards>
            </AnimationCards> */}
          </div>
          <div className="description_contact">
            <h1>{languagesBrEn.about.aboutMe[0].titleDescription}</h1>
            {languagesBrEn.about.aboutMe[0].paragraphs.map((item, index) => {
              return (
                <>
                  <div className="medals">
                    <img src={medal} />
                  <p key={index}>{item.text}</p>
                  </div>
                </>
              )
            })}
            <a href={languagesBrEn.about.aboutMe[0].pdf} download target="_blank"><img src={downloadIcon} /><span>{languagesBrEn.about.aboutMe[0].resume}</span></a>
          </div>

          <div className='line_blue_divide'>
            <hr />
          </div>
          <div className="section_bottom">

            <div className="card_testemunhos">
              <h1>{languagesBrEn.about.aboutMe[0].titleTestimonies}</h1>
              {languagesBrEn.about.testimonies.map((item) => {
                return (
                  <div className="depoiments" key={item.index}>
                    <div className="top_info">
                      <div className='person_name'>
                        <a href={item.link} target="blank">
                        <img src={item.person} alt="person" />
                        </a>
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.position}</p>
                        </div>
                      </div>
                      <div className="stars">
                        <img src={item.star[0].one} alt="strelas" />
                        <img src={item.star[1].two} alt="strelas" />
                        <img src={item.star[2].three} alt="strelas" />
                        <img src={item.star[3].four} alt="strelas" />
                        <img src={item.star[4].five} alt="strelas" />
                      </div>
                    </div>
                    <p className='text_testimonials'>{item.description}</p>
                  </div>
                )
              })}
            </div>
            <div className="card_letter_message">
              <p>{languagesBrEn.about.aboutMe[0].curiosity}</p>
              <img src={card_message} alt="card_Message" />
            </div>
          </div>
        </div>

        <div className='line_blue'>
          <hr />
        </div>
        <Footer />
      </Animation>
    </div>
  )
}
