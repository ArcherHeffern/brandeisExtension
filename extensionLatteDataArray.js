//grab each semester
const tablesAndName = document.getElementsByClassName("collapsibleregion block-my-courses-collapsible-region")

const allSemesterDataArray = []
for (let i = 0; i < tablesAndName.length; i++) {
    let semesterSectionHTML = tablesAndName[i]

    //select semester name
    let semester = semesterSectionHTML.querySelector(".collapsibleregioncaption a").textContent
    //select all course names
    let classes = semesterSectionHTML.querySelectorAll(".c0 a")
    // let classesUrl = semesterSectionHTML.querySelectorAll(".c0 a")
    //select all course instructors
    let instructors = semesterSectionHTML.querySelectorAll(".c1")
    //select all course start dates
    let courseStartDate = semesterSectionHTML.querySelectorAll(".c2")

    //add all data to a single array
    let semesterData = [semester]
    for (let i = 0; i < classes.length; i++) {
        let classData = []
        classData.push(classes[i].textContent)
        classData.push(instructors[i].textContent)
        classData.push(courseStartDate[i].textContent)
        semesterData.push(classData)
    }
    allSemesterDataArray.push(semesterData)
}
console.log(allSemesterDataArray);