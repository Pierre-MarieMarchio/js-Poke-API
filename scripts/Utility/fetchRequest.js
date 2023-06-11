const pokeList = document.querySelector(".poke-list");
const types = {
  grass: "#78c850",
  ground: "#E2BF65",
  dragon: "#6F35FC",
  fire: "#F58271",
  electric: "#F7D02C",
  fairy: "#D685AD",
  poison: "#966DA3",
  bug: "#B3F594",
  water: "#6390F0",
  normal: "#D9D5D8",
  psychic: "#F95587",
  flying: "#A98FF3",
  fighting: "#C25956",
  rock: "#B6A136",
  ghost: "#735797",
  ice: "#96D9D6",
};

export function fetchPokemon(allPokemonsArray, finalPokemonsArray) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        fetchPokemonAll(pokemon, allPokemonsArray, finalPokemonsArray);
      });
    });
}

function fetchPokemonAll(pokemon, allPokemonsArray, finalPokemonsArray) {
  // on créé un objet qui contient les informations du pokemon

  let pokemonFull = {};

  // on recupere l'url du pokemon pour ensuite lire les informations afin de remplir l'objet

  let url = pokemon.url;

  fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      //  on recupere les infos du pokemon pour les mettrer dans le objet

      pokemonFull.pick = pokeData.sprites.front_default;
      pokemonFull.name = pokeData.name;
      pokemonFull.type = pokeData.types[0].type.name;
      pokemonFull.id = pokeData.id;

      // on push lobject dans le tableau allPokemonsArray
      allPokemonsArray.push(pokemonFull);

      // on trie le tableaux et on ne récupere que les 21 premiers pokemons

      if (allPokemonsArray.length === 151) {
        //  on recupere les 21 premiers pokemons triés dans un nouveaux tableau

        finalPokemonsArray = allPokemonsArray

          // on trie en comparent l'id a - l'id b, si cest positif a et mis après b, si c'est inferieur a ne change pas de place par rapport à b
          .sort((a, b) => {
            return a.id - b.id;
          })
          .slice(0, 21);
        createCard(allPokemonsArray);
      }
    });
}

function createCard(array) {
  for (let i = 0; i < array.length; i++) {
    //  crée la carte pour l'instant vide
    const card = document.createElement("li");

    //    créé les informations du pokemon pour la carte
    let color = types[array[i].type];
    card.style.backgroundColor = color;
    const txt_card = document.createElement("h5");
    txt_card.innerText = array[i].name;
    const id_card = document.createElement("p");
    id_card.innerText = `ID# ${array[i].id}`;
    const img_card = document.createElement("img");
    img_card.src = array[i].pick;

    card.appendChild(img_card);
    card.appendChild(txt_card);
    card.appendChild(id_card);

    pokeList.appendChild(card);
  }
}
