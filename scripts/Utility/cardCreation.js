
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

export function createCard(array) {
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
