const ratingElements = document.querySelectorAll(".post-rating");

console.log(ratingElements);

ratingElements.forEach((ratingElement) => {
    console.log(ratingElement);

    const ratingTag = ratingElement.dataset.rating;

    console.log(ratingTag);

    if (!ratingTag) {
        return;
    }

    const ratingMatch = ratingTag.match(/rating-(\d)/);

    if (!ratingMatch) {
        return;
    }

    const rating = Number(ratingMatch[1]);

    for (let index = 1; index <= 5; index += 1) {
        const star = document.createElement("span");

        star.classList.add("post-rating__star");

        if (index <= rating) {
            star.classList.add("post-rating__star--filled");
        } else {
            star.classList.add("post-rating__star--empty");
        }

        star.textContent = "★";

        ratingElement.appendChild(star);
    }

    ratingElement.setAttribute("aria-label", `${rating} out of 5 stars`);
});
