import htmlIcon from '../../../public/assets/htm_icon.svg'
import cssIcon from '../../../public/assets/css_icon.svg'
import jsIcon from '../../../public/assets/js_icon.svg'
import bootstrapIcon from '../../../public/assets/bootstrap_icon.svg'
import phpIcon from '../../../public/assets/php_icon.svg'
import reactIcon from '../../../public/assets/react_icon.svg'
import laravelIcon from '../../../public/assets/laravel_icon.svg'
import sqlIcon from '../../../public/assets/Sql.svg'
import apiIcon from '../../../public/assets/rest-api_icon.svg'
import gitHubIcon from '../../../public/assets/gitubIcon.svg'
import wwwIcon from '../../../public/assets/www.svg'
import { TextContentData } from '../../Components/TextContent/TextContentData'
import { useState } from 'react'

export function dataPortfolioTest() {
  const pt = TextContentData[0]
  const en = TextContentData[1]
  const languages = [pt.portuguese.portfolio]

  const [ptBr, setPtBr] = useState(languages)

  const dd = document.querySelector('body')
  const verifyInputLanguages = dd.childNodes[1].children[0].getElementsByClassName('allPages')[0].getElementsByClassName('navbar')[0].getElementsByClassName('header_avatar')[0].getElementsByClassName('setLanguages')[0].querySelectorAll('input')

  verifyInputLanguages.forEach((e) => e.addEventListener('change', () => {
    if (e.id == 'pt') {
      languages.length !== 0 ? languages.splice(0, 1) && languages.push(pt) : languages
      languages[0].portuguese
      setPtBr(languages[0].portuguese.portfolio)
    } else if (e.id == 'en') {
      languages.length !== 0 ? languages.splice(0, 1) && languages.push(en) : languages
      languages[0].english
      setPtBr(languages[0].english.portfolio)
    } 
  }
  ))

  const dataPortfolio = [
    {
      index: 0,
      title: ptBr[0].pageTitle,
      text: ptBr[0].text,
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal0'
  
    },
  
    {
      index: 1,
      title: 'To-do List',
      text: 'Lorem ipsum dolor sit amet. Nam internos libero ut dolor suscipit et fugit nulla quo internos suscipit...',
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal1'
    },
  
    {
      index: 2,
      title: 'NLW Rocketseat',
      text: 'Lorem ipsum dolor sit amet. Nam internos libero ut dolor suscipit et fugit nulla quo internos suscipit...',
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal2'
    },
  
    {
      index: 3,
      title: 'Sudoku webpage',
      text: 'Lorem ipsum dolor sit amet. Nam internos libero ut dolor suscipit et fugit nulla quo internos suscipit...',
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal3'
    },
  
    {
      index: 4,
      title: 'Hair Cut Design',
      text: 'Lorem ipsum dolor sit amet. Nam internos libero ut dolor suscipit et fugit nulla quo internos suscipit...',
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal4'
    },
  
    {
      index: 5,
      title: 'Todo-list',
      text: 'Lorem ipsum dolor sit amet. Nam internos libero ut dolor suscipit et fugit nulla quo internos suscipit...',
      icons: [
        {
          html: htmlIcon,
          css: cssIcon,
          js: jsIcon,
          react: reactIcon,
          bootstrap: bootstrapIcon,
          php: phpIcon,
          laravel: laravelIcon,
          sql: sqlIcon,
          apiIcon: apiIcon,
          github: gitHubIcon,
          www: wwwIcon
        },
      ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      more: 'modal5'
    },
  
  ]

  test = {
    data: dataPortfolio
  }
   return test
}


