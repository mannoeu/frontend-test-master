import "./sass/main.scss";
import "./bootstrap/js/bootstrap.min.js";
import { data } from "./data";

const events = data.events;

const rowContainer = document.querySelector("[data-id='row']");

function createCard(event) {
  // create a container
  let container = document.createElement("div");
  container.classList.add("col-md-6", "col-lg-4");

  // create a card
  let card = document.createElement("div");
  card.classList.add("card", "border-0");

  // create a container of image
  let cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  // create a image banner
  let image = document.createElement("img");
  event.image !== "" &&
    (image.setAttribute("src", event.image),
    image.classList.add("card-img-top"));

  // create card body
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // create a title
  let title = document.createElement("h6");
  title.innerHTML = event.title;

  // create a provisory description
  let description = document.createElement("p");
  description.innerHTML = `${event.description} - ${event.venue.name}/${event.venue.city}`;

  // append elements of card body
  cardBody.appendChild(title);
  cardBody.appendChild(description);

  // append elements of card image
  cardImage.appendChild(image);

  // append card elements
  card.appendChild(cardImage);
  card.appendChild(cardBody);

  // add card an container
  container.appendChild(card);

  rowContainer.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
  events.map((event) => createCard(event));
});
