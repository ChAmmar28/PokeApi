let AUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let container = document.querySelector(".container");

const fetching = async (url) => {
  try {
    const response = await fetch(url, { method: "GET" });
    let data = await response.json();
    console.log(data);
  } catch (error) {}
};

const createPokemonCard = () => {
  const fetchingRes = fetching(AUrl);

  let wrapper = document.createElement("div");
  let image = document.createElement("img");
  let textContainer = document.createElement("div");
  let headline = document.createElement("p");
  let shortDescription = document.createElement("p");

  wrapper.className = "wrapper";
  image.className = "cardImage";
  textContainer.className = "textContainer";
  headline.className = "headline";
  shortDescription.className = "shortDescription";

  console.log(fetchingRes["result"]);

  textContainer.append(headline);
  textContainer.append(shortDescription);

  wrapper.append(image);
  wrapper.append(textContainer);

  container.append(wrapper);
};

createPokemonCard();
