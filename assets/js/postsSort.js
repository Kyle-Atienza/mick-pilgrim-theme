const sortSelect = document.querySelector(".review-posts__sort");
const postGrid = document.querySelector(".review-posts-items");

if (sortSelect && postGrid) {
    const sortPosts = (sort) => {
        const posts = Array.from(postGrid.querySelectorAll(".review-post"));

        posts.sort((a, b) => {
            switch (sort) {
                case "latest":
                    return (
                        new Date(b.dataset.publishedAt) -
                        new Date(a.dataset.publishedAt)
                    );

                case "oldest":
                    return (
                        new Date(a.dataset.publishedAt) -
                        new Date(b.dataset.publishedAt)
                    );

                case "rating": {
                    const ratingA = Number(a.dataset.ratingAt || 0);
                    const ratingB = Number(b.dataset.ratingAt || 0);

                    return ratingB - ratingA;
                }

                case "title-asc":
                    return a.dataset.title.localeCompare(
                        b.dataset.title,
                        undefined,
                        { sensitivity: "base" },
                    );

                case "title-desc":
                    return b.dataset.title.localeCompare(
                        a.dataset.title,
                        undefined,
                        { sensitivity: "base" },
                    );

                default:
                    return 0;
            }
        });

        posts.forEach((post) => {
            postGrid.appendChild(post);
        });
    };

    sortSelect.addEventListener("change", (event) => {
        sortPosts(event.target.value);
    });
}
