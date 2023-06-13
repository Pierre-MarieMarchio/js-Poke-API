import { fetchPokemon } from "./api/fetchPokemon.js";
import { searchAnimation } from "./scripts/searchAnimation.js";
import { scroll } from "./scripts/scroll.js";
import { searchPokemon } from "./scripts/searchPokemon.js";

var allPokemonsArray = [];
var finalPokemonsArray = [];

fetchPokemon(allPokemonsArray, finalPokemonsArray);
scroll(allPokemonsArray);
searchAnimation();
searchPokemon(allPokemonsArray);
