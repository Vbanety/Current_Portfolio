
import { useState } from 'react'
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
import { useLangContent } from '../../hooks/useLangContent'

import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSpinner, faPaperPlane, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons'


export default function Contato() {
  const languagesBrEn = useLangContent()
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
          <h1 className='title_page'>{languagesBrEn.contact.titlePage}</h1>

          <div className='contact-hero'>
            <div className="contact-info-col">
              <h2 className="contact-heading">{languagesBrEn.contact.heading}</h2>
              <p className="contact-subtext">{languagesBrEn.contact.subtext}</p>

              <div className="contact-info-rows">
                <div className="contact-info-row">
                  <span className="contact-info-icon"><img src={iconArroba} alt="" /></span>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">{languagesBrEn.contact.myEmail}</p>
                  </div>
                </div>

                <a
                  className="contact-info-row contact-info-row-link"
                  href={`https://wa.me/5512982590753?text=${encodeURIComponent('Olá! Vim através do seu portfólio.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-info-icon"><img src={iconPhoneWight} alt="" /></span>
                  <div>
                    <p className="contact-info-label">Telefone</p>
                    <p className="contact-info-value">{languagesBrEn.contact.phone}</p>
                  </div>
                </a>

                <div className="contact-info-row">
                  <span className="contact-info-icon"><img src={iconLocation} alt="" /></span>
                  <div>
                    <p className="contact-info-label">Localização</p>
                    <p className="contact-info-value">{languagesBrEn.contact.address}</p>
                  </div>
                </div>
              </div>

              <ul className='list_icons_contact'>
                <li><a href='https://twitter.com/Twitte3Vinicius' target="blank" rel="noopener noreferrer"><img src={iconTwitter} alt="Twitter" loading="lazy" /></a></li>
                <li><a href='https://www.instagram.com/viny_batista_10/' target="blank" rel="noopener noreferrer"><img src={iconInstagram} alt="Instagram" loading="lazy" /></a></li>
                <li><a href='https://www.linkedin.com/in/vinicius-batista-815983137/' target="blank" rel="noopener noreferrer"><img src={iconLinkedIn} alt="LinkedIn" loading="lazy" /></a></li>
              </ul>
            </div>

            <div className="contact-form-col">
              <form className="contact-form-card" onSubmit={handleSend} name="contact-form" noValidate>
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
                    rows="6"
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
