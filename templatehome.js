const othersButton = document.querySelector(".others")
const hiddenContainer = document.querySelector(".hiddenContainer")
othersButton.addEventListener("click", () => {
    let state = hiddenContainer.style.display
    if (state === "none") {
        hiddenContainer.style.display = "block";
    }
})

document.addEventListener('mouseup', function (e) {
    if (!hiddenContainer.contains(e.target)) {
        hiddenContainer.style.display = 'none';
    }
});