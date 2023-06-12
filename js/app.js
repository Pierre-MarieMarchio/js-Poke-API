// modif
import { fetchPokemon } from "./api/fetchPokemon.js";
import { searchAnimation } from "./scripts/searchAnimation.js";
import { scroll } from "./scripts/scroll.js";

let allPokemonsArray = [];
let finalPokemonsArray = [];

fetchPokemon(allPokemonsArray, finalPokemonsArray);
scroll(allPokemonsArray);
searchAnimation();
