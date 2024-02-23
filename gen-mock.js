const TAGS = ["plr", "landing-page", "encapsulado", "vsl", "outro1", "outro2"];
const LEVELS = ["zero", "newbie", "middle", "elder"];

let usedIds = new Set();

function generateUniqueID() {
  let id = Math.floor(Math.random() * 1000);
  while (usedIds.has(id)) {
    id = Math.floor(Math.random() * 1000);
  }
  usedIds.add(id);
  return id;
}

function getRandomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateTitle() {
  const variations = [
    "Aula interessante",
    "Curso prático",
    "Workshop avançado",
    "Introdução ao tema",
    "Como criar um link âncora",
    "Mudar o vídeo da VSL",
    "Segredos da Mente",
    "Aventuras Urbanas",
    "Desafios da Natureza",
    "Viagem ao Desconhecido",
    "Mistérios Revelados",
    "Arte da Fotografia",
    "Explorando Culturas",
    "Caminhos da História",
    "Jornada da Descoberta",
    "A Ciência em Ação",
    "Culinária do Mundo",
    "Tecnologia em Foco",
    "Belezas Naturais",
    "Curiosidades da Vida",
    "Em Busca da Verdade",
    "Ritmos do Mundo",
    "Maravilhas Subaquáticas",
    "Aventuras ao Ar Livre",
    "Histórias Inspiradoras",
    "Sabores Exóticos",
  ];
  return `${getRandomItemFromArray(variations)} - ${getRandomItemFromArray([
    "Inglês",
    "Português",
    "Espanhol",
  ])}`;
}

function generateSlug() {
  const variations = [
    "aula-interessante",
    "curso-pratico",
    "workshop-avancado",
    "introducao-ao-tema",
  ];
  return `${getRandomItemFromArray(variations)}-${Math.floor(
    Math.random() * 100
  )}`;
}

function generateObject() {
  const tagsVariations = new Set();
  while (tagsVariations.size < Math.min(3, TAGS.length)) {
    tagsVariations.add(getRandomItemFromArray(TAGS));
  }

  const level = getRandomItemFromArray(LEVELS);

  return {
    id: generateUniqueID(), // Gerar ID único
    thumb: "https://placehold.co/274x184/blueviolet/FFF/png", // Exemplo de URL da imagem
    title: generateTitle(), // Geração do título
    slug: generateSlug(), // Geração do slug
    tags: [...tagsVariations], // Convertendo o conjunto para array
    level: level,
  };
}

const array = [];
for (let i = 0; i < 80; i++) {
  array.push(generateObject());
}

console.log(array);
