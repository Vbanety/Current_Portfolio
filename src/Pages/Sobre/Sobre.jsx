import {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import downloadIcon from '../../../public/assets/download.svg'
import mySelf from '../../../public/assets/me.png'
import medal from '../../../public/assets/medal.svg'
import card_message from '../../../public/assets/cartao_stars.png'
import { aboutData } from './dataAbout'
import Animation from '../../Components/Animation'
import AnimationCards from '../../Components/AnimationCards'

import './style.css'

export default function Contato() {
  var pt = 'portuguese'
  var en = 'english'
  const [languagesBrEn, setLanguagesBrEn] = useState(aboutData[0].portuguese[0]) 

  useEffect(() => {
    const dx = document.getElementById('container')
    const verifyInputLanguages = dx.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
      if(e.id == 'pt') {
        setLanguagesBrEn(pt)
      } else if(e.id == 'en') {
        setLanguagesBrEn(en)
      } else {
        return false
      }
    }
    ))

  }, [])

  const data = languagesBrEn !== pt && languagesBrEn !== en ? aboutData[0].portuguese[0] : aboutData[0][languagesBrEn][0]
  return (
    <div className='allPages'>
      <Animation>

        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id="container" className='container'>
          <div className='card_me'>
            <h1 style={{ color: '#f8e85f' }}>{data.aboutMe[0].titlePage}</h1>
              <div className="card-contact">
                <img src={mySelf} alt="" />
                <h1 className='titleName'>{data.aboutMe[0].name}</h1>
                <p>{data.aboutMe[0].positionJob}</p>
              </div>
            {/* <AnimationCards>
            </AnimationCards> */}
          </div>
          <div className="description_contact">
            <h1>{data.aboutMe[0].titleDescription}</h1>
            {data.aboutMe[0].paragraphs.map((item, index) => {
              return (
                <>
                  <div className="medals">
                    <img src={medal} />
                  <p key={index}>{item.text}</p>
                  </div>
                </>
              )
            })}
            <a href="../../../public/assets/pdf/CV-Dev 18 04 2022.pdf" target="_blank"><img src={downloadIcon} /><span>{data.aboutMe[0].resume}</span></a>
          </div>

          <div className='line_blue_divide'>
            <hr />
          </div>
          <div className="section_bottom">

            <div className="card_testemunhos">
              <h1>{data.aboutMe[0].titleTestimonies}</h1>
              {data.testimonies.map((item) => {
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
              <p>{data.aboutMe[0].curiosity}</p>
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
