// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

const ALL_LESSONS = [
  {
    id: 544,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Mistérios Revelados - Português",
    slug: "aula-interessante-90",
    tags: ["outro2", "outro1", "vsl"],
    level: "elder",
  },
  {
    id: 289,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Jornada da Descoberta - Inglês",
    slug: "workshop-avancado-0",
    tags: ["encapsulado", "plr", "outro2"],
    level: "newbie",
  },
  {
    id: 812,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Mudar o vídeo da VSL - Português",
    slug: "workshop-avancado-23",
    tags: ["outro2", "landing-page", "vsl"],
    level: "newbie",
  },
  {
    id: 61,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Histórias Inspiradoras - Espanhol",
    slug: "aula-interessante-26",
    tags: ["vsl", "outro1", "outro2"],
    level: "newbie",
  },
  {
    id: 188,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Sabores Exóticos - Português",
    slug: "curso-pratico-81",
    tags: ["plr", "landing-page", "outro2"],
    level: "elder",
  },
  {
    id: 409,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Mudar o vídeo da VSL - Português",
    slug: "aula-interessante-94",
    tags: ["outro1", "outro2", "plr"],
    level: "middle",
  },
  {
    id: 979,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Culinária do Mundo - Português",
    slug: "curso-pratico-8",
    tags: ["landing-page", "outro1", "encapsulado"],
    level: "middle",
  },
  {
    id: 272,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Como criar um link âncora - Português",
    slug: "curso-pratico-1",
    tags: ["plr", "encapsulado", "outro1"],
    level: "newbie",
  },
  {
    id: 840,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Em Busca da Verdade - Espanhol",
    slug: "aula-interessante-4",
    tags: ["vsl", "encapsulado", "outro2"],
    level: "elder",
  },
  {
    id: 565,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Espanhol",
    slug: "aula-interessante-41",
    tags: ["vsl", "outro1", "encapsulado"],
    level: "elder",
  },
  {
    id: 723,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "A Ciência em Ação - Inglês",
    slug: "introducao-ao-tema-58",
    tags: ["landing-page", "encapsulado", "plr"],
    level: "middle",
  },
  {
    id: 705,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Mudar o vídeo da VSL - Português",
    slug: "introducao-ao-tema-2",
    tags: ["outro1", "plr", "outro2"],
    level: "middle",
  },
  {
    id: 433,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Desafios da Natureza - Espanhol",
    slug: "introducao-ao-tema-68",
    tags: ["outro1", "encapsulado", "vsl"],
    level: "elder",
  },
  {
    id: 950,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Ritmos do Mundo - Espanhol",
    slug: "curso-pratico-84",
    tags: ["plr", "vsl", "encapsulado"],
    level: "middle",
  },
  {
    id: 593,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curiosidades da Vida - Espanhol",
    slug: "aula-interessante-1",
    tags: ["vsl", "outro2", "landing-page"],
    level: "elder",
  },
  {
    id: 795,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Belezas Naturais - Português",
    slug: "workshop-avancado-55",
    tags: ["outro2", "outro1", "landing-page"],
    level: "elder",
  },
  {
    id: 22,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Espanhol",
    slug: "aula-interessante-73",
    tags: ["outro2", "encapsulado", "outro1"],
    level: "zero",
  },
  {
    id: 693,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Belezas Naturais - Inglês",
    slug: "aula-interessante-26",
    tags: ["encapsulado", "landing-page", "plr"],
    level: "elder",
  },
  {
    id: 867,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Histórias Inspiradoras - Espanhol",
    slug: "curso-pratico-18",
    tags: ["vsl", "outro1", "plr"],
    level: "middle",
  },
  {
    id: 147,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Mistérios Revelados - Inglês",
    slug: "aula-interessante-71",
    tags: ["vsl", "landing-page", "encapsulado"],
    level: "zero",
  },
  {
    id: 15,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curso prático - Espanhol",
    slug: "introducao-ao-tema-88",
    tags: ["outro2", "vsl", "landing-page"],
    level: "middle",
  },
  {
    id: 303,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Maravilhas Subaquáticas - Inglês",
    slug: "introducao-ao-tema-99",
    tags: ["encapsulado", "outro2", "plr"],
    level: "zero",
  },
  {
    id: 710,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Segredos da Mente - Espanhol",
    slug: "curso-pratico-85",
    tags: ["plr", "encapsulado", "vsl"],
    level: "zero",
  },
  {
    id: 999,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Explorando Culturas - Inglês",
    slug: "aula-interessante-50",
    tags: ["encapsulado", "plr", "vsl"],
    level: "middle",
  },
  {
    id: 120,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Desafios da Natureza - Inglês",
    slug: "curso-pratico-3",
    tags: ["vsl", "encapsulado", "outro2"],
    level: "zero",
  },
  {
    id: 681,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Caminhos da História - Português",
    slug: "workshop-avancado-20",
    tags: ["vsl", "outro1", "landing-page"],
    level: "zero",
  },
  {
    id: 492,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Jornada da Descoberta - Inglês",
    slug: "workshop-avancado-68",
    tags: ["vsl", "outro1", "landing-page"],
    level: "newbie",
  },
  {
    id: 642,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Jornada da Descoberta - Inglês",
    slug: "introducao-ao-tema-58",
    tags: ["outro1", "outro2", "landing-page"],
    level: "newbie",
  },
  {
    id: 670,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Arte da Fotografia - Espanhol",
    slug: "curso-pratico-85",
    tags: ["vsl", "outro1", "encapsulado"],
    level: "elder",
  },
  {
    id: 500,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Introdução ao tema - Inglês",
    slug: "workshop-avancado-5",
    tags: ["encapsulado", "landing-page", "outro1"],
    level: "zero",
  },
  {
    id: 781,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Aventuras ao Ar Livre - Espanhol",
    slug: "introducao-ao-tema-67",
    tags: ["outro1", "vsl", "encapsulado"],
    level: "middle",
  },
  {
    id: 235,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Culinária do Mundo - Português",
    slug: "aula-interessante-45",
    tags: ["landing-page", "encapsulado", "vsl"],
    level: "elder",
  },
  {
    id: 449,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Sabores Exóticos - Espanhol",
    slug: "aula-interessante-28",
    tags: ["vsl", "outro2", "landing-page"],
    level: "middle",
  },
  {
    id: 878,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Português",
    slug: "aula-interessante-94",
    tags: ["encapsulado", "outro1", "plr"],
    level: "elder",
  },
  {
    id: 700,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Workshop avançado - Inglês",
    slug: "aula-interessante-45",
    tags: ["plr", "encapsulado", "outro2"],
    level: "middle",
  },
  {
    id: 118,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curso prático - Espanhol",
    slug: "aula-interessante-63",
    tags: ["outro1", "plr", "encapsulado"],
    level: "newbie",
  },
  {
    id: 252,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Introdução ao tema - Inglês",
    slug: "workshop-avancado-28",
    tags: ["encapsulado", "outro1", "landing-page"],
    level: "middle",
  },
  {
    id: 948,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Inglês",
    slug: "workshop-avancado-28",
    tags: ["plr", "vsl", "outro2"],
    level: "middle",
  },
  {
    id: 884,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Introdução ao tema - Espanhol",
    slug: "aula-interessante-27",
    tags: ["encapsulado", "landing-page", "vsl"],
    level: "zero",
  },
  {
    id: 976,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Sabores Exóticos - Português",
    slug: "introducao-ao-tema-90",
    tags: ["outro2", "vsl", "plr"],
    level: "middle",
  },
  {
    id: 51,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Histórias Inspiradoras - Inglês",
    slug: "curso-pratico-43",
    tags: ["outro1", "encapsulado", "landing-page"],
    level: "elder",
  },
  {
    id: 648,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Segredos da Mente - Espanhol",
    slug: "curso-pratico-89",
    tags: ["encapsulado", "outro2", "plr"],
    level: "middle",
  },
  {
    id: 201,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curiosidades da Vida - Inglês",
    slug: "aula-interessante-11",
    tags: ["plr", "outro1", "vsl"],
    level: "newbie",
  },
  {
    id: 587,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Jornada da Descoberta - Espanhol",
    slug: "curso-pratico-50",
    tags: ["landing-page", "outro1", "plr"],
    level: "middle",
  },
  {
    id: 801,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Segredos da Mente - Espanhol",
    slug: "introducao-ao-tema-15",
    tags: ["landing-page", "outro2", "plr"],
    level: "middle",
  },
  {
    id: 803,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curso prático - Inglês",
    slug: "workshop-avancado-98",
    tags: ["vsl", "encapsulado", "plr"],
    level: "elder",
  },
  {
    id: 58,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Espanhol",
    slug: "workshop-avancado-85",
    tags: ["landing-page", "outro1", "plr"],
    level: "elder",
  },
  {
    id: 743,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Aventuras Urbanas - Espanhol",
    slug: "aula-interessante-34",
    tags: ["landing-page", "encapsulado", "outro2"],
    level: "middle",
  },
  {
    id: 608,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Aventuras ao Ar Livre - Inglês",
    slug: "aula-interessante-8",
    tags: ["vsl", "outro1", "plr"],
    level: "elder",
  },
  {
    id: 314,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curiosidades da Vida - Espanhol",
    slug: "aula-interessante-11",
    tags: ["encapsulado", "landing-page", "plr"],
    level: "elder",
  },
  {
    id: 40,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Português",
    slug: "introducao-ao-tema-50",
    tags: ["outro2", "vsl", "outro1"],
    level: "newbie",
  },
  {
    id: 507,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Ritmos do Mundo - Espanhol",
    slug: "curso-pratico-73",
    tags: ["landing-page", "encapsulado", "outro2"],
    level: "middle",
  },
  {
    id: 562,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Tecnologia em Foco - Espanhol",
    slug: "workshop-avancado-23",
    tags: ["outro1", "vsl", "outro2"],
    level: "elder",
  },
  {
    id: 146,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Belezas Naturais - Espanhol",
    slug: "curso-pratico-46",
    tags: ["landing-page", "outro2", "outro1"],
    level: "middle",
  },
  {
    id: 336,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Caminhos da História - Português",
    slug: "curso-pratico-28",
    tags: ["landing-page", "outro1", "vsl"],
    level: "newbie",
  },
  {
    id: 376,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Tecnologia em Foco - Português",
    slug: "introducao-ao-tema-91",
    tags: ["outro1", "plr", "outro2"],
    level: "newbie",
  },
  {
    id: 888,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Explorando Culturas - Inglês",
    slug: "introducao-ao-tema-5",
    tags: ["landing-page", "vsl", "encapsulado"],
    level: "elder",
  },
  {
    id: 872,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Sabores Exóticos - Português",
    slug: "introducao-ao-tema-8",
    tags: ["vsl", "plr", "encapsulado"],
    level: "middle",
  },
  {
    id: 408,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Workshop avançado - Português",
    slug: "curso-pratico-74",
    tags: ["encapsulado", "landing-page", "outro2"],
    level: "zero",
  },
  {
    id: 906,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Culinária do Mundo - Português",
    slug: "introducao-ao-tema-73",
    tags: ["landing-page", "outro1", "vsl"],
    level: "middle",
  },
  {
    id: 936,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Culinária do Mundo - Espanhol",
    slug: "workshop-avancado-19",
    tags: ["outro2", "outro1", "encapsulado"],
    level: "middle",
  },
  {
    id: 752,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curso prático - Inglês",
    slug: "workshop-avancado-4",
    tags: ["plr", "outro1", "outro2"],
    level: "newbie",
  },
  {
    id: 892,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Viagem ao Desconhecido - Inglês",
    slug: "aula-interessante-65",
    tags: ["encapsulado", "outro2", "outro1"],
    level: "newbie",
  },
  {
    id: 656,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Caminhos da História - Inglês",
    slug: "workshop-avancado-15",
    tags: ["plr", "outro1", "landing-page"],
    level: "zero",
  },
  {
    id: 499,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curso prático - Espanhol",
    slug: "curso-pratico-45",
    tags: ["outro2", "encapsulado", "landing-page"],
    level: "elder",
  },
  {
    id: 865,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Aventuras ao Ar Livre - Inglês",
    slug: "aula-interessante-8",
    tags: ["outro2", "encapsulado", "vsl"],
    level: "newbie",
  },
  {
    id: 25,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Aula interessante - Inglês",
    slug: "workshop-avancado-55",
    tags: ["landing-page", "outro1", "plr"],
    level: "newbie",
  },
  {
    id: 39,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Caminhos da História - Português",
    slug: "aula-interessante-5",
    tags: ["outro2", "vsl", "plr"],
    level: "middle",
  },
  {
    id: 521,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Em Busca da Verdade - Português",
    slug: "aula-interessante-88",
    tags: ["plr", "encapsulado", "outro2"],
    level: "middle",
  },
  {
    id: 925,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Sabores Exóticos - Português",
    slug: "workshop-avancado-27",
    tags: ["outro1", "vsl", "encapsulado"],
    level: "middle",
  },
  {
    id: 792,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Como criar um link âncora - Português",
    slug: "workshop-avancado-90",
    tags: ["vsl", "plr", "outro1"],
    level: "newbie",
  },
  {
    id: 591,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Desafios da Natureza - Espanhol",
    slug: "introducao-ao-tema-42",
    tags: ["outro2", "outro1", "landing-page"],
    level: "elder",
  },
  {
    id: 422,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "A Ciência em Ação - Inglês",
    slug: "introducao-ao-tema-95",
    tags: ["landing-page", "outro2", "plr"],
    level: "newbie",
  },
  {
    id: 636,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Ritmos do Mundo - Português",
    slug: "introducao-ao-tema-10",
    tags: ["landing-page", "outro1", "outro2"],
    level: "newbie",
  },
  {
    id: 274,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "A Ciência em Ação - Português",
    slug: "introducao-ao-tema-37",
    tags: ["outro2", "landing-page", "vsl"],
    level: "zero",
  },
  {
    id: 23,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Workshop avançado - Inglês",
    slug: "aula-interessante-26",
    tags: ["outro1", "plr", "outro2"],
    level: "elder",
  },
  {
    id: 938,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Histórias Inspiradoras - Espanhol",
    slug: "curso-pratico-92",
    tags: ["plr", "outro1", "landing-page"],
    level: "middle",
  },
  {
    id: 373,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Explorando Culturas - Inglês",
    slug: "introducao-ao-tema-78",
    tags: ["outro2", "outro1", "landing-page"],
    level: "newbie",
  },
  {
    id: 452,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Desafios da Natureza - Português",
    slug: "curso-pratico-12",
    tags: ["plr", "vsl", "outro2"],
    level: "elder",
  },
  {
    id: 991,
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png",
    title: "Curiosidades da Vida - Inglês",
    slug: "aula-interessante-42",
    tags: ["encapsulado", "landing-page", "plr"],
    level: "middle",
  },
];

