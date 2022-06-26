const tables = document.getElementsByClassName('generaltable')
const tablesandName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")
let tablesArray = []
for (let i = 0; i < tables.length; i++) {
    console.log(tables[i])
    tablesArray.push(tables[i].innerHTML)
}

for (let i = 0; i < tablesandName.length; i++) {
    console.log(tablesandName[i])
}

//delete all page data
Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function (element) {
    try {
        element.parentNode.removeChild(element);
    } catch (err) { }
});

document.body.innerHTML = '';

//set page data

// document.body.append(tables[0])
console.log(tablesArray[0]);


for (let i = 0; i < tablesArray.length; i++) {
    document.body.innerHTML += tablesArray[i] + "<br><br>"
}