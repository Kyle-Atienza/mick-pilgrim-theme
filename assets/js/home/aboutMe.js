const container = document.querySelector(".about-me__inner.new");
const figure = container.querySelector("figure");
const h2 = container.querySelector("h2");

// Wrap figure
const image = document.createElement("div");
image.classList.add("about-me__image");

figure.parentNode.insertBefore(image, figure);
image.appendChild(figure);

// Get subtitle
const subtitle = h2.previousElementSibling;

// Get everything after h2 BEFORE moving anything
const bodyElements = [];

let element = h2.nextElementSibling;

while (element) {
    bodyElements.push(element);
    element = element.nextElementSibling;
}

// Create content wrapper
const content = document.createElement("div");
content.classList.add("about-me__content");

// Create body wrapper
const body = document.createElement("div");
body.classList.add("about-me__body");

// Move subtitle and h2
content.appendChild(subtitle);
content.appendChild(h2);

// Move remaining elements into body
bodyElements.forEach((element) => {
    body.appendChild(element);
});

content.appendChild(body);
container.appendChild(content);
