const navLinks = [...document.querySelectorAll(".gh-head-menu a")];

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
