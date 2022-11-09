import React from 'react';
import htmlIcon from '/assets/htm_icon.svg'
import cssIcon from '/assets/css_icon.svg'
import jsIcon from '/assets/js_icon.svg'
import bootstrapIcon from '/assets/bootstrap_icon.svg'
import phpIcon from '/assets/php_icon.svg'
import reactIcon from '/assets/react_icon.svg'
import laravelIcon from '/assets/laravel_icon.svg'
import sqlIcon from '/assets/Sql.svg'
import apiIcon from '/assets/rest-api_icon.svg'
import gitHubIcon from '/assets/gitubIcon.svg'
import wwwIcon from '/assets/www.svg'
import tsIcon from '/assets/typescript.png'
import figmaIcon from '/assets/figma.svg'
import tailwindcssIcon from '/assets/tailwindcss.svg'
import firebaseIcon from '/assets/firebase.svg'
import herokuIcon from '/assets/heroku.svg'
import slackIcon from '/assets/slack.png'

import ImgProffy1 from '/assets/images/proffy1.jpeg'
import ImgProffy2 from '/assets/images/proffy2.jpeg'
import ImgProffy3 from '/assets/images/proffy3.jpeg'

import ImgEcoleta1 from '/assets/images/ecoleta1.jpeg'
import ImgEcoleta2 from '/assets/images/ecoleta2.jpeg'
import ImgEcoleta3 from '/assets/images/ecoleta3.jpeg'

import ImgPort1 from '/assets/images/port1.jpeg'
import ImgPort2 from '/assets/images/port2.jpeg'
import ImgPort3 from '/assets/images/port3.jpeg'

import ImgFylo1 from '/assets/images/fylo1.jpeg'
import ImgFylo2 from '/assets/images/fylo2.jpeg'
import ImgFylo3 from '/assets/images/fylo3.jpeg'

import ImgTodo1 from '/assets/images/todo1.jpeg'
import ImgTodo2 from '/assets/images/todo2.jpeg'
import ImgTodo3 from '/assets/images/todo3.jpeg'

import ImgCrud1 from '/assets/images/crud1.jpeg'
import ImgCrud2 from '/assets/images/crud2.jpeg'
import ImgCrud3 from '/assets/images/crud3.jpeg'


import starIcon from '/assets/star.svg'
import coteIcon from '/assets/cotes.svg'
var URL = 'https://www.tivit.com/'
var TIVIT = 'TIVIT'

