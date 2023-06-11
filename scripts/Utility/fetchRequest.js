import { createCard } from "./cardCreation.js";

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
