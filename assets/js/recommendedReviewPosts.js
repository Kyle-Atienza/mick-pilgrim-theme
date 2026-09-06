const container = document.querySelector(".recommended-review-posts");

const recommendedReviewPosts = [...container.querySelectorAll(".review-post")];

const currentPostId = container.dataset.currentPostId;

const currentPostIndex = recommendedReviewPosts.findIndex(
    (post) => post.dataset.postId === currentPostId,
);

const getOffsetIndex = (index, offset, arr) => (index + offset) % arr.length;

if (currentPostIndex !== -1) {
    const nextIndexes = [1, 2, 3].map((offset) =>
        getOffsetIndex(currentPostIndex, offset, recommendedReviewPosts),
    );

    recommendedReviewPosts.forEach((post, index) => {
        post.hidden = !nextIndexes.includes(index);
    });
}
