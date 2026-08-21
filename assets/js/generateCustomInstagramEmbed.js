const urlInput = document.getElementById("instgram-embed-url");
const embedDisplay = document.querySelector(".instagram-embed-display");

console.log(urlInput);
console.log(embedDisplay);

urlInput.addEventListener("input", (e) => {
    embedDisplay.innerHTML = e.target.value;

    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});
