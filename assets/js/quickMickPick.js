const quickMickPicks = document.querySelectorAll(
    ".gh-content .quick-mick-pick",
);

quickMickPicks.forEach((pick) => {
    const video = pick.querySelector("video");
    const playIcon = pick.querySelector("svg.play-icon");
    const pauseIcon = pick.querySelector("svg.pause-icon");

    if (!video || !playIcon || !pauseIcon) return;

    pauseIcon.style.display = "none";

    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            pauseIcon.style.display = "none";
            playIcon.style.display = "block";
        } else {
            video.pause();
            pauseIcon.style.display = "block";
            playIcon.style.display = "none";
        }
    });
});
