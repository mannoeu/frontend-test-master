import "./sass/main.scss";
import "./bootstrap/js/bootstrap.min.js";
import { toTimeStampFromDateTime } from "./utils";

const rowContainer = document.querySelector("[data-id='row']");
var events;

function getEvents() {
  fetch("http://localhost:8080/sample-data.json")
    .then((res) => res.json())
    .then((res) => (events = res.events));
}

document.addEventListener("DOMContentLoaded", getEvents());

function createCard(event) {
  // create a container
  let container = document.createElement("div");
  container.classList.add("col-md-6", "col-lg-4");

  // create a card
  let card = document.createElement("div");
  card.classList.add("card", "border-0");

  // create a container image only returns image
  let cardImage;
  let image;

  event.image !== "" &&
    ((cardImage = document.createElement("div")),
    cardImage.classList.add("card-image"),
    (image = document.createElement("img")),
    image.setAttribute("src", event.image),
    image.setAttribute("alt", "Event Image"),
    image.classList.add("card-img-top"),
    cardImage.appendChild(image));

  // create card body
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // create a title
  let title = document.createElement("h6");
  title.innerHTML = event.title;

  // create a description
  let description = document.createElement("p");
  description.classList.add("text-muted", "card-text");
  description.innerHTML = `${event.description} - ${event.venue.name}/${event.venue.city}`;

  let linkEvent = document.createElement("a");
  linkEvent.setAttribute("href", event.link);
  linkEvent.setAttribute("rel", "noopener noreferrer external");
  linkEvent.setAttribute("target", "_blank");
  linkEvent.innerHTML = "See more";

  /* ------------------------ */
  /* END EVENT HEADER */
  /* ------------------------ */

  // create a event info container
  let eventInfo = document.createElement("div");
  eventInfo.classList.add("event-info");

  // create a category
  let category = document.createElement("p");
  category.setAttribute("data-id", "category");
  let textCategory = document.createElement("span");
  category.innerHTML = "Category: ";
  textCategory.innerHTML = event.category;
  category.appendChild(textCategory);

  // create a date start
  let dateStart = document.createElement("p");
  dateStart.setAttribute("data-id", "date-start");
  let textDateStart = document.createElement("span");
  dateStart.innerHTML = "Start: ";
  textDateStart.innerHTML = toTimeStampFromDateTime(event.start);
  dateStart.appendChild(textDateStart);

  // create a date end
  let dateEnd = document.createElement("p");
  dateEnd.setAttribute("data-id", "date-end");
  let textdateEnd = document.createElement("span");
  dateEnd.innerHTML = "End: ";
  textdateEnd.innerHTML = toTimeStampFromDateTime(event.end);
  dateEnd.appendChild(textdateEnd);

  // create a recurrence
  let recurrence = document.createElement("p");
  recurrence.setAttribute("data-id", event.recurrence);
  let textRecurrence = document.createElement("span");
  recurrence.innerHTML = "Recurrence: ";
  textRecurrence.innerHTML = event.recurrence;
  recurrence.appendChild(textRecurrence);

  // create a costs
  let costs = document.createElement("p");
  costs.setAttribute("data-id", "costs");
  let price = document.createElement("span");
  price.innerHTML = event.costs;
  costs.appendChild(price);

  // create an address
  let address = document.createElement("address");
  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-map-marker-alt");
  let addressData = document.createElement("em");
  addressData.innerHTML = `${event.venue?.name}. ${event.venue?.street}, ${event.venue?.city} - ${event.venue?.zip}`;
  address.appendChild(icon);
  address.appendChild(addressData);

  // append elements of event info
  eventInfo.appendChild(category);
  eventInfo.appendChild(dateStart);
  eventInfo.appendChild(dateEnd);
  eventInfo.appendChild(recurrence);
  eventInfo.appendChild(costs);

  /* ------------------------ */
  /* END EVENT INFO ELEMENTS */
  /* ------------------------ */

  // append elements of card body
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(eventInfo);
  cardBody.appendChild(address);
  cardBody.appendChild(linkEvent);

  // append elements of card image only an exists
  cardImage && card.appendChild(cardImage);

  card.appendChild(cardBody);

  // add card an container
  container.appendChild(card);

  /* ------------------------ */
  /* END ALL APPEND ELEMENTS */
  /* ------------------------ */

  rowContainer.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
  events.map((event) => createCard(event));
});
