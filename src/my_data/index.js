import images from "../images";

const MY_DATA = {
  portuguese: {
    about: {
      intro: 'Olá! Eu sou o Rafael Moura e moro em Recife-PE.',
      goals: 'Entrei no mundo da programação na metade de 2021 e foi paixão a primeira vista. Quando percebi que eu gostava de resolver problemas através da lógica, eu automaticamente entrei de cabeça no mundo da Tecnologia.',
      formation: 'Irei finalizar meus estudos na Trybe em agosto de 2022. A Trybe é uma escola de programação com mais de 1500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.',
    },

    skills: [
      {
        tech: 'JavaScript',
        description: 'Linguagem de programação muito utilizada no desenvolvimento web',
        image: images.javascript,
      },
      {
        tech: 'HTML',
        description: 'Linguagem de marcação de texto',
        image: images.html,
      },
      {
        tech: 'CSS',
        description: 'Linguagem de estilização',
        image: images.css,
      },
      {
        tech: 'React',
        description: 'Biblioteca para criação de interface de usuário',
        image: images.react,
      },
      {
        tech: 'Redux',
        description: 'Ferramenta de controle de estado de aplicações',
        image: images.redux,
      },
      {
        tech: 'Linux',
        description: 'Sistema Operacional',
        image: images.linux,
      },
      {
        tech: 'Jest',
        description: 'Ferramenta de testes unitários',
        image: images.jest,
      },
      {
        tech: 'RTL',
        description: 'Ferramenta de testes unitários em aplicações feitas no React',
        image: images.rtl,
      },
      {
        tech: 'GitHub',
        description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão',
        image: images.github,
      },
      {
        tech: 'Docker',
        description: 'O Docker é uma ferramenta de entrega de Software por meio de pacotes chamados containers',
        image: images.docker
      },
      {
        tech: 'NodeJS',
        description: 'NodeJS é um software que permite a execução de códigos JavaScript fora de um navegador web',
        image: images.node
      },
      {
        tech: 'MySQL',
        description: 'É um sistema de gerenciamento de banco de dados relacional',
        image: images.mysql
      },
      {
        tech: 'Heroku',
        description: 'Plataforma de nuvem para fazer deploy de softwares',
        image: images.heroku
      },
      {
        tech: 'TypeScript',
        description: 'É um superset do JavaScript que adiciona tipagem estática à linguagem',
        image: images.typescript
      },
      {
        tech: 'MongoDB',
        description: 'O MongoDB é um Banco de Dados não relacional',
        image: images.mongodb
      }
    ],

    projects: [
      {
        name: 'Jogo de Trivia',
        image: images.triviagame,
        description: 'É um projeto realizado em grupo em que fizemos um jogo de Trivia',
        github: 'https://github.com/RafaelMoura11/project-trivia',
        deploy: 'https://the-trivia-game.vercel.app/'
      },
      {
        name: 'App de Receitas',
        image: images.recipeapp,
        description: 'É um projeto realizado em grupo em que fizemos um App de Receitas',
        github: 'https://github.com/RafaelMoura11/recipe-app',
        deploy: 'https://recipe-app-ecru.vercel.app/'
      },
      {
        name: 'TFC',
        image: images.tfc,
        description: 'O TFC é um projeto de uma tabela de times de futebol',
        github: 'https://github.com/RafaelMoura11/TFC',
      }
    ]
  }
};

export default MY_DATA;