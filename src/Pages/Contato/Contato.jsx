
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
import { faCheckCircle, faSpinner, faPaperPlane, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Contato() {

  let data = localStorage.getItem('data')

  let parseData = JSON.parse(data)

  var verifyData = parseData == null ? TextContentDataTest[0].portuguese : parseData

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData)
  const [loading, setLoading] = useState(false)
  const [loadingFirst, setLoadingFirst] = useState(false)
  const [modal, setModal] = useState(false)
  const [content, setContent] = useState(false)
  const [text, setText] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState("")
  const [icon, setIcon] = useState(null)
  const [errors, setErrors] = useState({})

  // Validação de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Validação de formulário
  const validateForm = () => {
    const newErrors = {}
    
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!text.trim()) {
      newErrors.text = 'Mensagem é obrigatória'
    } else if (text.trim().length < 10) {
      newErrors.text = 'Mensagem deve ter pelo menos 10 caracteres'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCloseModal = () => {
    setModal(false)
    setContent(false)
    setLoadingFirst(false)
    setLoading(false)
    setIcon(null)
  }

  const handleSend = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setModal(true)
      setContent(true)
      setAlert('Por favor, preencha todos os campos corretamente.')
      setIcon('error')
      setTimeout(() => {
        setModal(false)
        setContent(false)
      }, 4000)
      return
    }

    setLoadingFirst(true)
    setErrors({})

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAIL_INTEGRATION
      )

      if (result.status === 200) {
        setLoading(false)
        setModal(true)
        setContent(true)
        setAlert('Email enviado com sucesso! Retornarei o contato o mais breve possível. Obrigado!')
        setIcon('success')
        
        // Limpar formulário
        setName("")
        setEmail("")
        setText("")
        e.target.reset()
        
        setTimeout(() => {
          setModal(false)
          setLoading(false)
          setLoadingFirst(false)
          setContent(false)
          setIcon(null)
        }, 4000)
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setModal(true)
      setContent(true)
      setAlert('Erro ao enviar email. Por favor, tente novamente ou entre em contato diretamente.')
      setIcon('error')
      setLoading(false)
      setLoadingFirst(false)
      
      setTimeout(() => {
        setModal(false)
        setContent(false)
      }, 5000)
    }
  }


  useEffect(() => {
    const dx = document.getElementById('container')
    if (!dx) return
    
    const verifyInputLanguages = dx.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')
    
    if (verifyInputLanguages) {
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
        }
      }))
    }
  }, [])

  return (
    <div className="allPages">

      <Animation>
        <Navbar />
        <div className='line_blue'>
          <hr />
        </div>
        <div id='container' className='container'>
          {loadingFirst && (
            <div className="modalFirst">
              <div className="spinnerContainer">
                <FontAwesomeIcon className='spinnerFirst' icon={faSpinner} size="4x" />
                <p>Enviando...</p>
              </div>
            </div>
          )}
          
          {modal && (
            <div id="modalEmail" onClick={handleCloseModal}>
              <div 
                className={content ? 'modal_content' : 'modal_content_hidden'}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal_close_btn" onClick={handleCloseModal}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                {icon === 'success' && (
                  <FontAwesomeIcon icon={faCheckCircle} size="3x" className="modal_icon success" />
                )}
                {icon === 'error' && (
                  <FontAwesomeIcon icon={faExclamationCircle} size="3x" className="modal_icon error" />
                )}
                <h3>{alert}</h3>
              </div>
            </div>
          )}
          <h1 className='title_contact'>{languagesBrEn.contact.titlePage}</h1>
          <div className='column_contact'>
            <div className='flex_contact'>
              <div className="info_contacts">
                <div>
                  <img src={iconArroba} alt="Email" />
                  <p>{languagesBrEn.contact.myEmail}</p>
                </div>

                <div>
                  <img src={iconPhoneWight} alt="Telefone" />
                  <p>{languagesBrEn.contact.phone}</p>
                </div>

                <div>
                  <img src={iconLocation} alt="Localização" />
                  <p>{languagesBrEn.contact.address}</p>
                </div>
              </div>

              <form onSubmit={handleSend} name="contact-form" noValidate>
                <div className="form_group">
                  <input
                    type='email'
                    id='email'
                    name="email"
                    placeholder={languagesBrEn.contact.fieldEmail}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors({...errors, email: ''})
                    }}
                    className={errors.email ? 'input_error' : ''}
                  />
                  {errors.email && <span className="error_message">{errors.email}</span>}
                </div>
                
                <div className="form_group">
                  <input
                    type='text'
                    id='userName'
                    name='name'
                    placeholder={languagesBrEn.contact.fieldName}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors({...errors, name: ''})
                    }}
                    className={errors.name ? 'input_error' : ''}
                  />
                  {errors.name && <span className="error_message">{errors.name}</span>}
                </div>
                
                <div className="form_group">
                  <textarea
                    name='text'
                    placeholder={languagesBrEn.contact.fieldMessage}
                    rows="10"
                    cols="40"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value)
                      if (errors.text) setErrors({...errors, text: ''})
                    }}
                    className={errors.text ? 'input_error' : ''}
                  ></textarea>
                  {errors.text && <span className="error_message">{errors.text}</span>}
                </div>
                
                <button type='submit' disabled={loading}>
                  {loading ? (
                    <FontAwesomeIcon className='iconSend running' icon={faSpinner} />
                  ) : (
                    <>
                      <FontAwesomeIcon className='iconSend' icon={faPaperPlane} />
                      <span>{languagesBrEn.contact.sendSend}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <ul className='list_icons_contact'>
              <li><a href='https://twitter.com/Twitte3Vinicius' target="blank" rel="noopener noreferrer"><img src={iconTwitter} alt="Twitter" /></a></li>
              <li><a href='https://www.instagram.com/viny_batista_10/' target="blank" rel="noopener noreferrer"><img src={iconInstagram} alt="Instagram" /></a></li>
              <li><a href='https://www.linkedin.com/in/vinicius-batista-815983137/' target="blank" rel="noopener noreferrer"><img src={iconLinkedIn} alt="LinkedIn" /></a></li>
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
