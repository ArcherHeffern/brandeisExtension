const html = `
    <main class="main">
      <div class="logoContainer">
        <img
          class="brandeisSeal"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Brandeis_University_seal.svg/1200px-Brandeis_University_seal.svg.png"
          alt="brandeis University Seal"
        />
      </div>
      <div>
        <p class="schoolName">Brandeis University</p>
      </div>
      <div class="dockContainer">
        <ul class="dockUl">
          <li class="dockLi">
            <a
              href="https://wd5.myworkday.com/wday/authgwy/brandeis/login.htmld"
              ><div class="linkName">Latte</div></a
            >
          </li>
          <li class="dockLi">
            <a
              href="https://wd5.myworkday.com/wday/authgwy/brandeis/login.htmld"
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
        <a href="https://identity.brandeis.edu/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png" alt="Settings" />
        </a>
      </span>
    </footer>

    <div class="hiddenContainer">
      <span class="misc">Misc</span>
      <ul class="miscUl">
        <li>
          <a href="http://databases.library.brandeis.edu/">Library Database</a>
        </li>
        <li><a href="http://search.library.brandeis.edu/">Onesearch</a></li>
        <li>
          <a href="https://alumni.brandeis.edu/profile_login"
            >B connect Community</a
          >
        </li>
        <li>
          <a href="https://brandeis.joinhandshake.com/login">Handshake</a>
        </li>
        <li><a href="https://pay.brandeis.edu/">BUSS</a></li>
        <li><a href="https://echo360.org/home">Echo 360</a></li>
        <li><a href="https://www.brandeis.edu/sage/index.html">Sage</a></li>
        <li><a href="https://get.cbord.com/whocash/">WhoCash/Meal Plan</a></li>
        <li>
          <a href="https://netpartner.brandeis.edu/NetPartnerStudent/logon.aspx"
            >Financial Aid</a
          >
        </li>
        <li><a href="https://brandeis.coupahost.com/">MarketPlace+</a></li>
        <li>
          <a
            href="http://www.brandeis.edu/events/index.html?utm_source=login&utm_campaign=apps"
            >Campus Calendar</a
          >
        </li>
      </ul>
    </div>
`
document.body.innerHTML = '';

document.body.innerHTML = html