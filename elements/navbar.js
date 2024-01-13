class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav id="nav" class="navbar">
          <div class="navbar-logo">
              <img src="images/favicon.png" alt="FlameCord Logo" width="50" height="50">
              <span class="navbar-text"></span>
              <ul class="navbar-menu">
                  <li><a title="Home" href="index">Home</a></li>
                  <li class="dropdown">
                      <a title="Socials" href="#" class="dropbtn">Socials ▾</a>
                      <div class="dropdown-content">
                          <a title="Discord" href="https://discord.com/invite/gF36AT3"><i class="fab fa-discord"></i> Discord</a>
                          <a title="Twitter" href="https://twitter.com/FlameCordMC"><i class="fab fa-twitter"></i> Twitter</a>
                          <a title="Reddit" href="https://www.reddit.com/r/FlameCord/"><i class="fab fa-reddit"></i> Reddit</a>
                          <a title="Instagram" href="https://www.instagram.com/FlameCordMC/"><i class="fab fa-instagram"></i> Instagram</a>
                          <a title="TikTok" href="https://www.tiktok.com/@flamecordmc"><i class="fab fa-tiktok"></i> TikTok</a>
                      </div>
                  </li>
                  <li><a title="Config" href="config">Config</a></li>
                  <li><a title="FAQ" href="faq">FAQ</a></li>
                  <li><a title="Download" href="https://builtbybit.com/resources/flamecord-ultimate-antibot-solution.13492/">Download</a></li>
              </ul>
          </div>
      </nav>
      `;
    }
  }
  
  customElements.define('nav-bar', Navbar);
  