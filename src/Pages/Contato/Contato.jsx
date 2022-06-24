import React from 'react'
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

export default function Sobre() {
  return (
    <div className="allPages">
      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div className='container'>
          <h1 className='title_contact'>Contato</h1>
          <div className='column_contact'>
            <div className='flex_contact'>
              <div className="info_contacts">
                <div>
                  <img src={iconArroba} />
                  <p>vbanetyy@gmail.com</p>
                </div>

                <div>
                  <img src={iconPhoneWight} />
                  <p>(12) 9 8259-0753</p>
                </div>

                <div>
                  <img src={iconLocation} />
                  <p>São José dos Campos - SP</p>
                </div>
              </div>

              <form>
                <input type='email' id='email' placeholder="Email.." />
                <input type='text' id='userName' placeholder="Nome" />
                <textarea type="text" placeholder='Mensagem' rows="10" cols="40"></textarea>
                <button><img src={iconSend} /> Enviar
                </button>
              </form>
            </div>

            <ul className='list_icons_contact'>
              <li><a href=''><img src={iconTwitter} /></a></li>
              <li><a href=''><img src={iconInstagram} /></a></li>
              <li><a href=''><img src={iconLinkedIn} /></a></li>
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
