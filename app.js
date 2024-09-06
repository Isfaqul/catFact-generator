const button = document.querySelector("#btn");

button.addEventListener("click", displayFact);

function displayFact() {
  let catFact = fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((factObj) => {
      const factEl = document.querySelector("#fact");
      // replace cat with mekuri
      let fact = factObj.fact;
      fact = fact.replace(/\bcat(s)?\b|\bfeline(s)?\b/gi, "Mekuri");

      factEl.textContent = fact;
      displayCatImg();
    });
}

function displayCatImg() {
  let catImage = fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((response) => {
      const factContainer = document.querySelector("#fact");
      const imgEl = document.createElement("img");
      imgEl.src = response[0].url;
      imgEl.alt = "A cat image";
      imgEl.classList.add("cat-img");

      factContainer.append(imgEl);
    });
}
