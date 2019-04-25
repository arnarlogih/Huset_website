let fetchData = 'http://kea.sigurdarson.is/wp-huset/wp-json/wp/v2/concert?_embed';
const template = document.querySelector('template').content;
const parent = document.querySelector('.event');

function loadData(link) {
    fetch(link)
        .then(e => e.json())
        .then(data => show(data));
}

function show(data) {
    data.forEach(data => {
        //console.log(data._embedded)
        //cloning
        const clone = template.cloneNode(true);
        //Inserting content
        const eventImage = clone.querySelector('article img')
        const eventType = clone.querySelector('article div .eventType')
        const title = clone.querySelector('article div h3');
        const eventDate = clone.querySelector('article div .date')
        const eventPrice = clone.querySelector('article div div p')

        //Event Image
        eventImage.src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
        //Event type
        eventType.textContent = data.event_type;
        //Event title
        title.textContent = data.band_name;
        //Event Date
        eventDate.textContent = data.date_and_time;
        //Event Price
        eventPrice.textContent = data.price;
        //appending it to the main
        parent.appendChild(clone);
    });
}

loadData(fetchData);