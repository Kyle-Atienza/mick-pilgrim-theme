const embedCards = document.querySelectorAll(".kg-embed-card");

const youtubeEmbedCards = [...embedCards].filter((card) => {
    const iframe = card.querySelector("iframe");

    return iframe?.src.includes("https://www.youtube.com/embed/");
});

youtubeEmbedCards.forEach((card) => {
    const iframe = card.querySelector("iframe");

    const youtubeEmbed = document.createElement("div");
    youtubeEmbed.className = "post-youtube-embed";

    youtubeEmbed.innerHTML = `
        <div class="post-youtube-embed">
            <div class="post-youtube-embed__inner">
                <div class="post-youtube-embed__wrapper">
                    <h4 class="post-youtube-embed__title">Watch the full video</h4>
                    
                    <div class="post-youtube-embed__footer">
                        <div class="post-youtube-embed-socials">
                            <span>SHARE THIS ARTICLE:</span>
                            <div class="post-youtube-embed-socials__links">
                                <button class="post-youtube-embed-socials-link social-share-link" commandfor="share-post-dialog" command="show-modal">
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
                        <p class="post-youtube-embed__message">Follow <a>@mick.pilgrim</a> for more film reviews and recommendations</p>
                    </div>
                </div>
            </div>
        </div> 
    `;

    const wrapper = youtubeEmbed.querySelector(".post-youtube-embed__wrapper");

    const footer = youtubeEmbed.querySelector(".post-youtube-embed__footer");

    // Create the iframe wrapper
    const embedWrapper = document.createElement("div");
    embedWrapper.className = "post-youtube-embed__embed";

    // Move the existing iframe
    embedWrapper.appendChild(iframe);

    // Insert iframe wrapper before footer
    wrapper.insertBefore(embedWrapper, footer);

    // Replace the ORIGINAL .kg-embed-card
    card.replaceWith(youtubeEmbed);
});
