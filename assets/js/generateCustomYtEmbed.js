const adminSection = document.querySelector(".custom-youtube-embed");
const form = adminSection.querySelector("#youtube-generator");
const linkInput = adminSection.querySelector("#link");
const generatedCode = adminSection.querySelector("#generated-code");
const copyButton = adminSection.querySelector("#copy-code");

function getYouTubeVideoId(url) {
    try {
        const parsedUrl = new URL(url);

        // Short YouTube URL:
        // https://youtu.be/wqk6Bsmmqks
        if (parsedUrl.hostname === "youtu.be") {
            return parsedUrl.pathname.slice(1);
        }

        // Standard YouTube URL:
        // https://www.youtube.com/watch?v=wqk6Bsmmqks
        if (
            parsedUrl.hostname === "youtube.com" ||
            parsedUrl.hostname === "www.youtube.com"
        ) {
            return parsedUrl.searchParams.get("v");
        }

        return null;
    } catch {
        return null;
    }
}

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const videoUrl = linkInput.value.trim();
    const videoId = getYouTubeVideoId(videoUrl);

    if (!videoId) {
        linkInput.setCustomValidity("Please enter a valid YouTube video link.");

        linkInput.reportValidity();

        return;
    }

    linkInput.setCustomValidity("");

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const html = `<div class="share-youtube">
    <div class="share-youtube__inner">
        <div class="share-youtube__wrapper">
            <h4 class="share-youtube__title">
                Watch the full video
            </h4>

            <iframe
                class="share-youtube__embed"
                src="${embedUrl}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            >
            </iframe>

            <div class="share-youtube__footer">
                <div class="share-youtube-socials">
                    <span>SHARE THIS ARTICLE:</span>

                    <div class="share-youtube-socials__links">
                        <div class="share-youtube-social-link">
                        </div>

                        <div class="share-youtube-social-link">
                        </div>
                    </div>
                </div>

                <p class="share-youtube-message">
                    Follow <a>@mick.pilgrim</a> for more film reviews
                    and recommendations
                </p>
            </div>
        </div>
    </div>
</div>`;

    generatedCode.textContent = html;

    copyButton.disabled = false;
});

copyButton?.addEventListener("click", async () => {
    const code = generatedCode.textContent;

    if (!code) {
        return;
    }

    try {
        await navigator.clipboard.writeText(code);

        copyButton.textContent = "Copied!";

        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    } catch (error) {
        console.error("Unable to copy code:", error);

        copyButton.textContent = "Failed";

        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    }
});
