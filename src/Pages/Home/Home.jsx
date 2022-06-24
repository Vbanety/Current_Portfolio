import React, {useEffect, useState} from 'react'
import myPicture from '../../../public/assets/ComponentMyself.svg'
import Animation from '../../Components/Animation'
import { TextContentData } from '../../Components/TextContent/TextContentData'
import './style.css'

export default function Home() {
  
  const [languagesBrEn, setLanguagesBrEn] = useState(TextContentData[0].portuguese)  
  

  useEffect(() => {
    const dx = document.getElementById('container')
    const verifyInputLanguages = dx.parentNode.parentNode.querySelector('.setLanguages').querySelectorAll('input')

    verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
      if(e.id == 'pt') {
        setLanguagesBrEn(TextContentData[0].portuguese)
      } else if(e.id == 'en') {
        setLanguagesBrEn(TextContentData[1].english)
      } else {
        return false
      }
    }
    ))


  }, [])

  return (
    <>
      <Animation>
      <div id="container" className="container">
      <h1 className='title_page'>Home</h1>
        <div className="card">
          <div className="_description_name">
            <div>
              <p>{languagesBrEn.home.welcome}</p>
              <p>{languagesBrEn.home.description}</p>
            </div>
            <h1>{languagesBrEn.home.position}</h1>
          </div>
            <div className="_my_image">
              <img src={myPicture} alt="mySelf" />
            </div>
        </div>
      </div>
      </Animation>
    </>
  )
}
