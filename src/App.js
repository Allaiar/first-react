import './style.scss'

function App() {
  return (
  <div>
    <header class="header">
      <div class="container">
        <nav class="header__nav">
          <a href="#" class="header__logo">
            <h1 class="header__logo-title">Oyindamola</h1>
          </a>
          <ul class="header__links">
            <li class="header__links-item">
              <a href="#" class="header__links-link">About me</a>
            </li>
            <li class="header__links-item">
              <a href="#" class="header__links-link">Services</a>
            </li>
            <li class="header__links-item">
              <a href="#" class="header__links-link">Contact me</a>
            </li>
          </ul>
        </nav>
        <div class="header__wrapper">
          <div class="header__wrapper-left">
            <p class="header__wrapper-left-text">Hi, I am Oyindamola Bakare</p>
            <p class="header__wrapper-left-subtext">Frontend Developer</p>
            <button class="header__wrapper-left-button">Download CV</button>
            <button class="header__wrapper-left-button1">Learn More</button>
          </div>
          <div class="header__wrapper-right">
          <img src={require('./header__photo.png')} />
          </div>
        </div>б
        <div class="section">
          <div class="section__texts">
            <p class="section__texts-title">About</p>
            <p class="section__texts-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>
          <div class="section__records">
            <div class="section__records-wrap">
              <div class="section__records-wrap-record"></div>
              <p class="section__records-wrap-title">Full Names</p>
              <p class="section__records-wrap-text">Your name goes here</p>
            </div>
            <div class="section__records-wrap">
              <div class="section__records-wrap-record"></div>
              <p class="section__records-wrap-title">Email Address</p>
              <p class="section__records-wrap-text">Your email goes here</p>
            </div>
            <div class="section__records-wrap">
              <div class="section__records-wrap-record"></div>
              <p class="section__records-wrap-title">Twitter</p>
              <p class="section__records-wrap-text">Your email goes here</p>
            </div>
            <div class="section__records-wrap">
              <div class="section__records-wrap-record"></div>
              <p class="section__records-wrap-title">phone</p>
              <p class="section__records-wrap-text">Your name goes here</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
}

export default App;
