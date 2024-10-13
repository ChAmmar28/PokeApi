import { createPokemonCard } from "./createPokeCard.js";
import { fetching } from "./fetching.js";

const baseUrl = "https://pokeapi.co/api/v2/";
const container = document.querySelector(".container");
const pageIndex = document.querySelector(".pageCount");
const next = document.querySelector(".nextBtn");
const back = document.querySelector(".backBtn");
const renderCount = 10;
const pagesData = await fetching(baseUrl + "pokemon?limit=100000&offset=0");
const maxPagesData = Math.ceil(pagesData.count / renderCount);
let currentPage;

if (!localStorage.getItem("page")) {
  localStorage.setItem("page", 0);
}

pageIndex.innerText = +localStorage.getItem("page") + 1;

const render = async () => {
  currentPage = +localStorage.getItem("page");

  toggleButtons(true);

  container.innerHTML = "";

  let mutantUrl =
    baseUrl +
    `pokemon?limit=${renderCount}&offset=${
      renderCount * localStorage.getItem("page")
    }`;
  console.log(mutantUrl);

  const rawData = await fetching(mutantUrl);

  rawData["results"].forEach((item) => {
    createPokemonCard(item, container);
  });

  toggleButtons(false);
};

next.addEventListener("click", () => {
  if (currentPage + 1 < maxPagesData) {
    localStorage.setItem("page", currentPage + 1);
    pageIndex.innerText = currentPage + 2;
    render();
  } else {
    console.log("end");
  }
});

back.addEventListener("click", () => {
  if (currentPage > 0) {
    localStorage.setItem("page", currentPage - 1);
    pageIndex.innerText = currentPage;
    render();
  } else {
    console.log("start");
  }
});

const toggleButtons = (isDisabled) => {
  next.disabled = isDisabled;
  back.disabled = isDisabled;
};

render();
