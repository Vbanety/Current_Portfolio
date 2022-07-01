import {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import iconArroba from '../../../public/assets/at_arroba.svg'
import iconPhoneWight from '../../../public/assets/phone_white.svg'
import iconLocation from '../../../public/assets/location.svg'
import iconSend from '../../../public/assets/sentIcon.svg'
import './style.css'
import iconInstagram from '../../../public/assets/instagram_white.svg'
import iconLinkedIn from '../../../public/assets/linkedin_white.svg'
import iconTwitter from '../../../public/assets/twetter_white.svg'
import Animation from '../../Components/Animation'
import './style.css'
import { TextContentData } from '../../Components/TextContent/TextContentData'


export default function Sobre() {
  const [languagesBrEn, setLanguagesBrEn] = useState(TextContentData[0].portuguese.contact)  
  

  useEffect(() => {
    const dx = document.getElementById('container')
    const verifyInputLanguages = dx.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
      if(e.id == 'pt') {
        setLanguagesBrEn(TextContentData[0].portuguese.contact)
      } else if(e.id == 'en') {
        setLanguagesBrEn(TextContentData[1].english.contact)
        
      } else {
        return false
      }
    }
    ))


  }, [])
  
  return (
    <div className="allPages">
      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id='container' className='container'>
          <h1 className='title_contact'>{languagesBrEn.titlePage}</h1>
          <div className='column_contact'>
            <div className='flex_contact'>
              <div className="info_contacts">
                <div>
                  <img src={iconArroba} />
                  <p>{languagesBrEn.myEmail}</p>
                </div>

                <div>
                  <img src={iconPhoneWight} />
                  <p>{languagesBrEn.phone}</p>
                </div>

                <div>
                  <img src={iconLocation} />
                  <p>{languagesBrEn.address}</p>
                </div>
              </div>

              <form>
                <input type='email' id='email' placeholder={languagesBrEn.fieldEmail} />
                <input type='text' id='userName' placeholder={languagesBrEn.fieldName} />
                <textarea type="text" placeholder={languagesBrEn.fieldMessage} rows="10" cols="40"></textarea>
                <button><img src={iconSend} /> {languagesBrEn.sendSend}
                </button>
              </form>
            </div>

            <ul className='list_icons_contact'>
              <li><a href='https://twitter.com/Twitte3Vinicius' target="blank"><img src={iconTwitter} /></a></li>
              <li><a href='https://www.instagram.com/viny_batista_10/' target="blank"><img src={iconInstagram} /></a></li>
              <li><a href='https://www.linkedin.com/in/vinicius-batista-815983137/' target="blank"><img src={iconLinkedIn} /></a></li>
            </ul>
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
