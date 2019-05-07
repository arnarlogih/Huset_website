const baseLink = 'http://kea.sigurdarson.is/wp-huset/wp-json/wp/v2/concert/';
const params = new URLSearchParams(window.location.search);
const eventID = params.get('id');

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvent);

function showEvent(data) {
    console.log(data);
    document.querySelector("div img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    document.querySelector("section h1").textContent = data.band_name;
    //document.querySelector('section .eventDetailsType').textContent = data.event_type;
    //document.querySelector('section .eventDetailsDate').textContent = data.date_and_time;
    document.querySelector('section .eventDetailsDescription').textContent = data.band_description;
}