import moment from "moment";
import "./bootstrap/js/jquery-3.5.1.slim.min.js";
import "./bootstrap/js/bootstrap.min.js";
import createCard from "./CreateCard";
import DatePicker from "./DatePicker";

import "./sass/main.scss";

const search = document.querySelector("[data-id='search-date']");
const compare = new DatePicker();

var events;

/**
 * lists all cards
 */
async function getEvents() {
  let res = await fetch("http://localhost:8080/sample-data.json");
  let resInJson = await res.json();

  events = resInJson.events;
  events.map((event) => createCard(event));
}

document.addEventListener("DOMContentLoaded", () => getEvents());
/**
 * filters cards by start and end date
 */

async function filterEvents(date) {
  let res = await fetch("http://localhost:8080/sample-data.json");
  let resInJson = await res.json();

  let filtered = resInJson.events.filter(
    (event) =>
      date.isSameOrAfter(compare.formatDateToCompare(event.start)) &&
      date.isSameOrBefore(compare.formatDateToCompare(event.end))
  );

  filtered.map((event) => createCard(event));
}

/**
 * removes all cards
 */
function eraseCardsToFilter() {
  let cards = document.querySelectorAll("[data-id='card']");
  cards.forEach((card) => card.remove());
}

/**
 * Waits for typing to complete an ajax call using a debounce idea
 */
let time = null;
function debounce(e) {
  clearTimeout(
    time,
    (time = setTimeout(() => {
      eraseCardsToFilter();
      filterEvents(moment(search.value));
    }, 700))
  );
}

search.addEventListener("change", (e) => debounce());
