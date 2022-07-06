import ImgProffy1 from '../../../public/assets/images/proffy1.jpeg'
import ImgProffy2 from '../../../public/assets/images/proffy2.jpeg'
import ImgProffy3 from '../../../public/assets/images/proffy3.jpeg'

import ImgEcoleta1 from '../../../public/assets/images/ecoleta1.jpeg'
import ImgEcoleta2 from '../../../public/assets/images/ecoleta2.jpeg'
import ImgEcoleta3 from '../../../public/assets/images/ecoleta3.jpeg'

import ImgPort1 from '../../../public/assets/images/port1.jpeg'
import ImgPort2 from '../../../public/assets/images/port2.jpeg'
import ImgPort3 from '../../../public/assets/images/port3.jpeg'

import ImgFylo1 from '../../../public/assets/images/fylo1.jpeg'
import ImgFylo2 from '../../../public/assets/images/fylo2.jpeg'
import ImgFylo3 from '../../../public/assets/images/fylo3.jpeg'

import ImgTodo1 from '../../../public/assets/images/todo1.jpeg'
import ImgTodo2 from '../../../public/assets/images/todo2.jpeg'
import ImgTodo3 from '../../../public/assets/images/todo3.jpeg'


export const dataModal = [
  {
    pt: [
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
      },
      {
        index: 'modal5',
        title: 'Dashboard',
        img: 'http://1.bp.blogspot.com/_N6RSTgEScug/S0DT9EaeUBI/AAAAAAAAA58/8Y849awG49E/s400/Mar+e+deck.jpg',
        text: [
          {
            p1: 'Primeiro portfolio desenvolvido apenas com HTML, CSS e JAVASCRIPT, além da utilização da bliblioteca SCROLLREAVEL para animação.',
            p2: 'E nesse projeto, eu pude praticar o desenvolvimento da lógica como também implementar um carrossel em javascript utilizando funções nativas do javascript como setInterval e addEventListener',
            p3: 'Também pude compreender e desenvolver  sobre envio de formulário para o email cadastrado a biblioteca nodemailer.'
          }
        ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      },
    ],
    en: [
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
      },
      {
        index: 'modal5',
        title: 'Dashboard',
        img: 'http://1.bp.blogspot.com/_N6RSTgEScug/S0DT9EaeUBI/AAAAAAAAA58/8Y849awG49E/s400/Mar+e+deck.jpg',
        text: [
          {
            p1: 'Primeiro portfolio desenvolvido apenas com HTML, CSS e JAVASCRIPT, além da utilização da bliblioteca SCROLLREAVEL para animação.',
            p2: 'E nesse projeto, eu pude praticar o desenvolvimento da lógica como também implementar um carrossel em javascript utilizando funções nativas do javascript como setInterval e addEventListener',
            p3: 'Também pude compreender e desenvolver  sobre envio de formulário para o email cadastrado a biblioteca nodemailer.'
          }
        ],
      repo: 'https://github.com/vbanety',
      site: 'https://www.vini-dev-it.com.br',
      },
    ]
  }
]