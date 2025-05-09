import { animeListA, animeListB } from "../util/constants.js";

function sortListNames(a, b) {
  a.name.localeCompare(b.name);
}

animeListA.sort(sortListNames);
animeListB.sort(sortListNames);