export const TextContentDataTest = [
  {
    portuguese: {
      home: {
        welcome: 'Olá, bem vindo!',
        description: 'Eu me chamo Vinícius',
        position: 'Desenvolvedor FrontEnd'
      },      
      shills: {
        titlePage: 'Habilidades',
        titleTechs: 'Tecnologias',
        titleOne: 'Estrutura',
        titleTwo: 'Layout de páginas',
        titleThree: 'Criação de lógicas',
        descOne: 'Ao iniciar a criação de um projeto, busco desenvolver a base com foco na organização de pastas e criação de bibliotecas reutilizáveis.',
        descTwo: 'Desenho os layouts no figma e me baseio em layouts já criados pela mesma ferramenta, observando aos detalhes e as especificações solicitadas, verificando as fontes de texto, ícones e inspiração de cores.',
        descThree: 'Eu me baseio na regra de negócio, consulto e discuto com membros da equipe para desenvolver uma regra clara e objetiva para facilitar em futuras manutenções.',
      },
      contact: {
        titlePage: 'Contato',
        fieldEmail: 'E-mail',
        fieldName: 'Nome',
        fieldMessage: 'Mensagem',
        sendSend: 'Enviar',
        phone: '+55 (12) 9 8259-0753',
        myEmail: 'vbanetyy@gmail.com',
        address: 'São José dos Campos - SP'
      },
      portfolio: {
        info: {
          ct: [
            {
              index: 0,
              title: 'Portfólio',
              text: 'Primeiro portfolio desenvolvido apenas com HTML, CSS e JAVASCRIPT, além da utilização  da bliblioteca SCROLLREAVEL para animação.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: '',
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/Personal-Portfolio',
              site: 'https://personal-portfolio-roan.vercel.app/',
              more: 'modal0',
              createAtText: 'Criado em:',
              createdAt: '11/07/21',
              sortDate: 3
            },
      
            {
              index: 1,
              title: 'Lista de afazeres - FrontEndMentor',
              text: 'Desafio proposto da plataforma FrontEndMentor, para praticar Html, CSS e JavaScript, no entando eu desenvolvi em React e Vite.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: slackIcon,
                  bootstrap: reactIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/To-do-list-localstorage/tree/main',
              site: 'https://to-do-list-localstorage.vercel.app/',
              more: 'modal1',
              createAtText: 'Criado em:',
              createdAt: '04/06/22',
              sortDate: 4
            },
      
            {
              index: 2,
              title: 'NLW1 Rocketseat - Ecoleta',
              text: 'Iniciando com os estudos na plataforma Rocketseat, acompanhando a semana com next-level-week desenvolvendo um projeto social "Ecoleta website".',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: herokuIcon,
                  bootstrap: sqlIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/All-NLW-bootcamps/tree/main/NLW%2301',
              site: 'https://morning-dusk-66700.herokuapp.com/',
              more: 'modal3',
              createAtText: 'Criado em:',
              createdAt: '27/03/21',
              sortDate: 0
            },
            {
              index: 3,
              title: 'NLW2 Rocketseat - Proffy',
              text: 'Projeto densenvolvido por video aulas da semana da next-level-week na Rocketseat, onde absorvi muito conteúdo voltado para react.js.',
              icons: [
                {
                  html: reactIcon,
                  css: tsIcon,
                  js: jsIcon,
                  react: sqlIcon,
                  bootstrap: cssIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: reactIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/All-NLW-bootcamps/tree/main/NLW%2302',
              site: 'https://proffy-neon.vercel.app/',
              more: 'modal2',
              createAtText: 'Criado em:',
              createdAt: '02/04/21',
              sortDate: 2
            },
      
            {
              index: 4,
              title: 'Dark-Fylo - FrontEndMentor',
              text: 'Landing page desenvolvida como desafio da plataforma FrontEndMentor, para aprimorar a questão de estrutura HTML e responsividade com CSS.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: slackIcon,
                  react: '',
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/FRONTENDMENTOR03/tree/main/11-fylo-dark-theme-landing-page-master',
              site: 'https://fylo-dark-theme-landing-page-master-jade.vercel.app/',
              more: 'modal4',
              createAtText: 'Criado em:',
              createdAt: '01/04/21',
              sortDate: 1
            },
      
            {
              index: 5,
              title: 'Crud Web App',
              text: 'Aplicativo desenvolvido com o intuíto de praticar o framework Tailwindcss e firebase, nesse projeto foi utilizado funções de filtro com o método sort() do javascript.',
              icons: [
                {
                  html: htmlIcon,
                  css: tailwindcssIcon,
                  js: jsIcon,
                  react: reactIcon,
                  bootstrap: firebaseIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/v-crud-web-app',
              site: 'https://v-crup-web-apps.surge.sh',
              more: 'modal5',
              createAtText: 'Criado em:',
              createdAt: '19/07/22',
              sortDate: 5
            }
          ],
        },
        dataModal: {
          ct: [
            {
              index: 'modal0',
              title: 'Portfolio',
              img: [
                {
                  img1: ImgPort1,
                  img2: ImgPort2,
                  img3: ImgPort3
                }
              ],
              text: [
                {
                  p1: 'Primeiro portfolio desenvolvido apenas com HTML, CSS e JAVASCRIPT, além da utilização da bliblioteca SCROLLREAVEL para apresentar os dados de forma animada ao scroll para página para baixo durante a navegação.',
                  p2: 'E nesse projeto, eu pude praticar o desenvolvimento da lógica da funcionalidade carrossel como também implementar um carrossel em javascript utilizando funções nativas do javascript como setInterval e addEventListener',
                  p3: 'Também pude compreender e desenvolver  sobre envio de dados do formulário para o email cadastrado utilizando a biblioteca nodemailer.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Criado em:',
            createdAt: '11/07/21',
            sortDate: 3
            },
            {
              index: 'modal1',
              title: 'Lista de Afazeres - FRONTENDMENTOR',
              img: [
                {
                  img1: ImgTodo1,
                  img2: ImgTodo2,
                  img3: ImgTodo3
                }
              ],
              text: [
                {
                  p1: 'Desafio proposto da plataforma FRONTENDMENTOR, para praticar Html, CSS e JavaScript, no entando eu desenvolvi em React e Vite.',
                  p2: 'Nesse desafio requer manipulação da DOM via javascript, porém a utilização de Hooks do React facilitou para manipular os estados e criar interação para página.',
                  p3: 'Também aproveitei para práticar e aprender mais afundo sobre LOCALSTORAGE, com isso pude criar objetos, salvar em cache do navegador, permitindo manipular-los e consumi-los no formato de arrays.'
                }
              ],
            repo: 'https://github.com/Vbanety/To-do-list-localstorage/tree/main',
            site: 'https://to-do-list-localstorage.vercel.app/',
            createAtText: 'Criado em:',
            createdAt: '04/06/22',
            sortDate: 4
            },
            {
              index: 'modal3',
              title: 'NLW1 Rocketseat - Ecoleta',
              img: [
                {
                  img1: ImgEcoleta1,
                  img2: ImgEcoleta2,
                  img3: ImgEcoleta3
                }
              ],
              text: [
                {
                  p1: 'Esse foi o primeiro evento da Rocketseat que participei e acompanhei as aulas ministradas pelo Mayk Brito, o projeto desenvolvido foi voltado para entender como o é feito a comunicação entre o frontend e backend.',
                  p2: 'Além das ferramentas base para o desenvolvimento web, foi utilizado o framework nunjunk, sqlite3, nodemon e express, para o desenvolvimento do backend.',
                  p3: 'As chamadas de dados do backend para renderização no frontend foram feitas através de requisições no servidor via HTTP utilizando os métodos POST, GET PUT e DELETE.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Criado em:',
            createdAt: '27/03/21',
            },
            {
              index: 'modal2',
              title: 'NLW2 Rocketseat - Proffy',
              img: [
                {
                  img1: ImgProffy1,
                  img2: ImgProffy2,
                  img3: ImgProffy3
                }
              ],
              text: [
                {
                  p1: 'Projeto densenvolvido por video aulas da semana da next-level-week na plataforma online Rocketseat, onde absorvi muito conteúdo voltado para react.js, e as ferramentas que envolve seu ecossitema.',
                  p2: 'Meu primeiro contato com TYPESCRIPT, SQLITE e CORS, pude assimilar os conceitos de tipagem de dados com typescript forçando a correta utilização na declaração de variáveis.',
                  p3: 'A biblioteca SQLITE como banco de dados não relacional foi uma experiência fantástica, desenvolvendo queries de atualização, insersão e exclusão de dados, sendo estruturado dentro da biblioteca CORS para criação de endpoints.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Criado em:',
            createdAt: '02/04/21',
            sortDate: 2
            },
            {
              index: 'modal4',
              title: 'Dark-Fylo - FRONTENDMENTOR',
              img: [
                {
                  img1: ImgFylo1,
                  img2: ImgFylo2,
                  img3: ImgFylo3
                }
              ],
              text: [
                {
                  p1: 'Landing page desenvolvida como desafio da plataforma FRONTENDMENTOR, para aprimorar a questão de estrutura HTML e responsividade com CSS, o a plataforma disponibiliza arquivos, descrições das regras e exemplo de layout a seguir.',
                  p2: 'O objetivo foi desenvolver uma página web estática que possa ser vizualizada de qualquer tipo de dispositivo, contento os brackpoints necessários para renderizar conforme o screen a ser utilizado.',
                  p3: 'Nesse projeto entre outros que participei nessa plataforma, a cada projeto finalizado, compartilhava minha solução na comunidade através do aplicativo slack, onde recebo feedbacks, com dicas de devs e tutores para desenvolver minhas habilidades em frontend.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Criado em:',
            createdAt: '01/04/21',
            },
            {
              index: 'modal5',
              title: 'Crud Web App',
              img: [
                {
                  img1: ImgCrud1,
                  img2: ImgCrud2,
                  img3: ImgCrud3
                }
              ],
              text: [
                {
                  p1: 'No decorrer do desenvolvimento do projeto pude assimilar o manuseio das classes compreendendo melhor a sintase do Tailwind Css, acompanhando a documentação e desenvolvendo ao mesmo tempo.',
                  p2: 'Outro desafio foi a implementação do formulário de cadastro e edição, onde aproveitei a mesma interface para executar o processo de insert e update através das funções nativas do firebase.',
                  p3: 'Nesse caso necessitei da utilização dos Hooks do React para manipular estado e referências para monitorar estados com onChange.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Criado em:',
            createdAt: '19/07/22',
            sortDate: 5
            },
          ],
        }
      },
      about: {
        aboutMe: [
          {
            name: 'Vinícius Batista',
            titlePage: 'Sobre',
            positionJob: 'Desenvolvedor FrontEnd',
            titleDescription: 'Resumo',
            resume: 'Currículo',
            pdf: '/assets/pdf/cv_br_18_ 04.pdf',
            paragraphs: [
              {
                text: `- Após me formar em técnico de informática em 2011, comecei a prestar serviços de freelancer como suporte ténico T.I nos períodos vagos, em 2019 iniciei na empresa ${TIVIT} como suporte técnico para solucionar problemas de microinformática para o cliente ITAU, e nesse mesmo período iniciei meus estudos na área de programação por conta própria.`
              },
              {
                text: '- Dei inicio no curso a distância de Análise e desenvolvimento de Sistemas da faculdade Anhambi em agosto de 2019 com previsão para conclusão em dezembro de 2022, além de participar de cursos gratuitos de programação praticando com a mão no código.'
              },
              {
                text: '- Atualmente estou atuando como desenvolvedor frontend na empresa SETY TECNOLOGIA desde agosto de 2021, onde venho absorvendo muito conhecimento e experiência, cuidando do desenvolvimento dos requisitos funcionais e atuando em correções de bugs.'
              },
              {
                text: '- Desde então, venho trabalhando em criações de funcionalidades, implementação de páginas com reactjs, consumindo dados de API e Backend através de endpoints.'
              }
            ],
            titleTestimonies: 'Testemunhos',
            curiosity: '"O sucesso não ocorre por acaso. Em vez de dizer: isto não pode ser feito, continue questionando o seu cérebro: como isto pode ser feito? Comprometa-se com suas metas e encare os obstáculos como etapas para atingir o objetivo final. Faça parte da solução, ao invés de ser parte do problema. Faça bem ­feito não só para agradar aos outros, mas principalmente para agradar a si próprio. Se você falha em planejar, está planejando falhar. - (Doutor. Lair Ribeiro)"'
          }
        ],
        testimonies: [
          {
            index: 0,
            profile: 'https://github.com/Jose-cyber',
            person: 'https://avatars.githubusercontent.com/u/61259055?s=100&v=4',
            name: 'José Silva',
            position: 'SysAdmin DevOps',
            link: 'https://www.linkedin.com/in/jose-junior-silva/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'Tive o prazer de conhecer Vinícius quando trabalhávamos juntos na mesma empresa, o que fez com que nos aproximássemos foi o interesse em programação, acima de tudo fiquei impressionado com a criatividade e gosto por tecnologia quando mostrava seus estudos e projetos na areá da programação fullstack.',
            iconCote: coteIcon
          },
        
          {
            index: 1  ,
            person: 'https://media-exp1.licdn.com/dms/image/C4D03AQHbPvopzG62tA/profile-displayphoto-shrink_200_200/0/1616934787177?e=1673481600&v=beta&t=LS-SEoWt4Oauwh_7oU4_g4Qs21J8-s2wsTjPvTJ3vW0',
            name: 'L. Felipe Camargo',
            position: 'Mobile & Web FronEnd',
            link: 'https://www.linkedin.com/in/lfelipe-camargo/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'Trabalhar com o Vini foi um prazer enorme! Uma pessoa muito esforçada, flexível, pronta pra ouvir, aprender e ensinar, além de ser um ótimo colega de trabalho, sempre bem humorado e focado nas coisas importantes.',
            iconCote: coteIcon
          },
          
          {
            index: 2,
            person: 'https://media-exp2.licdn.com/dms/image/C4D03AQEdwgTt8QU1jA/profile-displayphoto-shrink_200_200/0/1516816691829?e=1661990400&v=beta&t=xYrZkxSY-6A472ky7OpTPF9icDWGM1tlvpto6-zfKlg',
            name: 'André Estevão',
            position: 'Dev. FullStack & Comunicador Social',
            link: 'https://www.linkedin.com/in/andreaesil/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'O Vinícius é um profissional que, acima de outras qualidades, é dedicado. Muito focado e quando aceita uma missão, procura cumpri-la da melhor forma e trata com seriedade os projetos os quais participa. Eu participei de dois projetos com ele e em ambos ele depositou seu profissionalismo, buscando entregar o melhor código.',
            iconCote: coteIcon
          },
        ]
      },
      
    },
  },

  {
    english: {
      home: {
        welcome: 'Hi there, welcome!',
        description: "I'm Vinícius",
        position: "FrontEnd Web Developer"
      },
      shills: {
        titlePage: 'Skills',
        titleTechs: 'Technologies',
        titleOne: 'Structure',
        titleTwo: 'Page Layout',
        titleThree: 'Logic Creation',
        descOne: 'When starting to create a project, I try to develop the base with a focus on organizing folders and creating reusable libraries.',
        descTwo: 'I design the layouts in figma and I base myself on layouts already created by the same tool, observing the details and the requested specifications, checking the text fonts, icons and color inspiration.',
        descThree: 'Based on the business rule, I consult and discuss with team members to develop a clear and objective rule to facilitate future maintenance.',
      },
      contact: {
        titlePage: 'Contact',
        fieldEmail: 'E-mail',
        fieldName: 'Name',
        fieldMessage: 'Message',
        sendSend: 'Submit',
        phone: '+55 (12) 9 8259-0753',
        myEmail: 'vbanetyy@gmail.com',
        address: 'São José dos Campos - SP'
      },
      portfolio: {
        info: {
          ct: [
            {
              index: 0,
              title: 'Portfolio',
              text: 'First portfolio developed only with HTML, CSS and JAVASCRIPT, in addition to using the SCROLLREAVEL library for animation.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: '',
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/Personal-Portfolio',
              site: 'https://personal-portfolio-roan.vercel.app/',
              more: 'modal0',
              createAtText: 'Created: ',
              createdAt: '07/11/21'
      
            },
      
            {
              index: 1,
              title: 'To-do List',
              text: 'Challenge proposed from the FRONTENDMENTOR platform, to practice Html, CSS and JavaScript, however I developed in React and Vite.',
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
              repo: 'https://github.com/Vbanety/To-do-list-localstorage/tree/main',
              site: 'https://to-do-list-localstorage.vercel.app/',
              more: 'modal1',
              createAtText: 'Created: ',
              createdAt: '06/04/22'
            },
      
            {
              index: 2,
              title: 'NLW1 Rocketseat - Ecoleta',
              text: 'Starting with studies on the Rocketseat platform, following the week with next-level-week developing a social project "Ecoleta website".',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: herokuIcon,
                  bootstrap: sqlIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/All-NLW-bootcamps/tree/main/NLW%2301',
              site: 'https://morning-dusk-66700.herokuapp.com/',
              more: 'modal3',
              createAtText: 'Created: ',
              createdAt: '03/27/21'
            },
            {
              index: 3,
              title: 'NLW2 Rocketseat - Proffy',
              text: 'Project developed by next-level-week video classes at Rocketseat, where I absorbed a lot of content focused on react.js.',
              icons: [
                {
                  html: reactIcon,
                  css: tsIcon,
                  js: jsIcon,
                  react: sqlIcon,
                  bootstrap: cssIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: reactIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/All-NLW-bootcamps/tree/main/NLW%2302',
              site: 'https://proffy-neon.vercel.app/',
              more: 'modal2',
              createAtText: 'Created: ',
              createdAt: '04/02/21'
            },
      
            {
              index: 4,
              title: 'Dark-Fylo - FRONTENDMENTOR',
              text: 'Landing page developed as a challenge for the Frontendmentor platform, to improve the issue of HTML structure and responsiveness with CSS.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: slackIcon,
                  react: '',
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/FRONTENDMENTOR03/tree/main/11-fylo-dark-theme-landing-page-master',
              site: 'https://fylo-dark-theme-landing-page-master-jade.vercel.app/',
              more: 'modal4',
              createAtText: 'Created: ',
              createdAt: '04/01/21'
            },
      
            {
              index: 5,
              title: 'Crud Web App',
              text: 'Application developed with the intention of practicing the Tailwind Css framework and firebase, in this project we used filter functions with the sort() method of javascript.',
              icons: [
                {
                  html: htmlIcon,
                  css: tailwindcssIcon,
                  js: jsIcon,
                  react: reactIcon,
                  bootstrap: firebaseIcon,
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/Vbanety/v-crud-web-app',
              site: 'https://v-crup-web-apps.surge.sh',
              more: 'modal5',
              createAtText: 'Created: ',
              createdAt: '07/19/22'
            }
          ]
        },
        dataModal: {
          ct: [
            {
              index: 'modal0',
              title: 'Portfolio',
              img: [
                {
                  img1: ImgPort1,
                  img2: ImgPort2,
                  img3: ImgPort3
                }
              ],
              text: [
                {
                  p1: 'First portfolio developed only with HTML, CSS and JAVASCRIPT, in addition to using the SCROLLREAVEL library to present data in an animated way when scrolling down during navigation.',
                  p2: 'And in this project, I could practice developing the logic of the carousel functionality as well as implementing a carousel in javascript using native javascript functions like setInterval and addEventListener.',
                  p3: 'I was also able to understand and develop about sending form data to the registered email using the nodemailer library.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Created: ',
            createdAt: '07/11/21',
            },
            {
              index: 'modal1',
              title: 'Do-do-List - FRONTENDMENTOR',
              img: [
                {
                  img1: ImgTodo1,
                  img2: ImgTodo2,
                  img3: ImgTodo3
                }
              ],
              text: [
                {
                  p1: 'Challenge proposed from the FRONTENDMENTOR platform, to practice Html, CSS and JavaScript, however I developed in React and Vite.',
                  p2: 'This challenge requires DOM manipulation via javascript, but the use of React Hooks made it easier to manipulate the states and create interaction for the page.',
                  p3: 'I also took the opportunity to practice and learn more about LOCALSTORAGE, with this I was able to create objects, save them in the browser cache, allowing them to manipulate and consume them in the format of arrays..'
                }
              ],
              repo: 'https://github.com/Vbanety/To-do-list-localstorage/tree/main',
              site: 'https://to-do-list-localstorage.vercel.app/',
              createAtText: 'Created: ',
              createdAt: '06/04/22',
            },
            {
              index: 'modal3',
              title: 'NLW1 Rocketseat - Ecoleta',
              img: [
                {
                  img1: ImgEcoleta1,
                  img2: ImgEcoleta2,
                  img3: ImgEcoleta3
                }
              ],
              text: [
                {
                  p1: 'This was the first Rocketseat event that I attended and I followed the classes taught by Mayk Brito, the project developed was aimed at understanding how communication between the frontend and backend is done.',
                  p2: 'In addition to the basic tools for web development, the framework nunjunk, sqlite3, nodemon and express was used for the development of the backend.',
                  p3: 'The backend data calls for frontend rendering were made through requests to the server via HTTP using the POST, GET PUT and DELETE methods.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Created: ',
            createdAt: '03/27/21',
            },
            {
              index: 'modal2',
              title: 'NLW2 Rocketseat - Proffy',
              img: [
                {
                  img1: ImgProffy1,
                  img2: ImgProffy2,
                  img3: ImgProffy3
                }
              ],
              text: [
                {
                  p1: 'Project developed by video classes of the week of next-level-week on the Rocketseat online platform, where I absorbed a lot of content focused on react.js, and the tools that surround its ecosystem.',
                  p2: 'My first contact with TYPESCRIPT, SQLITE and CORS, I was able to assimilate the concepts of data typing with typescript forcing the correct use in the declaration of variables.',
                  p3: 'The SQLITE library as a non-relational database was a fantastic experience, developing queries to update, insert and delete data, being structured within the CORS library for creating endpoints.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Created: ',
            createdAt: '04/02/21',
            },
            {
              index: 'modal4',
              title: 'Dark-Fylo - FRONTENDMENTOR',
              img: [
                {
                  img1: ImgFylo1,
                  img2: ImgFylo2,
                  img3: ImgFylo3
                }
              ],
              text: [
                {
                  p1: 'Landing page developed as a challenge for the FRONTENDMENTOR platform, to improve the issue of HTML structure and responsiveness with CSS, the platform provides files, descriptions of the rules and example of layout below.',
                  p2: 'The objective was to develop a static web page that can be viewed from any type of device, containing the necessary brackpoints to render according to the screen to be used.',
                  p3: 'In this project among others that I participated in this platform, with each project completed, I shared my solution in the community through the slack application, where I receive feedback, with tips from devs and tutors to develop my frontend skills.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Created: ',
            createdAt: '04/01/21',
            },
            {
              index: 'modal5',
              title: 'Crud Web App',
              img: [
                {
                  img1: ImgCrud1,
                  img2: ImgCrud2,
                  img3: ImgCrud3
                }
              ],
              text: [
                {
                  p1: "During the development of the project I was able to assimilate the handling of the classes, understanding the Tailwind Css synthase better, following the documentation and developing at the same time.",
                   p2: "Another challenge was the implementation of the registration and editing form, where I took advantage of the same interface to execute the insert and update process through firebase's native functions.",
                   p3: "In this case I needed to use React Hooks to manipulate state and references to monitor states with onChange."
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://www.vini-dev-it.com.br',
            createAtText: 'Created: ',
            createdAt: '07/19/22',
            },
          ]
        }
      },
      about: {
        aboutMe: [
          {
            name: 'Vinícius Batista',
            titlePage: 'About',
            positionJob: 'FrontEnd Web Developer',
            titleDescription: 'Resume',
            resume: 'Resume',
            paragraphs: [
              {
                text: `- After graduating as a computer technician in 2011, I started to provide freelance services as technical support T.I in vacant periods, in 2019 I started at the company TIVIT as technical support to solve microcomputer problems for the ITAU client, and in that same period I started my studies in the programming area on their own.`
              },
              {
                text: '- I started the distance course in Systems Analysis and Development at the Anhambi College in August 2019, with a forecast for completion in December 2022, in addition to participating in free programming courses practicing with my hands on the code.'
              },
              {
                text: '- I am currently working as a frontend developer at SETY TECNOLOGIA since August 2021, where I have been absorbing a lot of knowledge and experience, taking care of the development of functional requirements and working on bug fixes.'
              },
              {
                text: "- Since then, I've been working on creating features, implementing pages with reactjs, consuming API and Backend data through endpoints."
              }
            ],
            pdf: '/assets/pdf/cv_en_12_07.pdf',
            titleTestimonies: 'Testimonies',
            curiosity: "'Success does not happen by accident. Instead of saying: this can't be done, keep asking your brain: how can this be done? Commit to your goals and view obstacles as steps to reach the ultimate goal. Be part of the solution instead of being part of the problem. Do it well not only to please others, but mainly to please yourself. If you fail to plan, you are planning to fail. - (Doctor. Lair Ribeiro)'"
          }
        ],
        testimonies: [
          {
            index: 0,
            profile: 'https://github.com/Jose-cyber',
            person: 'https://avatars.githubusercontent.com/u/61259055?s=100&v=4',
            name: 'José Silva',
            position: 'SysAdmin DevOps',
            link: 'https://www.linkedin.com/in/jose-junior-silva/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'I had the pleasure of meeting Vinícius when we worked together at the same company, what made us approach him was his interest in programming, above all I was impressed with his creativity and taste for technology when he showed his studies and projects in the area of fullstack programming.',
            iconCote: coteIcon
          },
        
          {
            index: 1  ,
            person: 'https://media-exp1.licdn.com/dms/image/C4D03AQHbPvopzG62tA/profile-displayphoto-shrink_200_200/0/1616934787177?e=1673481600&v=beta&t=LS-SEoWt4Oauwh_7oU4_g4Qs21J8-s2wsTjPvTJ3vW0',
            name: 'L. Felipe Camargo',
            position: 'Mobile & Web FronEnd',
            link: 'https://www.linkedin.com/in/lfelipe-camargo/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'Working with Vini was a great pleasure! A very hardworking, flexible person, ready to listen, learn and teach, in addition to being a great co-worker, always in a good mood and focused on important things.',
            iconCote: coteIcon
          },
          
          {
            index: 2,
            person: 'https://media-exp2.licdn.com/dms/image/C4D03AQEdwgTt8QU1jA/profile-displayphoto-shrink_200_200/0/1516816691829?e=1661990400&v=beta&t=xYrZkxSY-6A472ky7OpTPF9icDWGM1tlvpto6-zfKlg',
            name: 'André Estevão',
            position: 'Dev. FullStack & Social Communicator',
            link: 'https://www.linkedin.com/in/andreaesil/',
            star: [
              {
                one: starIcon
              },
              {
                two: starIcon
              },
              {
                three: starIcon
              },
              {
                four: starIcon
              },
              {
                five: starIcon
              }
            ],
            description: 'Vinícius is a professional who, above other qualities, is dedicated. Very focused and when he accepts a mission, he tries to fulfill it in the best way and treats the projects in which he participates seriously. I participated in two projects with him and in both he put his professionalism, seeking to deliver the best code.',
            iconCote: coteIcon
          },
        ]
      },
      
    },
  }


]
