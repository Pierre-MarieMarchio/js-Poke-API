import { addPokemon } from "./addPokemon.js";

export function scroll(allPokemonsArray) {
  window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 20) {
      addPokemon(6, allPokemonsArray);
    }
  });
}
