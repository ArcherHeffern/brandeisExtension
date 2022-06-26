const tables = document.getElementsByClassName('generaltable')
const tablesandName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")


for (let i = 0; i < tables.length; i++) {
    console.log(tables[i])
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

document.body.innerHTML = `<h1>Hello world</h1>`