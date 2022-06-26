const randomBackGroundPosition = true

const othersButton = document.querySelector(".others")
const hiddenContainer = document.querySelector(".hiddenContainer")
othersButton.addEventListener("click", () => {
    let state = hiddenContainer.style.display
    if (state === "none") {
        hiddenContainer.style.display = "flex";
    }
})

document.addEventListener('mouseup', function (e) {
    if (!hiddenContainer.contains(e.target)) {
        hiddenContainer.style.display = 'none';
    }
});

//random background in random position 
// TODO implement panning of image
const backgroundUrl = ["https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/1024/512/Brandeis-University-iStock.jpg?ve=1&tl=1", "images/visitBrandeis.jpg", "https://www.brandeis.edu/science/images/ssc-21.jpg", "https://www.usnews.com/dims4/USNEWS/bb8e5c8/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F2a%2Fa463251ce974ebae64dd9b13f6484b%2F_MG_9777.jpg", "https://www.brandeis.edu/admissions/visit/images/mandel.jpg"]
let randomBackground = backgroundUrl[Math.floor(Math.random() * backgroundUrl.length)]

const backgroundImg = document.body
let backgroundYarray = ["top", "center", "bottom"]
let backgroundXarray = ["left", "center", "right"]

if (randomBackGroundPosition) {
    let randomYposition = String(backgroundYarray[Math.floor(Math.random() * backgroundYarray.length)])
    let randomXposition = String(backgroundXarray[Math.floor(Math.random() * backgroundXarray.length)])
    backgroundImg.style.backgroundPosition = `${randomYposition} ${randomXposition}`;
} else {
    backgroundImg.style.backgroundPosition = "center center";
    console.log("uh");
}

backgroundImg.style.background = `url(${randomBackground})`
backgroundImg.style.backgroundSize = "cover"

// let pan = function (startX, startY) {
//     if (startX == "top" && )
// }