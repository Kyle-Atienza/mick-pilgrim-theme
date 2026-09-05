const mpAdminSection = document.querySelector(".admin .quick-mick-pick");
const mpForm = mpAdminSection.querySelector(".quick-mick-pick-form");
const mpLoadHtml = mpForm.querySelector("#load-html");
const mpHasVideo = mpForm.querySelector("#has-video");
const mpImageInput = mpForm.querySelector("#image");
const mpVideoInput = mpForm.querySelector("#video");
const mpVideoInputLabel = mpForm.querySelector("label[for='video']");
const mpBodyInput = mpForm.querySelector("#body");
const mpGenerateButton = mpAdminSection.querySelector(
    ".quick-mick-pick-generate-btn",
);
const mpGeneratedCode = mpAdminSection.querySelector("#generated-code");
const mpCopyButton = mpAdminSection.querySelector("#copy-code");
const mpPreview = mpAdminSection.querySelector(
    ".quick-mick-pick-preview__inner",
);

function bodyContent(transformedBody) {
    return `<div class="quick-mick-pick__content">
                <div class="quick-mick-pick__body">
                    ${transformedBody}
                </div>

                <div class="quick-mick-pick-socials">
                    <span>SHARE THIS ARTICLE:</span>
                    <div class="quick-mick-pick-socials__links">
                        <button class="quick-mick-pick-social-link social-share-link" commandfor="share-post-dialog" command="show-modal">
                            <svg
                                width="47"
                                height="47"
                                viewBox="0 0 47 47"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="23.5"
                                    cy="23.5"
                                    r="22.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                />
                                <path
                                    d="M19.4609 14.0451C19.7434 14.0451 19.9724 14.2743 19.9724 14.5571C19.9724 14.7794 19.8286 14.9752 19.6194 15.0501C19.1 15.2361 18.5968 15.4597 18.1196 15.7293C18.0876 15.7474 18.0559 15.7655 18.0243 15.7836C17.6084 16.0225 17.1418 16.1658 16.6623 16.1658H15.1746C14.0391 16.1658 13.1185 17.0873 13.1185 18.224V23.926C13.1175 24.0198 13.1175 24.1144 13.1185 24.2097V31.8211C13.1185 32.9578 14.0391 33.8794 15.1746 33.8794H28.7578C29.8934 33.8794 30.814 32.9578 30.814 31.8211V28.2812C30.814 28.0071 30.9963 27.7713 31.2416 27.6495C31.5163 27.5132 31.779 27.3276 32.0197 27.0886C32.3577 26.7529 32.9325 26.9926 32.9325 27.4692V31.8211C32.9325 34.129 31.0634 36 28.7578 36H15.1746C12.8691 36 11 34.129 11 31.8211V18.224C11 15.9161 12.8691 14.0451 15.1746 14.0451H19.4609Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M28.9603 13C28.9603 12.1128 30.0301 11.6667 30.6593 12.2914L36.7052 18.2952C37.0983 18.6856 37.0983 19.3218 36.7052 19.7122L30.6593 25.7159C30.0301 26.3407 28.9603 25.8946 28.9603 25.0074V22.091C25.3991 22.0886 22.5162 21.8187 20.0658 23.7127C17.6046 25.6151 18.2588 30.293 18.4769 31.135C18.6846 31.9371 18.0517 32.5071 17.4177 31.6963C15.8662 29.7118 15.0189 26.5195 15.05 23.931C15.0812 21.3426 15.9223 19.1908 19.0689 17.4132C21.5753 15.9972 25.3604 16.0097 28.9603 16.0098V13Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <p class="quick-mick-pick-message">Follow <a>@mick.pilgrim</a> for more film reviews and recommendations</p>
            </div>`;
}

function getImageTemplate(image, transformedBody) {
    return `<div class="quick-mick-pick">
            <h3 class="quick-mick-pick__title">
                Quick Mick Pick
            </h3>
            <div class="quick-mick-pick__media">
                <img src="${image}" class="kg-image" alt="Mick Pick Image">
            </div>
            ${bodyContent(transformedBody)}
        </div>`;
}

function getVideoTemplate(image, video, transformedBody) {
    return `<div class="quick-mick-pick">
            <h3 class="quick-mick-pick__title">
                Quick Mick Pick
            </h3>
            <div class="quick-mick-pick__media">
                <video 
                    src="${video}" 
                    poster="${image}" 
                    preload="metadata" 
                ></video>
                <div class="quick-mick-pick__video-controls">
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            fill="currentColor"
                            d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
                        />
                    </svg>
                    <svg
                        class="pause-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                    >
                        <path
                            fill="currentColor"
                            d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"
                        />
                    </svg>
                </div>
            </div>
            ${bodyContent(transformedBody)}
        </div>`;
}

mpVideoInput.style.display = "none";
mpVideoInputLabel.style.display = "none";
mpVideoInput.required = false;

mpCopyButton.style.display = "none";

mpLoadHtml?.addEventListener("input", (event) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(event.target.value, "text/html");

    // Image
    const image = doc.querySelector(".quick-mick-pick__media img");
    const imageSrc = image?.getAttribute("src");

    // Video
    const video = doc.querySelector(".quick-mick-pick__media video");

    const videoSrc = video?.getAttribute("src");
    const poster = video?.getAttribute("poster");

    // Body text
    const bodyText = [...doc.querySelectorAll(".quick-mick-pick__body p")]
        .map((p) => p.textContent.trim())
        .join("\n");

    if (imageSrc) {
        mpVideoInput.style.display = "none";
        mpVideoInputLabel.style.display = "none";
        mpVideoInput.required = false;

        mpHasVideo.checked = false;
        mpImageInput.value = imageSrc;
    } else if (videoSrc) {
        mpVideoInput.style.display = "block";
        mpVideoInputLabel.style.display = "block";
        mpVideoInput.required = true;

        mpHasVideo.checked = true;
        mpImageInput.value = poster;
        mpVideoInput.value = videoSrc;
    }

    mpBodyInput.value = bodyText;
});

mpHasVideo?.addEventListener("input", (event) => {
    if (event.target.checked) {
        mpVideoInput.style.display = "block";
        mpVideoInputLabel.style.display = "block";
        mpVideoInput.required = true;
    } else {
        mpVideoInput.style.display = "none";
        mpVideoInputLabel.style.display = "none";
        mpVideoInput.required = false;
    }
});

mpGenerateButton?.addEventListener("click", (event) => {
    event.preventDefault();

    const image = mpImageInput.value.trim();
    const video = mpVideoInput.value.trim();
    const body = mpBodyInput.value;
    const transformedBody = body
        .split("\n")
        .filter((b) => b)
        .map((b) => `<p>${b}</p>`)
        .join("");

    let html;

    if (mpHasVideo.checked) {
        html = getVideoTemplate(image, video, transformedBody);
    } else {
        html = getImageTemplate(image, transformedBody);
    }

    mpPreview.innerHTML = html;
    mpCopyButton.style.display = "block";
    mpCopyButton.disabled = false;

    mpCopyButton?.addEventListener("click", async () => {
        const code = html;

        if (!code) {
            return;
        }

        try {
            await navigator.clipboard.writeText(code);

            mpCopyButton.textContent = "Copied!";

            setTimeout(() => {
                mpCopyButton.textContent = "Copy";
            }, 2000);
        } catch (error) {
            console.error("Unable to copy code:", error);

            mpCopyButton.textContent = "Failed";

            setTimeout(() => {
                mpCopyButton.textContent = "Copy";
            }, 2000);
        }
    });
});
