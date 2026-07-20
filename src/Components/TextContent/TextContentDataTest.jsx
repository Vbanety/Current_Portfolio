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
import nextjsIcon from '/assets/nextjs_icon.svg'
import nodejsIcon from '/assets/nodejs_icon.svg'

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

import ImgClubpos1 from '/assets/images/clubpos1.jpg'
import ImgVmarket1 from '/assets/images/vmarket1.jpg'

import starIcon from '/assets/star.svg'
import coteIcon from '/assets/cotes.svg'
var URL = 'https://www.tivit.com/'
var TIVIT = 'TIVIT'

export const TextContentDataTest = [
  {
    portuguese: {
      home: {
        welcome: 'FullStack Developer — PHP · Node.js · React · Next.js',
        description: 'Evoluí de auxiliar a responsável por migrar sistemas legados, e hoje construo produtos que geram resultado real — como a plataforma que ajuda empresas a economizar até 25% em compras.',
        position: 'Vinícius Batista',
        eyebrow: 'FullStack Developer',
        chipYears: '+4 anos como developer',
        chipStack: 'PHP • React • Node',
        highlight: 'Atualmente atuo na plataforma de gestão de compras da VMarket, que ajuda restaurantes e hotéis a economizar até 25% nos custos de aquisição.',
        ctaProjects: 'Ver Projetos',
        ctaResume: 'Baixar CV',
        badgeLabel: 'Full-Stack'
      },
      shills: {
        titlePage: 'Habilidades',
        subtitle: 'Tecnologias e práticas que uso no dia a dia para construir produtos web, do frontend ao backend.',
        titleTechs: 'Tecnologias',
        titleOne: 'Frontend Development',
        titleTwo: 'Backend & APIs',
        titleThree: 'FullStack Solutions',
        descOne: 'Desenvolvimento de interfaces modernas e responsivas utilizando React.js, TypeScript e CSS avançado. Criação de componentes reutilizáveis, otimização de performance, implementação de testes e integração com APIs REST. Experiência com Tailwind CSS, Styled Components e design systems.',
        descTwo: 'Desenvolvimento de APIs RESTful utilizando PHP, Node.js e Express. Integração com bancos de dados relacionais, com maior experiência em SQL e PostgreSQL. Implementação de autenticação, autorização e segurança. Deploy e manutenção de aplicações em produção usando Vercel e AWS.',
        descThree: 'Arquitetura de soluções completas end-to-end, desde o frontend até o backend. Trabalho com metodologias ágeis, versionamento Git, CI/CD e boas práticas de desenvolvimento. Foco em código limpo, escalabilidade e manutenibilidade. Experiência em trabalhar em equipe e entregar soluções de alta qualidade.',
      },
      contact: {
        titlePage: 'Contato',
        heading: 'Vamos construir algo juntos.',
        subtext: 'Disponível para oportunidades como FullStack Developer, freelas e projetos de migração/modernização de sistemas.',
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
              title: 'ClubPOS',
              text: 'Sistema de gestão desenvolvido inicialmente em Laravel antigo com jQuery e Bootstrap. Trabalhei na migração completa para Node.js e Next.js, modernizando toda a arquitetura e melhorando performance.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: reactIcon,
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  nextjs: nextjsIcon,
                  node: nodejsIcon,
                  ts: tsIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/vbanety',
              site: 'https://clubpos.org',
              more: 'modal5',
              createAtText: 'Migração concluída em:',
              createdAt: '2024',
              sortDate: 6
            },

            {
              index: 6,
              title: 'VMarket',
              text: 'Plataforma de gestão de compras para restaurantes, hotéis e food service. Atuo em sprints de melhoria contínua — novas features, integrações e correção de bugs em produção, atualmente focado em refatoração de layout UX/UI com apoio do Codex AI — no sistema que ajuda empresas a economizar até 25% nos custos de aquisição.',
              icons: [
                {
                  html: '',
                  css: '',
                  js: '',
                  react: reactIcon,
                  bootstrap: '',
                  php: '',
                  laravel: '',
                  sql: '',
                  apiIcon: apiIcon,
                  nextjs: '',
                  node: nodejsIcon,
                  ts: tsIcon,
                  github: '',
                  www: wwwIcon
                },
              ],
              repo: '',
              site: 'https://www.vmarket.com.br/',
              more: 'modal6',
              createAtText: 'Em produção desde:',
              createdAt: '2024',
              sortDate: 7
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
              title: 'ClubPOS - Migração e Modernização',
              img: [
                {
                  img1: ImgClubpos1
                }
              ],
              text: [
                {
                  p1: 'O projeto ClubPOS iniciou em um template antigo desenvolvido em Laravel com jQuery e Bootstrap. Trabalhei na manutenção desse projeto legado, identificando pontos de melhoria e planejando a migração completa para tecnologias modernas.',
                  p2: 'Realizei a migração completa para Node.js e Next.js, modernizando toda a arquitetura do sistema. A nova versão conta com melhor performance, código mais limpo e manutenível, além de uma experiência de usuário significativamente melhorada.',
                  p3: 'Durante o processo de migração, implementei novas funcionalidades, otimizei consultas ao banco de dados, melhorei a segurança e adotei boas práticas de desenvolvimento. O sistema agora está mais escalável e preparado para futuras expansões.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://clubpos.org',
            createAtText: 'Migração concluída em:',
            createdAt: '2024',
            sortDate: 6
            },

            {
              index: 'modal6',
              title: 'VMarket - Plataforma de Gestão de Compras',
              img: [
                {
                  img1: ImgVmarket1
                }
              ],
              text: [
                {
                  p1: 'A VMarket é uma plataforma de gestão de compras para restaurantes, hotéis e food service. O sistema digitaliza processos de compras, permite cotações online e ajuda empresas a economizar até 25% nos custos de aquisição.',
                  p2: 'Atuo em sprints de melhoria contínua na plataforma — desenvolvimento de novas features, integrações com sistemas e APIs REST, e correção de bugs reportados em produção.',
                  p3: 'Trabalho com React, TypeScript e Node.js no dia a dia, em equipe com metodologias ágeis, entregando funcionalidades que geram impacto direto no negócio dos clientes. Atualmente também atuo em refatoração de layout UX/UI no frontend com apoio do Codex AI.'
                }
              ],
            repo: '',
            site: 'https://www.vmarket.com.br/',
            createAtText: 'Em produção desde:',
            createdAt: '2024',
            sortDate: 7
            },
          ],
        }
      },
      about: {
        aboutMe: [
          {
            name: 'Vinícius Batista',
            titlePage: 'Sobre',
            eyebrow: 'Sobre mim',
            positionJob: 'Desenvolvedor FullStack',
            titleDescription: 'Trajetória',
            resume: 'Currículo',
            pdf: '/assets/pdf/cv_20_jul_2026_pt.pdf',
            expertiseTitle: 'Expertise',
            expertiseText: 'React, Node.js e PHP — migração de sistemas legados e arquitetura full-stack de ponta a ponta.',
            philosophyTitle: 'Filosofia',
            philosophyText: 'Aprendizado contínuo não é hábito, é princípio de trabalho — acompanho de perto as tendências de IA aplicada a desenvolvimento.',
            paragraphs: [
              {
                text: '- FullStack Developer com base sólida em PHP e Node.js, e foco atual em React, Next.js e TypeScript. Na VMarket, atuo em sprints de melhoria contínua — novas features, integrações e correção de bugs em produção — na plataforma de gestão de compras que ajuda restaurantes e hotéis a economizar até 25% nos custos de aquisição.'
              },
              {
                text: '- Comecei como auxiliar de frontend na SETY TECNOLOGIA, atendendo a conta do cliente ClubPOS. Quando a Sety encerrou seu setor de software house, fui contratado diretamente como PJ pelo próprio ClubPOS, por desempenho e comprometimento — lá, evoluí até ficar responsável pela migração completa do sistema de Laravel/jQuery/Bootstrap para Node.js e Next.js. Hoje sigo colaborando pontualmente com apoio de ferramentas de IA para novas implementações.'
              },
              {
                text: `- Após me formar em técnico de informática em 2011, cheguei a criar dois sistemas em Delphi (controle de estoque e gestão de fluxo para imobiliárias) por conta própria — não avançaram profissionalmente, já que na época eu trabalhava em logística numa terceirizada da Volkswagen (2007-2015), fazendo suporte técnico esporádico em paralelo pra não perder contato com tecnologia. Entrei em TI formalmente como suporte técnico na ${TIVIT} em 2019, solucionando problemas de microinformática para o cliente ITAU, e iniciei, no mesmo período, a graduação em Análise e Desenvolvimento de Sistemas.`
              },
              {
                text: '- Meu aprendizado é contínuo e autodirigido — acompanho de perto conteúdo técnico e tendências de IA aplicada a desenvolvimento, para manter minha stack e meu fluxo de trabalho atualizados com o que o mercado está adotando agora.'
              }
            ],
            titleExperience: 'Experiência Profissional',
            titleTestimonies: 'Testemunhos'
          }
        ],
        experience: [
          {
            id: 1,
            company: 'VMarket',
            position: 'Desenvolvedor FullStack',
            period: 'Ago 2024 - Presente',
            location: 'São José dos Campos - SP',
            type: 'FullStack',
            description: 'Atuo em sprints de melhoria contínua na plataforma de gestão de compras para restaurantes, hotéis e food service — desenvolvimento de novas features, integrações e correção de bugs reportados em produção. Atualmente focado em demandas de refatoração de layout UX/UI no frontend, com apoio do Codex AI. O sistema ajuda empresas a economizar até 25% nos custos de aquisição.',
            achievements: [
              'Refatoração de layout UX/UI no frontend com apoio do Codex AI',
              'Desenvolvimento de novas features em sprints de melhoria contínua',
              'Integrações com sistemas e APIs REST',
              'Atuação em quadro dedicado de bugfix para produção',
              'Desenvolvimento de componentes reutilizáveis em React',
              'Trabalho em equipe com metodologias ágeis'
            ],
            technologies: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'REST API'],
            current: true,
            projects: [
              {
                name: 'VMarket Platform',
                url: 'https://www.vmarket.com.br/',
                description: 'Plataforma de gestão de compras para restaurantes, hotéis e food service. Sistema que digitaliza processos de compras, permite cotações online e ajuda empresas a economizar até 25% nos custos.',
                technologies: ['React', 'TypeScript', 'Node.js', 'REST API']
              }
            ]
          },
          {
            id: 2,
            company: 'Freelancer',
            position: 'Desenvolvedor FullStack',
            period: '2020 - Presente',
            location: 'Remoto',
            type: 'FullStack',
            description: 'Desenvolvimento de aplicações web completas, desde o frontend até o backend, utilizando tecnologias modernas. Criação de soluções end-to-end para diversos clientes.',
            achievements: [
              'Desenvolvimento de aplicações web completas',
              'Criação de APIs RESTful e GraphQL',
              'Implementação de autenticação e autorização',
              'Deploy e manutenção de aplicações em produção',
              'Arquitetura de sistemas escaláveis'
            ],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'Vercel', 'AWS'],
            current: false,
            projects: [
              {
                name: 'Ahsant',
                url: 'https://ahsant.com.br',
                description: 'Plataforma desenvolvida como freelancer para gestão e automação de processos. Desenvolvimento fullstack com foco em performance e experiência do usuário.',
                technologies: ['React', 'Node.js', 'TypeScript', 'REST API']
              }
            ]
          },
          {
            id: 4,
            company: 'ClubPOS',
            position: 'Desenvolvedor FullStack (PJ)',
            period: 'Ago 2022 - Presente',
            location: 'Remoto',
            type: 'FullStack',
            description: 'Comecei como auxiliar de frontend na SETY TECNOLOGIA, atendendo a conta do cliente ClubPOS. Quando a Sety encerrou seu setor de software house em 2022, fui contratado diretamente como PJ pelo próprio ClubPOS, por desempenho e comprometimento. Atuação principal como PJ até Ago 2023, evoluindo até ficar responsável pela migração completa do sistema de Laravel/jQuery/Bootstrap para Node.js e Next.js. Desde então, sigo colaborando pontualmente conforme demanda.',
            achievements: [
              'Evolução de auxiliar de frontend a responsável pela migração do sistema',
              'Migração completa de Laravel/jQuery/Bootstrap para Node.js e Next.js',
              'Modernização da arquitetura do sistema',
              'Otimização de consultas ao banco de dados (SQL)',
              'Melhoria de segurança e boas práticas',
              'Manutenção do sistema legado durante a transição',
              'Atualmente colaboro pontualmente como freelancer, com apoio de ferramentas de IA'
            ],
            technologies: ['PHP', 'Laravel', 'jQuery', 'Next.js', 'Node.js', 'React', 'TypeScript', 'SQL', 'REST API'],
            current: false,
            projects: [
              {
                name: 'ClubPOS',
                url: 'https://clubpos.org',
                description: 'Sistema de gestão desenvolvido inicialmente em PHP/Laravel com jQuery e Bootstrap. Evoluí de auxiliar a responsável pela migração completa para Node.js e Next.js, modernizando toda a arquitetura e melhorando significativamente a performance.',
                technologies: ['PHP', 'Laravel', 'Next.js', 'Node.js', 'React', 'TypeScript', 'SQL', 'REST API']
              }
            ]
          },
          {
            id: 3,
            company: 'SETY TECNOLOGIA',
            position: 'Desenvolvedor Frontend',
            period: 'Ago 2021 - Jul 2022',
            location: 'São José dos Campos - SP',
            type: 'Frontend',
            description: 'Iniciei como auxiliar de frontend, atuando principalmente na conta do cliente ClubPOS — desenvolvimento de interfaces com React.js, implementação de funcionalidades e correção de bugs.',
            achievements: [
              'Desenvolvimento de componentes reutilizáveis em React',
              'Integração com APIs REST',
              'Implementação de testes unitários',
              'Otimização de performance'
            ],
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'REST API'],
            current: false
          },
          {
            id: 5,
            company: 'Freelance — Panamá',
            position: 'Desenvolvedor FullStack (Freelance)',
            period: '2022',
            location: 'Cidade do Panamá, Panamá',
            type: 'FullStack',
            description: 'Freelance de curta duração (~2 semanas) via um investidor da SETY TECNOLOGIA, que também investia em uma plataforma de investimentos. Fui até a Panamá para investigar e implementar o consumo da API de cartão de crédito do Atlas Bank (Banistmo).',
            achievements: [
              'Implementação de autenticação OAuth2 com Node.js',
              'Consumo de API bancária do Atlas Bank/Banistmo',
              'Criação de interface de login',
              'Exibição de dados dos endpoints na tela'
            ],
            technologies: ['Node.js', 'OAuth2', 'REST API', 'JavaScript'],
            current: false
          },
          {
            id: 6,
            company: 'DXC Technology',
            position: 'Técnico de Suporte I (Help Desk)',
            period: 'Mai 2021 - Ago 2021',
            location: 'São José dos Campos - SP',
            type: 'Suporte',
            description: 'Passagem curta em suporte de Help Desk, na sequência do TIVIT, atendendo ainda a conta do cliente ITAÚ.',
            achievements: [
              'Resolução de incidentes escalados do suporte de Nível 1',
              'Soluções de problemas de software para os departamentos do ITAÚ'
            ],
            technologies: ['Windows', 'Suporte Técnico'],
            current: false
          },
          {
            id: 4,
            company: 'TIVIT',
            position: 'Suporte Técnico T.I',
            period: 'Mai 2019 - Mai 2021',
            location: 'São José dos Campos - SP',
            type: 'Suporte',
            description: 'Suporte técnico para solução de problemas de microinformática para cliente ITAU, manutenção de equipamentos e sistemas.',
            achievements: [
              'Resolução de problemas técnicos de hardware e software',
              'Atendimento ao cliente com foco em qualidade',
              'Manutenção preventiva de equipamentos'
            ],
            technologies: ['Windows', 'Linux', 'Hardware', 'Redes'],
            current: false
          },
          {
            id: 7,
            company: 'Freelancer',
            position: 'Suporte Técnico T.I (esporádico)',
            period: '2012 - 2020',
            location: 'São José dos Campos - SP',
            type: 'Suporte',
            description: 'Suporte técnico remoto e presencial esporádico em sistemas Windows, em paralelo ao trabalho em logística na indústria automotiva — forma de manter contato com tecnologia, minha paixão desde cedo.',
            achievements: [
              'Suporte remoto e presencial em sistemas Windows',
              'Configuração de softwares e hardware'
            ],
            technologies: ['Windows', 'Hardware', 'Suporte Técnico'],
            current: false
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
            person: 'https://media.licdn.com/dms/image/v2/D4D03AQG4lxIwUh8RcQ/profile-displayphoto-scale_400_400/B4DZp.ZOZ3KQAk-/0/1763057133940?e=1785974400&v=beta&t=Jm7MAVgRnSUh82eBRvSY8c3qiOfqy6EYkxgFPdr6lIg',
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
        ]
      },
      
    },
  },

  {
    english: {
      home: {
        welcome: 'FullStack Developer — PHP · Node.js · React · Next.js',
        description: 'I evolved from assistant to lead on a legacy system migration, and today I build products that drive real results — like the platform that helps businesses save up to 25% on purchasing.',
        position: 'Vinícius Batista',
        eyebrow: 'FullStack Developer',
        chipYears: '+4 years as a developer',
        chipStack: 'PHP • React • Node',
        highlight: 'I currently work on VMarket\'s purchasing management platform, which helps restaurants and hotels save up to 25% on acquisition costs.',
        ctaProjects: 'View Projects',
        ctaResume: 'Download CV',
        badgeLabel: 'Full-Stack'
      },
      shills: {
        titlePage: 'Skills',
        subtitle: 'Technologies and practices I use day-to-day to build web products, from frontend to backend.',
        titleTechs: 'Technologies',
        titleOne: 'Frontend Development',
        titleTwo: 'Backend & APIs',
        titleThree: 'FullStack Solutions',
        descOne: 'Development of modern and responsive interfaces using React.js, TypeScript and advanced CSS. Creation of reusable components, performance optimization, test implementation and integration with REST APIs. Experience with Tailwind CSS, Styled Components and design systems.',
        descTwo: 'Development of RESTful APIs using PHP, Node.js and Express. Integration with relational databases, with strongest experience in SQL and PostgreSQL. Implementation of authentication, authorization and security. Deploy and maintenance of applications in production using Vercel and AWS.',
        descThree: 'Architecture of complete end-to-end solutions, from frontend to backend. Work with agile methodologies, Git versioning, CI/CD and development best practices. Focus on clean code, scalability and maintainability. Experience working in teams and delivering high-quality solutions.',
      },
      contact: {
        titlePage: 'Contact',
        heading: "Let's build something together.",
        subtext: 'Available for FullStack Developer opportunities, freelance work, and system migration/modernization projects.',
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
              title: 'ClubPOS',
              text: 'Management system initially developed in old Laravel with jQuery and Bootstrap. Worked on complete migration to Node.js and Next.js, modernizing the entire architecture and improving performance.',
              icons: [
                {
                  html: htmlIcon,
                  css: cssIcon,
                  js: jsIcon,
                  react: reactIcon,
                  bootstrap: '',
                  php: phpIcon,
                  laravel: laravelIcon,
                  sql: sqlIcon,
                  apiIcon: apiIcon,
                  nextjs: nextjsIcon,
                  node: nodejsIcon,
                  ts: tsIcon,
                  github: gitHubIcon,
                  www: wwwIcon
                },
              ],
              repo: 'https://github.com/vbanety',
              site: 'https://clubpos.org',
              more: 'modal5',
              createAtText: 'Migration completed: ',
              createdAt: '2024',
              sortDate: 6
            },

            {
              index: 6,
              title: 'VMarket',
              text: 'Purchasing management platform for restaurants, hotels and food service. I work in continuous-improvement sprints — new features, integrations and production bugfixes, currently focused on UX/UI layout refactoring with Codex AI support — on the system that helps companies save up to 25% on acquisition costs.',
              icons: [
                {
                  html: '',
                  css: '',
                  js: '',
                  react: reactIcon,
                  bootstrap: '',
                  php: '',
                  laravel: '',
                  sql: '',
                  apiIcon: apiIcon,
                  nextjs: '',
                  node: nodejsIcon,
                  ts: tsIcon,
                  github: '',
                  www: wwwIcon
                },
              ],
              repo: '',
              site: 'https://www.vmarket.com.br/',
              more: 'modal6',
              createAtText: 'In production since:',
              createdAt: '2024',
              sortDate: 7
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
              title: 'ClubPOS - Migration and Modernization',
              img: [
                {
                  img1: ImgClubpos1
                }
              ],
              text: [
                {
                  p1: 'The ClubPOS project started in an old template developed in Laravel with jQuery and Bootstrap. I worked on maintaining this legacy project, identifying improvement points and planning the complete migration to modern technologies.',
                  p2: 'I performed the complete migration to Node.js and Next.js, modernizing the entire system architecture. The new version features better performance, cleaner and more maintainable code, and a significantly improved user experience.',
                  p3: 'During the migration process, I implemented new features, optimized database queries, improved security and adopted development best practices. The system is now more scalable and ready for future expansions.'
                }
              ],
            repo: 'https://github.com/vbanety',
            site: 'https://clubpos.org',
            createAtText: 'Migration completed: ',
            createdAt: '2024',
            sortDate: 6
            },

            {
              index: 'modal6',
              title: 'VMarket - Purchasing Management Platform',
              img: [
                {
                  img1: ImgVmarket1
                }
              ],
              text: [
                {
                  p1: 'VMarket is a purchasing management platform for restaurants, hotels and food service. The system digitizes purchasing processes, enables online quotations and helps companies save up to 25% on acquisition costs.',
                  p2: 'I work in continuous-improvement sprints on the platform — developing new features, integrating with systems and REST APIs, and fixing bugs reported in production.',
                  p3: 'I work daily with React, TypeScript and Node.js, on an agile team, delivering features that drive direct business impact for clients. I currently also work on UX/UI layout refactoring on the frontend with Codex AI support.'
                }
              ],
            repo: '',
            site: 'https://www.vmarket.com.br/',
            createAtText: 'In production since:',
            createdAt: '2024',
            sortDate: 7
            },
          ]
        }
      },
      about: {
        aboutMe: [
          {
            name: 'Vinícius Batista',
            titlePage: 'About',
            eyebrow: 'About me',
            positionJob: 'FullStack Developer',
            titleDescription: 'Trajectory',
            resume: 'Resume',
            expertiseTitle: 'Expertise',
            expertiseText: 'React, Node.js and PHP — legacy system migration and end-to-end full-stack architecture.',
            philosophyTitle: 'Philosophy',
            philosophyText: "Continuous learning isn't a habit, it's a working principle — I closely follow AI-in-development trends.",
            paragraphs: [
              {
                text: "- FullStack Developer with a solid base in PHP and Node.js, currently focused on React, Next.js and TypeScript. At VMarket, I work in continuous-improvement sprints — new features, integrations and production bugfixes — on the purchasing management platform that helps restaurants and hotels save up to 25% on acquisition costs."
              },
              {
                text: '- I started as a frontend assistant at SETY TECNOLOGIA, working on the ClubPOS client account. When Sety closed its software house division, I was hired directly as a contractor by ClubPOS itself, based on performance and commitment — there, I grew into the person responsible for the complete migration from Laravel/jQuery/Bootstrap to Node.js and Next.js. Today I still collaborate occasionally, using AI tools to speed up new implementations.'
              },
              {
                text: "- After graduating as a computer technician in 2011, I built two personal systems in Delphi (inventory control and real estate flow management) on my own — they didn't go further professionally, since at the time I worked in logistics at a Volkswagen third-party contractor (2007-2015), doing sporadic technical support on the side to stay in touch with technology. I formally entered IT as technical support at TIVIT in 2019, solving microcomputer problems for the ITAU client, and started my degree in Systems Analysis and Development during that same period."
              },
              {
                text: "- My learning is continuous and self-directed — I closely follow technical content and AI-in-development trends to keep my stack and workflow up to date with what the market is adopting now."
              }
            ],
            titleExperience: 'Professional Experience',
            pdf: '/assets/pdf/cv_20_jul_2026_en.pdf',
            titleTestimonies: 'Testimonies'
          }
        ],
        experience: [
          {
            id: 1,
            company: 'VMarket',
            position: 'FullStack Developer',
            period: 'Aug 2024 - Present',
            location: 'São José dos Campos - SP',
            type: 'FullStack',
            description: 'I work in continuous-improvement sprints on the purchasing management platform for restaurants, hotels and food service — developing new features, integrations and fixing bugs reported in production. Currently focused on UX/UI layout refactoring on the frontend, with Codex AI support. The system helps companies save up to 25% on acquisition costs.',
            achievements: [
              'UX/UI layout refactoring on the frontend with Codex AI support',
              'Development of new features in continuous-improvement sprints',
              'Integrations with systems and REST APIs',
              'Ownership of a dedicated production bugfix board',
              'Development of reusable React components',
              'Teamwork with agile methodologies'
            ],
            technologies: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'REST API'],
            current: true,
            projects: [
              {
                name: 'VMarket Platform',
                url: 'https://www.vmarket.com.br/',
                description: 'Purchasing management platform for restaurants, hotels and food service. System that digitizes purchasing processes, allows online quotations and helps companies save up to 25% on costs.',
                technologies: ['React', 'TypeScript', 'Node.js', 'REST API']
              }
            ]
          },
          {
            id: 2,
            company: 'Freelancer',
            position: 'FullStack Developer',
            period: '2020 - Present',
            location: 'Remote',
            type: 'FullStack',
            description: 'Development of complete web applications, from frontend to backend, using modern technologies. Creation of end-to-end solutions for various clients.',
            achievements: [
              'Development of complete web applications',
              'Creation of RESTful and GraphQL APIs',
              'Implementation of authentication and authorization',
              'Deploy and maintenance of applications in production',
              'Scalable system architecture'
            ],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'Vercel', 'AWS'],
            current: false,
            projects: [
              {
                name: 'Ahsant',
                url: 'https://ahsant.com.br',
                description: 'Platform developed as a freelancer for process management and automation. Fullstack development focused on performance and user experience.',
                technologies: ['React', 'Node.js', 'TypeScript', 'REST API']
              }
            ]
          },
          {
            id: 4,
            company: 'ClubPOS',
            position: 'FullStack Developer (Contractor)',
            period: 'Aug 2022 - Present',
            location: 'Remote',
            type: 'FullStack',
            description: 'I started as a frontend assistant at SETY TECNOLOGIA, working on the ClubPOS client account. When Sety closed its software house division in 2022, I was hired directly as a contractor by ClubPOS itself, based on performance and commitment. Main engagement as a contractor until Aug 2023, growing into the person responsible for the complete migration from Laravel/jQuery/Bootstrap to Node.js and Next.js. Since then, I continue collaborating occasionally as needed.',
            achievements: [
              'Grew from frontend assistant to lead on the system migration',
              'Complete migration from Laravel/jQuery/Bootstrap to Node.js and Next.js',
              'System architecture modernization',
              'Database query optimization (SQL)',
              'Security improvements and best practices',
              'Legacy system maintenance during transition',
              'Currently collaborate occasionally as a freelancer, using AI tools'
            ],
            technologies: ['PHP', 'Laravel', 'jQuery', 'Next.js', 'Node.js', 'React', 'TypeScript', 'SQL', 'REST API'],
            current: false,
            projects: [
              {
                name: 'ClubPOS',
                url: 'https://clubpos.org',
                description: 'Management system initially developed in PHP/Laravel with jQuery and Bootstrap. I grew from assistant to lead on the complete migration to Node.js and Next.js, modernizing the entire architecture and significantly improving performance.',
                technologies: ['PHP', 'Laravel', 'Next.js', 'Node.js', 'React', 'TypeScript', 'SQL', 'REST API']
              }
            ]
          },
          {
            id: 3,
            company: 'SETY TECNOLOGIA',
            position: 'Frontend Developer',
            period: 'Aug 2021 - Jul 2022',
            location: 'São José dos Campos - SP',
            type: 'Frontend',
            description: 'Started as a frontend assistant, working mainly on the ClubPOS client account — interface development with React.js, feature implementation and bug fixes.',
            achievements: [
              'Development of reusable React components',
              'Integration with REST APIs',
              'Implementation of unit tests',
              'Performance optimization'
            ],
            technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'REST API'],
            current: false
          },
          {
            id: 5,
            company: 'Freelance — Panama',
            position: 'FullStack Developer (Freelance)',
            period: '2022',
            location: 'Panama City, Panama',
            type: 'FullStack',
            description: 'Short-term freelance engagement (~2 weeks) through an investor at SETY TECNOLOGIA, who also invested in an investment platform. I traveled to Panama to investigate and implement credit card API consumption for Atlas Bank (Banistmo).',
            achievements: [
              'Implemented OAuth2 authentication with Node.js',
              'Consumed Atlas Bank/Banistmo banking API',
              'Built a login interface',
              'Displayed endpoint data on screen'
            ],
            technologies: ['Node.js', 'OAuth2', 'REST API', 'JavaScript'],
            current: false
          },
          {
            id: 6,
            company: 'DXC Technology',
            position: 'Support Technician I (Help Desk)',
            period: 'May 2021 - Aug 2021',
            location: 'São José dos Campos - SP',
            type: 'Support',
            description: 'Short stint in Help Desk support, right after TIVIT, still serving the ITAU client account.',
            achievements: [
              'Resolution of escalated Level 1 support incidents',
              'Software troubleshooting for ITAU departments'
            ],
            technologies: ['Windows', 'Technical Support'],
            current: false
          },
          {
            id: 4,
            company: 'TIVIT',
            position: 'IT Technical Support',
            period: 'May 2019 - May 2021',
            location: 'São José dos Campos - SP',
            type: 'Support',
            description: 'Technical support for solving microcomputer problems for ITAU client, equipment and systems maintenance.',
            achievements: [
              'Resolution of hardware and software technical problems',
              'Customer service focused on quality',
              'Preventive maintenance of equipment'
            ],
            technologies: ['Windows', 'Linux', 'Hardware', 'Networks'],
            current: false
          },
          {
            id: 7,
            company: 'Freelancer',
            position: 'IT Technical Support (sporadic)',
            period: '2012 - 2020',
            location: 'São José dos Campos - SP',
            type: 'Support',
            description: 'Sporadic remote and on-site technical support on Windows systems, alongside a logistics job in the automotive industry — a way to stay in touch with technology, my passion since early on.',
            achievements: [
              'Remote and on-site support on Windows systems',
              'Software and hardware configuration'
            ],
            technologies: ['Windows', 'Hardware', 'Technical Support'],
            current: false
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
        ]
      },
      
    },
  }


]
