const mpAdminSection = document.querySelector(".admin .quick-mick-pick");
const mpForm = mpAdminSection.querySelector(".quick-mick-pick-form");
const mpLoadHtml = mpForm.querySelector("#load-html");
const mpHasVideo = mpForm.querySelector("#has-video");
const mpImageInput = mpForm.querySelector("#image");
const mpVideoInput = mpForm.querySelector("#video");
const mpVideoInputLabel = mpForm.querySelector("label[for='video']");
const mpBodyInput = mpForm.querySelector("#body");
const mpInstagramInput = mpForm.querySelector("#instagram");
const mpTiktokInput = mpForm.querySelector("#tiktok");
const mpGenerateButton = mpAdminSection.querySelector(
    ".quick-mick-pick-generate-btn",
);
const mpGeneratedCode = mpAdminSection.querySelector("#generated-code");
const mpCopyButton = mpAdminSection.querySelector("#copy-code");
const mpPreview = mpAdminSection.querySelector(
    ".quick-mick-pick-preview__inner",
);

function bodyContent(transformedBody, instagram, tiktok) {
    return `<div class="quick-mick-pick__content">
                <div class="quick-mick-pick__body">
                    ${transformedBody}
                </div>

                <div class="quick-mick-pick-socials">
                    <span>SHARE THIS ARTICLE:</span>
                    <div class="quick-mick-pick-socials__links">
                        <a class="quick-mick-pick-social-link" href="${instagram || "#"}">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="47"
                                height="47"
                                viewBox="0 0 47 47"
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
                                    d="M13.434,0C9.784,0,9.329.017,7.9.081A9.906,9.906,0,0,0,4.635.705a6.579,6.579,0,0,0-2.38,1.549A6.555,6.555,0,0,0,.705,4.635,9.877,9.877,0,0,0,.081,7.9C.013,9.329,0,9.784,0,13.434s.017,4.105.081,5.538a9.912,9.912,0,0,0,.625,3.261,6.588,6.588,0,0,0,1.549,2.38,6.569,6.569,0,0,0,2.38,1.549,9.918,9.918,0,0,0,3.261.625c1.433.067,1.889.081,5.538.081s4.105-.017,5.538-.081a9.941,9.941,0,0,0,3.261-.625,6.865,6.865,0,0,0,3.929-3.929,9.912,9.912,0,0,0,.625-3.261c.067-1.433.081-1.889.081-5.538S26.85,9.329,26.787,7.9a9.935,9.935,0,0,0-.625-3.261,6.593,6.593,0,0,0-1.549-2.38A6.545,6.545,0,0,0,22.233.705,9.883,9.883,0,0,0,18.972.081C17.539.013,17.083,0,13.434,0Zm0,2.418c3.586,0,4.013.018,5.429.079a7.4,7.4,0,0,1,2.493.465,4.421,4.421,0,0,1,2.55,2.549A7.417,7.417,0,0,1,24.369,8c.064,1.417.078,1.843.078,5.429s-.017,4.013-.083,5.429a7.56,7.56,0,0,1-.471,2.493A4.265,4.265,0,0,1,22.886,22.9a4.191,4.191,0,0,1-1.545,1,7.471,7.471,0,0,1-2.5.462c-1.426.064-1.846.078-5.439.078s-4.014-.017-5.439-.083a7.617,7.617,0,0,1-2.5-.471,4.16,4.16,0,0,1-1.544-1.006,4.079,4.079,0,0,1-1.008-1.545,7.624,7.624,0,0,1-.47-2.5c-.05-1.411-.068-1.846-.068-5.423s.018-4.014.068-5.442a7.615,7.615,0,0,1,.47-2.5A3.982,3.982,0,0,1,3.914,3.928,3.973,3.973,0,0,1,5.457,2.923a7.435,7.435,0,0,1,2.486-.471c1.427-.05,1.847-.067,5.439-.067l.05.034Zm0,4.117a6.9,6.9,0,1,0,6.9,6.9A6.9,6.9,0,0,0,13.434,6.535Zm0,11.376a4.478,4.478,0,1,1,4.478-4.478A4.477,4.477,0,0,1,13.434,17.911ZM22.217,6.263A1.612,1.612,0,1,1,20.6,4.653,1.613,1.613,0,0,1,22.217,6.263Z"
                                    transform="translate(9.702 10.41)"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a class="quick-mick-pick-social-link" href="${tiktok || "#"}">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="47"
                                height="47"
                                viewBox="0 0 47 47"
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
                                    id="Icon_simple-tiktok"
                                    data-name="Icon simple-tiktok"
                                    d="M14.628.022C16.094,0,17.55.011,19,0a6.973,6.973,0,0,0,1.959,4.668,7.9,7.9,0,0,0,4.747,2v4.511a11.982,11.982,0,0,1-4.7-1.086A13.831,13.831,0,0,1,19.2,9.056c-.011,3.269.011,6.538-.022,9.8a8.551,8.551,0,0,1-1.511,4.411,8.34,8.34,0,0,1-6.616,3.593A8.163,8.163,0,0,1,6.478,25.7a8.442,8.442,0,0,1-4.086-6.392c-.022-.56-.034-1.119-.011-1.668a8.428,8.428,0,0,1,9.773-7.478c.022,1.657-.045,3.314-.045,4.97a3.841,3.841,0,0,0-4.9,2.373,4.441,4.441,0,0,0-.157,1.8,3.81,3.81,0,0,0,3.918,3.213,3.761,3.761,0,0,0,3.1-1.8,2.583,2.583,0,0,0,.459-1.187c.112-2,.067-4,.078-6,.011-4.511-.011-9.012.022-13.512Z"
                                    transform="translate(9.572 10.41)"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <p class="quick-mick-pick-message">Follow <a>@mick.pilgrim</a> for more film reviews and recommendations</p>
            </div>`;
}

function getImageTemplate(image, transformedBody, instagram, tiktok) {
    return `<div class="quick-mick-pick">
            <h3 class="quick-mick-pick__title">
                Quick Mick Pick
            </h3>
            <div class="quick-mick-pick__media">
                <img src="${image}" class="kg-image" alt="Mick Pick Image">
            </div>
            ${bodyContent(transformedBody, instagram, tiktok)}
        </div>`;
}

function getVideoTemplate(image, video, transformedBody, instagram, tiktok) {
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
            ${bodyContent(transformedBody, instagram, tiktok)}
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

    // Social links
    const instagram = doc.querySelector(
        ".quick-mick-pick-social-link:nth-of-type(1)",
    );
    const tiktok = doc.querySelector(
        ".quick-mick-pick-social-link:nth-of-type(2)",
    );

    const instagramLink = instagram?.getAttribute("href");
    const tiktokLink = tiktok?.getAttribute("href");

    console.log(instagram, tiktok);

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
    mpInstagramInput.value = instagramLink;
    mpTiktokInput.value = tiktokLink;
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
    const instagram = mpInstagramInput.value.trim();
    const tiktok = mpTiktokInput.value.trim();
    const transformedBody = body
        .split("\n")
        .filter((b) => b)
        .map((b) => `<p>${b}</p>`)
        .join("");

    let html;

    if (mpHasVideo.checked) {
        html = getVideoTemplate(
            image,
            video,
            transformedBody,
            instagram,
            tiktok,
        );
    } else {
        html = getImageTemplate(image, transformedBody, instagram, tiktok);
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
