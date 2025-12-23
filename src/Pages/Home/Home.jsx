import React, {useEffect, useState} from 'react'
import myPicture from '/assets/ComponentMyself.svg'
import Animation from '../../Components/Animation'
// import { TextContentData } from '../../Components/TextContent/TextContentDataTest'
import { TextContentDataTest } from '../../Components/TextContent/TextContentDataTest'
import './style.css'

export default function Home() {

  let data = localStorage.getItem('data')

  let parseData = data ? JSON.parse(data) : null

  // Sempre usar os dados atualizados do arquivo como padrão
  var verifyData = parseData == null ? TextContentDataTest[0].portuguese : parseData
  
  // Garantir que os dados estão atualizados
  if (verifyData && verifyData.home && verifyData.home.position === 'Desenvolvedor FrontEnd') {
    verifyData = TextContentDataTest[0].portuguese
    localStorage.setItem('data', JSON.stringify(verifyData))
  }

  const [languagesBrEn, setLanguagesBrEn] = useState(verifyData)  
  

  useEffect(() => {
    // Atualizar estado inicial com dados atualizados
    const currentData = localStorage.getItem('data')
    if (currentData) {
      const parsed = JSON.parse(currentData)
      // Verificar se precisa atualizar
      if (parsed.home && parsed.home.position === 'Desenvolvedor FrontEnd') {
        const updatedData = TextContentDataTest[0].portuguese
        localStorage.setItem('data', JSON.stringify(updatedData))
        setLanguagesBrEn(updatedData)
      }
    }

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
