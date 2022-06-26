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

const backgroundUrl = ["https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/1024/512/Brandeis-University-iStock.jpg?ve=1&tl=1", "images/visitBrandeis.jpg"]
let randomBackground = backgroundUrl[Math.floor(Math.random() * backgroundUrl.length)]
let backgroundYarray = ["top", "center", "bottom"]
let randomYposition = String(backgroundYarray[Math.floor(Math.random() * backgroundYarray.length)])
let backgroundXarray = ["left", "center", "right"]
let randomXposition = String(backgroundXarray[Math.floor(Math.random() * backgroundXarray.length)])

const backgroundImg = document.body
backgroundImg.style.background = `url(${randomBackground})`
backgroundImg.style.backgroundSize = "cover"
backgroundImg.style.backgroundPosition = `${randomYposition} ${randomXposition}`;

// let pan = function (startX, startY) {
//     if (startX == "top" && )
// }