// const tables = document.getElementsByClassName('generaltable')
const tablesAndName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")
let tablesAndNameArray = []
for (let i = 0; i < tablesAndName.length; i++) {
    console.log(tablesAndNameArray[i])
    tablesAndNameArray.push(tablesAndName[i].innerHTML)
}

// for (let i = 0; i < tablesandName.length; i++) {
//     console.log(tablesandName[i])
// }

//delete all page data
Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function (element) {
    try {
        element.parentNode.removeChild(element);
    } catch (err) { }
});

document.body.innerHTML = '';

//set page data

// document.body.append(tables[0])
console.log(tablesAndNameArray[0]);


for (let i = 0; i < tablesAndNameArray.length; i++) {
    document.body.innerHTML += tablesAndNameArray[i] + "<br><br>"
}