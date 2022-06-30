// const LINK = `"javascript:history.go(-1)" [Go Back]`
const LINK = `https://wd5.myworkday.com/brandeis/d/inst/13102!CK5mGhIKBggDEMenAhIICgYI1A0QkAE~*jdO3odMVMG0~/cacheable-task/14860$30.htmld#backheader=true`
//TODO find out when workday is done loading
//TODO find out how to go back, link does not work
//might be more worth taking element out of flow and positioning absolutely
//check for websocket connection
let outerDiv
let intervalVal
let counter = 0
addEventListener("load", () => {
    intervalVal = setInterval(checkForClass, 100)
})

function checkForClass() {
    outerDiv = document.getElementsByClassName("WIQK WKQK WCUK WOSK WATK WBAB")
    console.log(outerDiv);
    if (outerDiv.length > 0) {
        clearInterval(intervalVal)
        console.log("Yay");
        myMain()
    }
    else if (counter > 100) {
        clearInterval(intervalVal)
    }
}

function myMain() {
    let outerDiv = document.getElementsByClassName("WIQK WKQK WCUK WOSK WATK WBAB")
    outerDiv = Array(outerDiv)
    console.log(outerDiv[0][0])

    let div = document.createElement("span")
    div.innerHTML = `<div><a href=${LINK} id="insertedbackButtonLink">Go back</a></div>`
    //     div.innerHTML = `<div data-automation-id="viewStackBack" class="WK2T">
    // <div
    //   role="button"
    //   data-automation-id="icon"
    //   class="WI3K WH3K WE3T"
    //   title="Previous Page"
    //   aria-label="Previous Page"
    //   tabindex="0"
    //   aria-hidden="false"
    // >
    //   <svg
    //     width="24"
    //     height="24"
    //     class="wd-icon-arrow-left wd-icon"
    //     focusable="false"
    //     role="presentation"
    //     viewBox="0 0 24 24"
    //   >
    //     <g fill-rule="evenodd" class="wd-icon-container">
    //       <path
    //         d="M13.436 5.263a.506.506 0 00-.003-.71l-.7-.701a.495.495 0 00-.71-.003l-7.779 7.777a.498.498 0 00-.144.352.48.48 0 00.144.356l7.778 7.778a.506.506 0 00.71-.003l.701-.7a.495.495 0 00.003-.711l-5.702-5.703H19.36c.273 0 .5-.226.5-.505v-.99a.495.495 0 00-.5-.505H7.704l5.732-5.732z"
    //         class="wd-icon-fill"
    //       ></path>
    //     </g>
    //   </svg>
    // </div>
    // </div>
    // `
    outerDiv[0][0].prepend(div)
}

