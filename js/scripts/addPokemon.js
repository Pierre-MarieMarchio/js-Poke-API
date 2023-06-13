import { createCard } from "./createCard.js";

let index = 21;

export function addPokemon(nb, allPokemonsArray) {
  if (index > 151) {
    return;
  }

  const arrayToAdd = allPokemonsArray.slice(index, index + nb);
  createCard(arrayToAdd);
  index += nb;
}

