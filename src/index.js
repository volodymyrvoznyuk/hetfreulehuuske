import * as AdaptiveCards from "adaptivecards";
require('./mystyles.scss');

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';


const el = document.getElementById("carousel");
for (var i = 21; i < 99; i++) {
    const div = document.createElement("div");
    div.classList.add("card-image");
    div.style = "padding: 20px; width: 700px; margin: auto;";
    const figure = document.createElement("figure");
    figure.classList.add("image");
    figure.classList.add("is-256x256");
    const img = document.createElement("img");
    img.src = "./images/" + i + ".jpg";
    figure.append(img);
    div.append(figure);
    el.append(div);
}

bulmaCarousel.attach('#carousel', {
    slidesToScroll: 1,
    slidesToShow: 1
});
