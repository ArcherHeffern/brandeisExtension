//TODO: add information button - improve "others" UI - create settings bar - better selection indication

const brandeisSealImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png"
alt = "brandeis University Seal"
const latteUrl = "https://moodle2.brandeis.edu/"
const workdayUrl = "https://wd5.myworkday.com/wday/authgwy/brandeis/login.htmld"
const settingsUrl = "https://identity.brandeis.edu/"
const settingsImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png"

//for each item: Name, Url, Image, Description

const miscList = [
  ["Libary Database", "http://databases.library.brandeis.edu/", "/images/brandeisscholar.png", "Portal to Brandeis's library database"],
  ["Myhousing", "https://brandeis.datacenter.adirondacksolutions.com/BRANDEIS_THDSS_PROD/index.html", "", "Brandeis housing portal"],
  ["WhoCash", "https://get.cbord.com/whocash/", "/images/whocard.png", "Brandeis's GET site, where you can manage your WhoCash, view meal plan balances, and more"],
  ["Campus Calendar", "http://www.brandeis.edu/events/index.html?utm_source=login&utm_campaign=apps", "/images/campus-calendar.png", "Find out when and where cool Brandeis events are happening!"],
  ["HandShake", "https://brandeis.joinhandshake.com/login", "/images/handshake.png", "Student resource for getting jobs, interships, reaching out, and more!"],
  ["OneSearch", "http://search.library.brandeis.edu/", "/images/library.png", "OneSearch provides simple, one-stop searching for all of the library's physical collections as well as many of our online collections. It's also a portal to manage your research and your library account."],
  ["B Connect Community", "https://alumni.brandeis.edu/profile_login", "/images/bconnect.png", "The new B Connect is a powerful platform for Brandeis students and alumni. It enables you to use the trusted and vibrant Brandeis environment to expand your professional and personal networks."],
  ["BUSS", "https://pay.brandeis.edu/", "/images/buss.png", "Not loading"],
  ["Echo360", "https://echo360.org/home", "/images/echo360.png", "Platform for seeing course information, not frequently used by professors"],
  ["Sage", "https://www.brandeis.edu/sage/index.html", "/images/sage.png", "Sage now requires VPN access and is no longer available to students for self-service."],
  ["Financial Aid", "https://netpartner.brandeis.edu/NetPartnerStudent/logon.aspx", "/images/financialaid.png", "Apply for financial aid"],
  ["Marketplace", "https://brandeis.coupahost.com/", "/images/marketplace.png", "Doesn't seem to work?"],
]

const backgroundUrl = ["https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/1024/512/Brandeis-University-iStock.jpg?ve=1&tl=1", "https://www.brandeis.edu/science/images/ssc-21.jpg", "https://www.usnews.com/dims4/USNEWS/bb8e5c8/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F2a%2Fa463251ce974ebae64dd9b13f6484b%2F_MG_9777.jpg", "https://www.brandeis.edu/admissions/visit/images/mandel.jpg"]

const html = `
    <main class="main">
      <div class="logoContainer">
        <img
          class="brandeisSeal"
          src= ${brandeisSealImageUrl}
        />
      </div>
      <div>
        <p class="schoolName">Brandeis University</p>
      </div>
      <div class="dockContainer">
      <ul class="dockUl">
      <li class="dockLi">
        <a
          href= ${latteUrl}
          ><div class="linkName">Latte</div></a
        >
      </li>
      <li class="dockLi">
        <a
          href=${workdayUrl}
          ><div class="linkName">Workday</div></a
        >
      </li>
      <li class="dockLi others">
        <!-- <div class="dockLi others">Other</div> -->
        <p>Others</p>
      </li>
    </ul>
      </div>
    </main>
    <footer>
    <span class="footerItem">
      <input type="button" id="backgroundButton" value="Background">
    </span>
      <span class="footerItem" id="settingsContainer">
        <a href=${settingsUrl}>
          <img src=${settingsImg} alt="Settings" />
        </a>
      </span>
    </footer>

    <div class="hiddenContainer">
      <h1 class="misc">Misc Items</h1>
    </div>
`

//remove all css
Array.prototype.forEach.call(document.querySelectorAll('link[rel=stylesheet]'), function (element) {
  try {
    element.parentNode.removeChild(element);
  } catch (err) { }
});

document.body.innerHTML = '';

document.body.innerHTML = html

//--------------------------------------------------------------------
//Global vars
const othersButton = document.querySelector(".others")
const hiddenContainer = document.querySelector(".hiddenContainer")
const backgroundButton = document.getElementById("backgroundButton")
const backgroundYarray = ["top", "center", "bottom"]
const backgroundXarray = ["left", "center", "right"]

let lastBackground = JSON.parse(localStorage.getItem("lastBackground"))
let background = Boolean(JSON.parse(localStorage.getItem("background")))
let randomBackGroundPosition = true

//background rendering
background ? getRandomBackground(lastBackground, randomBackGroundPosition) : renderBackground(background)

if (!lastBackground) {
  randomBackgroundIndex()
}

function renderBackground(render) {
  if (render) {
    getRandomBackground(randomBackgroundIndex())
  } else {
    document.body.style.background = "white"
  }
}

//index is what index of background url is selected, randombackgroundposition is T/F value if we want a random background position

function getRandomBackground(index, randomBackGroundPosition) {
  localStorage.setItem("lastBackground", JSON.stringify(index))

  if (randomBackGroundPosition) {
    let randomYposition = String(backgroundYarray[Math.floor(Math.random() * backgroundYarray.length)])
    let randomXposition = String(backgroundXarray[Math.floor(Math.random() * backgroundXarray.length)])
    document.body.style.backgroundPosition = `${randomYposition} ${randomXposition}`;
  } else {
    document.body.style.backgroundPosition = "center center";
  }

  document.body.style.background = `url(${backgroundUrl[index]})`
  document.body.style.backgroundSize = "cover"
}

//background button logic

backgroundButton.addEventListener("click", () => {
  background = !background
  localStorage.setItem("background", JSON.stringify(background))
  renderBackground(background)
})

function randomBackgroundIndex() {
  return Math.floor(Math.random() * backgroundUrl.length)
}

//Render misc items

for (i in miscList) {
  element = miscList[i]
  let miscItemHTML = `      
<div class="miscListItem">
<a href="${element[1]}" class="miscListA">
  <div class="miscListImgContainer">
    <img src="${element[2]}" alt="${element[0]}Image" />
  </div>
  <div class="miscListTextContainer">
    <h1>${element[0]}</h1>
    <p>
      ${element[3]}
    </p>
  </div>
</a>
</div>`

  hiddenContainer.innerHTML += miscItemHTML
}

//popup logic 

othersButton.addEventListener("click", () => {
  let state = hiddenContainer.style.display
  if (state === "none") {
    hiddenContainer.style.display = "block";
  }
})

document.addEventListener('mouseup', (e) => {
  if (!hiddenContainer.contains(e.target)) {
    hiddenContainer.style.display = 'none';
  }
});
