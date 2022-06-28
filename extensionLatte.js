const timeline = document.getElementById("block-timeline-62b8d207039b862b8d206e627716")
const tablesAndName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")

//selects all semester block htmls
let tablesAndNameArray = []
for (let i = 0; i < tablesAndName.length; i++) {
    console.log(tablesAndNameArray[i])
    tablesAndNameArray.push(tablesAndName[i].innerHTML)
}
//TODO: parse through tablesAndNameArray and create nested arrays of semesters and classes
//!But why?
//semesters => classes => classData

const semesterClassClassDataList = []
for (let i = 0; i < tablesAndName.length; i++) {
    let semesterSectionHTML = tablesAndName[i]
    //select semester name
    let semester = semesterSectionHTML.querySelector(".collapsibleregioncaption a").textContent
    //select courses
    // semesterClassClassDataList = push([semester, [courseList]])
}

//delete all page data
Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function (element) {
    try {
        element.parentNode.removeChild(element);
    } catch (err) { }
});

document.body.innerHTML = '';
let courseContainer = document.createElement("div");
courseContainer.className = "courseContainer"
document.body.appendChild(courseContainer)

for (let i = 0; i < tablesAndNameArray.length; i++) {
    document.querySelector(".courseContainer").innerHTML += tablesAndNameArray[i] + "<br><br>"
}