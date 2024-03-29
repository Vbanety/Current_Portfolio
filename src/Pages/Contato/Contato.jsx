
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import iconArroba from '/assets/at_arroba.svg'
import iconPhoneWight from '/assets/phone_white.svg'
import iconLocation from '/assets/location.svg'
import iconSend from '/assets/sentIcon.svg'
import './style.css'
import iconInstagram from '/assets/instagram_white.svg'
import iconLinkedIn from '/assets/linkedin_white.svg'
import iconTwitter from '/assets/twetter_white.svg'
import Animation from '../../Components/Animation'
import './style.css'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'

import emailjs from "emailjs-com"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSpinner, faPaperPlane, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


export default function Sobre() {

  let data = localStorage.getItem('data')

  let parseData = JSON.parse(data)

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese : parseData

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData)
  const [loading, setLoading] = useState(false)
  const [loadingFirst, seLoadingFirst] = useState(false)
  const [modal, setModal] = useState(false)
  const [content, setContent] = useState(false)
  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState("")
  const [icon, setIcon] = useState(false)

  const handleSend = (e) => {
    e.preventDefault()

    // let success = 
    if (name.length !== 0 && text.length !== 0 && email.length !== 0) {

      seLoadingFirst(!loadingFirst)
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAIL_INTEGRATION
      ).then(res => {
        setLoading(!false)
        setModal(!modal)
        setContent(!false)
        setAlert('Email enviado com sucesso! Retornarei o contato o mais breve possível. Obrigado!')
        setTimeout(() => {
          setModal(false)
          setLoading(false)
          seLoadingFirst(false)
          setIcon(!icon)
          var emptyText = document.getElementsByName('contact-form')[0]
          
          emptyText.reset()
          
        }, 3000);

      }).catch(err => console.log(err))

    } else {
      setModal(!modal)
      setContent(!false)
      setAlert("É necessário preencher os campos..")
      setIcon('error')
      setTimeout(() => {
        setModal(false)
      setContent(false)
      }, 3000)
    }
  }


  useEffect(() => {
    const dx = document.getElementById('container')
    const verifyInputLanguages = dx.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
      if (e.id == 'pt') {
        localStorage.setItem('data', JSON.stringify(TextContentDataTest[0].portuguese))
        let dataPt = localStorage.getItem('data')
        let parseDataPt = JSON.parse(dataPt)
        setLanguagesBrEn(parseDataPt)

      } else if (e.id == 'en') {
        localStorage.setItem('data', JSON.stringify(TextContentDataTest[1].english))
        let dataEn = localStorage.getItem('data')
        let parseDataEn = JSON.parse(dataEn)
        setLanguagesBrEn(parseDataEn)

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
          {
            loadingFirst
            &&
            (<div className="modalFirst">
              <FontAwesomeIcon className='spinnerFirst' icon={faSpinner} size="4x" />
            </div>)
          }
          {
            modal
            &&
            (<div id="modalEmail">
              <div className={content == true ? 'modal_content' : 'modal_content_hidden'}>
                { icon == true ? <FontAwesomeIcon icon={faCheckCircle} size="3x" /> : <FontAwesomeIcon icon={faExclamationCircle} size="3x" /> }
                <h3>{alert}</h3>
              </div>
            </div>)
          }
          <h1 className='title_contact'>{languagesBrEn.contact.titlePage}</h1>
          <div className='column_contact'>
            <div className='flex_contact'>
              <div className="info_contacts">
                <div>
                  <img src={iconArroba} />
                  <p>{languagesBrEn.contact.myEmail}</p>
                </div>

                <div>
                  <img src={iconPhoneWight} />
                  <p>{languagesBrEn.contact.phone}</p>
                </div>

                <div>
                  <img src={iconLocation} />
                  <p>{languagesBrEn.contact.address}</p>
                </div>
              </div>

              <form onSubmit={handleSend} name="contact-form">
                <input
                  type='email'
                  id='email'
                  name="email"
                  placeholder={languagesBrEn.contact.fieldEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='text'
                  id='userName'
                  name='name'
                  placeholder={languagesBrEn.contact.fieldName}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  type="text"
                  name='text'
                  placeholder={languagesBrEn.contact.fieldMessage}
                  rows="10"
                  cols="40"
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button type='submit'>
                  {loading
                    ? <FontAwesomeIcon className='iconSend running' icon={faSpinner} />
                    : <FontAwesomeIcon className='iconSend' icon={faPaperPlane} />}
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
