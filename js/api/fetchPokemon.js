import { fetchAllPokemon } from "./fetchAllPokemon.js";

export function fetchPokemon(allPokemonsArray, finalPokemonsArray) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        fetchAllPokemon(pokemon, allPokemonsArray, finalPokemonsArray);
      });
    });
}
