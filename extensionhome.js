const brandeisSealImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png"
alt = "brandeis University Seal"
const latteUrl = "https://wd5.myworkday.com/wday/authgwy/brandeis/login.htmld"
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
      <span class="settingsContainer">
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
document.body.innerHTML = '';

document.body.innerHTML = html