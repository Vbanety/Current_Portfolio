import { useEffect, useState } from 'react'
import { TextContentDataTest } from '../Components/TextContent/TextContentDataTest'

function getStoredLang() {
  return localStorage.getItem('lang') === 'en' ? 'en' : 'pt'
}

function contentFor(lang) {
  return lang === 'en' ? TextContentDataTest[1].english : TextContentDataTest[0].portuguese
}

export function useLangContent() {
  const [lang, setLang] = useState(getStoredLang)

  useEffect(() => {
    const container = document.getElementById('container')
    if (!container) return
    const inputs = container.parentNode?.parentNode?.querySelector('.setLanguages')?.querySelectorAll('input')
    if (!inputs) return

    const listeners = []
    inputs.forEach((input) => {
      const handler = () => {
        if (input.id === 'pt') {
          localStorage.setItem('lang', 'pt')
          setLang('pt')
        } else if (input.id === 'en') {
          localStorage.setItem('lang', 'en')
          setLang('en')
        }
      }
      input.addEventListener('change', handler)
      listeners.push([input, handler])
    })

    return () => listeners.forEach(([input, handler]) => input.removeEventListener('change', handler))
  }, [])

  return contentFor(lang)
}
