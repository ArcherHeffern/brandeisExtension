// const tables = document.getElementsByClassName('generaltable')
const tablesAndName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")
let tablesAndNameArray = []
for (let i = 0; i < tablesAndName.length; i++) {
    console.log(tablesAndNameArray[i])
    tablesAndNameArray.push(tablesAndName[i].innerHTML)
}
//TODO: parse through tablesAndNameArray and create nested arrays of semesters and classes
//semesters => classes => classData

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



//set page data

// document.body.append(tables[0])
// console.log(tablesAndNameArray[0]);


for (let i = 0; i < tablesAndNameArray.length; i++) {
    document.querySelector(".courseContainer").innerHTML += tablesAndNameArray[i] + "<br><br>"
}