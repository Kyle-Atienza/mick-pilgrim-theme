const shareUrl = window.location.href;
const socialShareLinks = document.querySelectorAll(".social-share-link");
const socialShareDialog = document.querySelector(".social-share-dialog");

// socialShareLinks.forEach((link) => {
//     link.addEventListener("click", async (event) => {
//         event.preventDefault();

//         if (navigator.share) {
//             await navigator.share({
//                 title: document.title,
//                 url: shareUrl,
//             });
//         }
//     });
// });
