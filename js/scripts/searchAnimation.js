const searchInput = document.querySelector(".search-pokemon input");

export function searchAnimation() {
  searchInput.addEventListener("input", (e) => {
    // on vas chercher un evenement 'e' dans le target qui et searchInput

    if (e.target.value !== "") {
      // on vient rajouter la class au parent de e.target
      e.target.parentNode.classList.add("activ-input");
    } else {
      e.target.parentNode.classList.remove("activ-input");
    }
  });
}
