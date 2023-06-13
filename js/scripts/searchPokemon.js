import { addPokemon } from "./addPokemon.js";

const searchInput = document.querySelector(".search-pokemon input");

let index = 21;

export function searchPokemon(allPokemonsArray) {
  searchInput.addEventListener("keyup", function () {
    if (index < 151) {
      addPokemon(130, allPokemonsArray);
    }

    let filter, allLi, titleValue, allTitle;

    filter = searchInput.value.toUpperCase();
    allLi = document.querySelectorAll("li");
    allTitle = document.querySelectorAll("li > h5");

    for (let i = 0; i < allLi.length; i++) {
      titleValue = allTitle[i].innerText;

      if (titleValue.toUpperCase().indexOf(filter) > -1) {
        allLi[i].style.display = "flex";
      } else {
        allLi[i].style.display = "none";
      }
    }
  });
}
