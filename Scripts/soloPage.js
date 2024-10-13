import { fetching } from "./fetching.js";

const params = new URLSearchParams(window.location.search);
const url = params.get("url");

let data = await fetching();
