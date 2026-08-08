const mpAdminSection = document.querySelector(".mick-pick-generator");
const mpForm = mpAdminSection.querySelector("#mick-pick-generator-form");
const mpImageInput = mpForm.querySelector("#image");
const mpImageAltNameInput = mpForm.querySelector("#image-alt-name");
const mpBodyInput = mpForm.querySelector("#body");
const mpGeneratedCode = mpAdminSection.querySelector("#generated-code");
const mpCopyButton = mpAdminSection.querySelector("#copy-code");

console.log(mpForm);

mpForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const image = mpImageInput.value.trim();
    const imageAltName = mpImageAltNameInput.value.trim();
    const body = mpBodyInput.value;
    const transformedBody = body
        .split("\n")
        .filter((b) => b)
        .map((b) => `<p>${b}</p>`)
        .join("");

    console.log(
        body
            .split("\n")
            .filter((b) => b)
            .map((b) => `<p>${b}</p>`)
            .join(""),
    );

    const html = `<div class="mick-pick">
        <h3 class="mick-pick__title">
            Quick Mick Pick
        </h3>
        <div class="mick-pick__image">
            <img src="${image}" class="kg-image" alt="${imageAltName}">
        </div>
        <div class="mick-pick__content">
            <div class="mick-pick__body">
                ${transformedBody}
            </div>

            <div class="mick-pick__share">
                <span>SHARE THIS REVIEW:</span>
                <div class="mick-pick-share__links">
                    <div class="mick-pick-share-link">

                    </div>
                    <div class="mick-pick-share-link">
                        
                    </div>
                </div>
            </div>
            <p class="mick-pick__message">Follow <a>@mick.pilgrim</a> for more film reviews and recommendations</p>
        </div>
    </div>`;

    mpGeneratedCode.textContent = html;
    mpCopyButton.disabled = false;
});

mpCopyButton?.addEventListener("click", async () => {
    const code = mpGeneratedCode.textContent;

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