module.exports = [
  {
    id: "get-lessons", // route id
    url: "/api/lessons", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_LESSONS, // body to send
        },
      },
      {
        id: "all", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_LESSONS, // body to send
        },
      },
      // {
      //   id: "error", // variant id
      //   type: "json", // variant handler id
      //   options: {
      //     status: 400, // status to send
      //     // body to send
      //     body: {
      //       message: "Error",
      //     },
      //   },
      // },
    ],
  },
  {
    id: "get-lesson", // route id
    url: "/api/lessons/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      // {
      //   id: "success", // variant id
      //   type: "json", // variant handler id
      //   options: {
      //     status: 200, // status to send
      //     body: LESSONS[0], // body to send
      //   },
      // },
      // {
      //   id: "id-3", // variant id
      //   type: "json", // variant handler id
      //   options: {
      //     status: 200, // status to send
      //     body: ALL_LESSONS[2], // body to send
      //   },
      // },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const lessonId = req.params.id;
            const lesson = ALL_LESSONS.find(
              (lessonData) => lessonData.id === Number(lessonId)
            );
            if (lesson) {
              res.status(200);
              console.log(lesson);
              res.send(lesson);
            } else {
              res.status(404);
              res.send({
                message: "Lesson not found",
              });
            }
          },
        },
      },
    ],
  },
];
