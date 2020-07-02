import moment from "moment";
import "./bootstrap/js/bootstrap.min.js";
import createCard from "./CreateCard";
import DatePicker from "./DatePicker";

import "./sass/main.scss";

const search = document.querySelector("[data-id='search-date']");
const compare = new DatePicker();

var events, filtered;

function getEvents() {
  fetch("http://localhost:8080/sample-data.json")
    .then((res) => res.json())
    .then((res) => (events = res.events));
}

document.addEventListener("DOMContentLoaded", getEvents());

function filteredEvents(date) {
  console.log(date);
  filtered = fetch("http://localhost:8080/sample-data.json")
    .then((res) => res.json())
    .then((res) =>
      res.events.filter(
        (event) =>
          date.isSameOrAfter(compare.formatDateToCompare(event.start)) &&
          date.isSameOrBefore(compare.formatDateToCompare(event.end))
      )
    )
    .then((filtered) => filtered.map((event) => createCard(event)));
}

let time = null;
function debounce(e) {
  clearTimeout(
    time,
    (time = setTimeout(() => {
      filteredEvents(moment(search.value));
    }, 700))
  );
}

search.addEventListener("change", (e) => debounce());

document.addEventListener("DOMContentLoaded", () => {
  events.map((event) => createCard(event));
});
