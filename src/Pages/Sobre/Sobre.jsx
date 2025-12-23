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

export default function Sobre() {
  
  let dataA = localStorage.getItem('data')

  let parseData = dataA ? JSON.parse(dataA) : null

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese : parseData

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData) 

  useEffect(() => {
    const dx = document.getElementById('container')
    if (!dx) return
    
    const verifyInputLanguages = dx.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')
    
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
        <div id="container" className='container'>
          <div className='card_me'>
            <h1>{languagesBrEn.about.aboutMe[0].titlePage}</h1>
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

          {/* Timeline de Experiências Profissionais */}
          <div className="experience_timeline_section">
            <h1 className="timeline_title">{languagesBrEn.about.aboutMe[0].titleExperience}</h1>
            <div className="timeline_container">
              {languagesBrEn.about.experience && languagesBrEn.about.experience.map((exp, index) => (
                <div key={exp.id} className={`timeline_item ${exp.current ? 'current' : ''} ${exp.type.toLowerCase()}`}>
                  <div className="timeline_marker">
                    <div className="marker_dot"></div>
                    {index < languagesBrEn.about.experience.length - 1 && <div className="marker_line"></div>}
                  </div>
                  <div className="timeline_content">
                    <div className="timeline_header">
                      <div className="timeline_header_top">
                        <h3 className="timeline_company">{exp.company}</h3>
                        {exp.current && <span className="current_badge">Atual</span>}
                      </div>
                      <h4 className="timeline_position">{exp.position}</h4>
                      <div className="timeline_meta">
                        <span className="timeline_period">{exp.period}</span>
                        <span className="timeline_location">{exp.location}</span>
                        <span className={`timeline_type ${exp.type.toLowerCase()}`}>{exp.type}</span>
                      </div>
                    </div>
                    <p className="timeline_description">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="timeline_achievements">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="timeline_technologies">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech_badge">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
