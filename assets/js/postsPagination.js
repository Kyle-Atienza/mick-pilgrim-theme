const postsList = document.querySelector(".posts");
const itemsPerPage = postsList.dataset.limit || 6;
const postCards = Array.from(document.querySelectorAll(".post-card"));
const paginationList = document.querySelector(".posts-pagination ul");

let currentPage = 1;

function createIconButton(svgMarkup, onClick, disabled = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = disabled;
    button.innerHTML = svgMarkup;
    button.addEventListener("click", onClick);
    return button;
}

function renderPagination() {
    if (!paginationList || !postCards.length) return;

    const totalPages = Math.ceil(postCards.length / itemsPerPage);
    paginationList.innerHTML = "";

    const firstIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"></path>
      </svg>
    `;

    const prevIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"></path>
      </svg>
    `;

    const nextIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" fill="currentColor"></path>
      </svg>
    `;

    const lastIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"></path>
      </svg>
    `;

    const firstItem = document.createElement("li");
    firstItem.appendChild(
        createIconButton(
            firstIcon,
            () => {
                if (currentPage !== 1) {
                    currentPage = 1;
                    renderPage();
                }
            },
            currentPage === 1,
        ),
    );
    paginationList.appendChild(firstItem);

    const prevItem = document.createElement("li");
    prevItem.appendChild(
        createIconButton(
            prevIcon,
            () => {
                if (currentPage > 1) {
                    currentPage -= 1;
                    renderPage();
                }
            },
            currentPage === 1,
        ),
    );
    paginationList.appendChild(prevItem);

    for (let page = 1; page <= totalPages; page += 1) {
        const item = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = page;
        button.classList.toggle("is-active", page === currentPage);
        button.addEventListener("click", () => {
            currentPage = page;
            renderPage();
        });
        item.appendChild(button);
        paginationList.appendChild(item);
    }

    const nextItem = document.createElement("li");
    nextItem.appendChild(
        createIconButton(
            nextIcon,
            () => {
                if (currentPage < totalPages) {
                    currentPage += 1;
                    renderPage();
                }
            },
            currentPage === totalPages,
        ),
    );
    paginationList.appendChild(nextItem);

    const lastItem = document.createElement("li");
    lastItem.appendChild(
        createIconButton(
            lastIcon,
            () => {
                if (currentPage !== totalPages) {
                    currentPage = totalPages;
                    renderPage();
                }
            },
            currentPage === totalPages,
        ),
    );
    paginationList.appendChild(lastItem);
}

function renderPage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    postCards.forEach((post, index) => {
        const show = index >= startIndex && index < endIndex;
        post.style.display = show ? "" : "none";
    });

    renderPagination();
}

renderPage();
