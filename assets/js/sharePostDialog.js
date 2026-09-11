const sharePostDialog = document.querySelector(".share-post-dialog");
const sharePostDialogInput = sharePostDialog.querySelector("input");
const sharePostDialogComponents = {
    close: sharePostDialog.querySelector(".share-post-dialog__close-button"),
    copy: sharePostDialog.querySelector(".share-post-dialog__copy-link-icon"),
    linkCopied: sharePostDialog.querySelector(
        ".share-post-dialog__link-copied",
    ),
};
const { close, copy, linkCopied } = sharePostDialogComponents;

sharePostDialogInput.value = window.location.href;

let copyTimeout;

copy?.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);

    linkCopied.hidden = false;

    clearTimeout(copyTimeout);

    copyTimeout = setTimeout(() => {
        linkCopied.hidden = true;
    }, 3000);
});
