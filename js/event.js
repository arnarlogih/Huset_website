const baseLink = 'http://kea.sigurdarson.is/wp-huset/wp-json/wp/v2/film/';
const params = new URLSearchParams(window.location.search);
const eventID = params.get('id');

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvent);

function showEvent(data) {
    console.log(data);
    document.querySelector("div img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    document.querySelector("section h1").textContent = data.film_title;
    document.querySelector('section .eventDetailsDate').textContent = 'Date: ' + data.date_and_time;
    document.querySelector('section .eventDetailsDirector').textContent = 'Director: ' + data.director;
    document.querySelector('section .eventDetailsDescription').textContent = data.description;
}

// Event header

let overlay = document.querySelector(".overlay");
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hide");
    headerClass.classList.add("headerMobileOpen");
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
    headerClass.classList.remove("headerMobileOpen");
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
});