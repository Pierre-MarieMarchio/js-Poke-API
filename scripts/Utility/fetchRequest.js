let allPokemons = [];

export function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1281")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.results.forEach((pokemon) => {
        fetchPokemonAll(pokemon);
      });
      console.log(allPokemons);
    });
}

function fetchPokemonAll(pokemon) {
  let pokemonFull = {};
  let url = pokemon.url;
  let name = pokemon.name;

  fetch(url)
    .then((response) => response.json())
    .then((pokeData) => {
      // console.log(pokeData);

      pokemonFull.pick = pokeData.sprites.front_default;
      pokemonFull.name = pokeData.name;
      pokemonFull.type = pokeData.types[0].type.name;
      allPokemons.push(pokemonFull);
    });
}
