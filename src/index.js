import "./sass/main.scss";
import "./bootstrap/js/bootstrap.min.js";
import createCard from "./CreateCard";
import { converterTimeStampToData, FormatData } from "./utils";

const search = document.querySelector("[data-id='search-date']");

var events;
var filtered;

function getEvents() {
  fetch("http://localhost:8080/sample-data.json")
    .then((res) => res.json())
    .then((res) => (events = res.events));
}

getEvents();

function filteredEvents(date) {
  console.log(date);
  filtered = fetch("http://localhost:8080/sample-data.json")
    .then((res) => res.json())
    .then((res) =>
      // ainda falta pegar os dias entre o start e o end
      res.events.filter(
        (event) =>
          converterTimeStampToData(event.start) === date ||
          converterTimeStampToData(event.end) === date
      )
    );

  console.log(filtered);
}

let time = null;
function debounce(e) {
  clearTimeout(
    time,
    (time = setTimeout(() => {
      let searchData = FormatData(search.value);
      filteredEvents(searchData);
    }, 500))
  );
}

search.addEventListener("change", (e) => debounce());

document.addEventListener("DOMContentLoaded", () => {
  events.map((event) => createCard(event));
});
