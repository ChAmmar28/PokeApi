import { fetching } from "./fetching.js";

export const createPokemonCard = async (data, place) => {
  let link = document.createElement("a");
  let wrapper = document.createElement("div");
  let image = document.createElement("img");
  let headline = document.createElement("p");

  link.className = "link";
  wrapper.className = "wrapper";
  image.className = "cardImage";
  headline.className = "headline";

  let detailData = await fetching(data.url);

  headline.innerText = data.name;

  if (detailData.sprites.other.dream_world.front_default) {
    image.src = detailData.sprites.other.dream_world.front_default;
  } else if (detailData.sprites.front_default) {
    image.src = detailData.sprites.front_default;
  } else {
    image.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
  }

  link.href = `../soloPage.html?url=${data.url}`;

  wrapper.append(image);
  wrapper.append(headline);
  link.append(wrapper);
  place.append(link);
};
