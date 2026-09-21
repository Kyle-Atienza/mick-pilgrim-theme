const navLinks = [...document.querySelectorAll(".gh-head-menu a")];
const headerMenu = document.querySelector(".gh-head-menu");
let previousScrollY = window.scrollY;

const updateActiveNav = () => {
    const currentUrl = new URL(location.href);

    navLinks.forEach((link) => {
        const linkUrl = new URL(link.href, location.origin);

        link.dataset.active = false;

        // Different page
        if (linkUrl.pathname !== currentUrl.pathname) {
            return;
        }

        // Exact jump link match
        if (linkUrl.hash && linkUrl.hash === currentUrl.hash) {
            link.dataset.active = true;
            return;
        }

        // Base page link — only active if there is no hash
        if (!linkUrl.hash && !currentUrl.hash) {
            link.dataset.active = true;
        }
    });
};

updateActiveNav();

window.addEventListener("hashchange", updateActiveNav);

window.addEventListener(
    "scroll",
    () => {
        const currentScrollY = window.scrollY;

        if (document.body.classList.contains("gh-head-open")) {
            headerMenu.classList.remove("is-hidden");
        } else if (currentScrollY > previousScrollY && currentScrollY > 20) {
            headerMenu.classList.add("is-hidden");
        } else if (currentScrollY < previousScrollY) {
            headerMenu.classList.remove("is-hidden");
        }

        previousScrollY = currentScrollY;
    },
    { passive: true },
);
