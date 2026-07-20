import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import downloadIcon from '/assets/download.svg'
import mySelf from '/assets/me.png'
import medal from '/assets/medal.svg'
import { useLangContent } from '../../hooks/useLangContent'
import Animation from '../../Components/Animation'

import './style.css'

export default function Sobre() {
  const languagesBrEn = useLangContent()

  return (
    <div className='allPages'>
      <Animation>

        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id="container" className='container'>
          <h1 className='title_page'>{languagesBrEn.about.aboutMe[0].titlePage}</h1>

          <div className="about-hero">
            <div className="about-hero-media">
              <div className="about-hero-glow"></div>
              <div className="about-hero-frame">
                <img src={mySelf} alt={languagesBrEn.about.aboutMe[0].name} />
              </div>
            </div>

            <div className="about-hero-content">
              <span className="about-eyebrow">{languagesBrEn.about.aboutMe[0].eyebrow}</span>
              <h2 className="about-name">{languagesBrEn.about.aboutMe[0].name}</h2>
              <p className="about-summary">{languagesBrEn.about.aboutMe[0].paragraphs[0]?.text}</p>

              <div className="about-info-grid">
                <div className="about-info-card">
                  <h3>{languagesBrEn.about.aboutMe[0].expertiseTitle}</h3>
                  <p>{languagesBrEn.about.aboutMe[0].expertiseText}</p>
                </div>
                <div className="about-info-card">
                  <h3>{languagesBrEn.about.aboutMe[0].philosophyTitle}</h3>
                  <p>{languagesBrEn.about.aboutMe[0].philosophyText}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="description_contact">
            <h1>{languagesBrEn.about.aboutMe[0].titleDescription}</h1>
            {languagesBrEn.about.aboutMe[0].paragraphs.slice(1).map((item, index) => {
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
            <div className="card_testemunhos card_testemunhos-full">
              <h1>{languagesBrEn.about.aboutMe[0].titleTestimonies}</h1>
              <div className="testimonials_grid">
                {languagesBrEn.about.testimonies.map((item) => {
                  return (
                    <div className="depoiments" key={item.index}>
                      <div className="top_info">
                        <div className='person_name'>
                          <a href={item.link} target="blank">
                          <img src={item.person} alt="person" loading="lazy" />
                          </a>
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.position}</p>
                          </div>
                        </div>
                        <div className="stars">
                          <img src={item.star[0].one} alt="strelas" loading="lazy" />
                          <img src={item.star[1].two} alt="strelas" loading="lazy" />
                          <img src={item.star[2].three} alt="strelas" loading="lazy" />
                          <img src={item.star[3].four} alt="strelas" loading="lazy" />
                          <img src={item.star[4].five} alt="strelas" loading="lazy" />
                        </div>
                      </div>
                      <p className='text_testimonials'>{item.description}</p>
                    </div>
                  )
                })}
              </div>
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
