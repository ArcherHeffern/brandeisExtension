//TODO: add information button - improve "others" UI - create settings bar - better selection indication


const brandeisSealImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png"
alt = "brandeis University Seal"
const latteUrl = "https://moodle2.brandeis.edu/"
const workdayUrl = "https://wd5.myworkday.com/wday/authgwy/brandeis/login.htmld"
const settingsUrl = "https://identity.brandeis.edu/"
const settingsImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png"
const libraryDatabaseUrl = "http://databases.library.brandeis.edu/"
const oneSearchUrl = "http://search.library.brandeis.edu/"
const connectCommunityUrl = "https://alumni.brandeis.edu/profile_login"
const handshakeUrl = "https://brandeis.joinhandshake.com/login"
const BUSSUrl = "https://pay.brandeis.edu/"
const echoUrl = "https://echo360.org/home"
const sageUrl = "https://www.brandeis.edu/sage/index.html"
const whoCashUrl = "https://get.cbord.com/whocash/"
const financialAidUrl = "https://netpartner.brandeis.edu/NetPartnerStudent/logon.aspx"
const marketPlaceUrl = "https://brandeis.coupahost.com/"
const campusCalendarUrl = "http://www.brandeis.edu/events/index.html?utm_source=login&utm_campaign=apps"
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
      <span class="misc">Misc</span>
      <ul class="miscUl">
        <li>
          <a href=${libraryDatabaseUrl}>Library Database</a>
        </li>
        <li><a href=${oneSearchUrl}>Onesearch</a></li>
        <li>
          <a href=${connectCommunityUrl}
            >B connect Community</a
          >
        </li>
        <li>
          <a href=${handshakeUrl}>Handshake</a>
        </li>
        <li><a href=${BUSSUrl}>BUSS</a></li>
        <li><a href=${echoUrl}>Echo 360</a></li>
        <li><a href=${sageUrl}>Sage</a></li>
        <li><a href=${whoCashUrl}>WhoCash/Meal Plan</a></li>
        <li>
          <a href=${financialAidUrl}
            >Financial Aid</a
          >
        </li>
        <li><a href=${marketPlaceUrl}>MarketPlace+</a></li>
        <li>
          <a
            href=${campusCalendarUrl}
            >Campus Calendar</a
          >
        </li>
      </ul>
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
const othersButton = document.querySelector(".others")
const hiddenContainer = document.querySelector(".hiddenContainer")
const backgroundButton = document.getElementById("backgroundButton")
const backgroundYarray = ["top", "center", "bottom"]
const backgroundXarray = ["left", "center", "right"]

let lastBackground = JSON.parse(localStorage.getItem("lastBackground"))
let background = Boolean(JSON.parse(localStorage.getItem("background")))
let randomBackGroundPosition = true

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

//popup logic 

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

//background button logic
backgroundButton.addEventListener("click", () => {
  background = !background
  localStorage.setItem("background", JSON.stringify(background))
  renderBackground(background)
})

function randomBackgroundIndex() {
  return Math.floor(Math.random() * backgroundUrl.length)
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