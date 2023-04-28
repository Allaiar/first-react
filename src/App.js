import "./style.scss";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <a href="#" className="header__logo">
              <h1 className="header__logo-title">Oyindamola</h1>
            </a>
            <ul className="header__links">
              <li className="header__links-item">
                <a href="#" className="header__links-link">
                  About me
                </a>
              </li>
              <li className="header__links-item">
                <a href="#" className="header__links-link">
                  Services
                </a>
              </li>
              <li className="header__links-item">
                <a href="#" className="header__links-link">
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__wrapper">
            <div className="header__wrapper-left">
              <p className="header__wrapper-left-text">
                Hi, I am Oyindamola Bakare
              </p>
              <p className="header__wrapper-left-subtext">Frontend Developer</p>
              <button className="header__wrapper-left-button">
                Download CV
              </button>
              <button className="header__wrapper-left-button1">
                Learn More
              </button>
            </div>
            <div className="header__wrapper-right">
              <img src={require("./header__photo.png")} />
            </div>
          </div>
          <div className="section">
            <div className="section__texts">
              <p className="section__texts-title">About</p>
              <p className="section__texts-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
            <div className="section__records">
              <div className="section__records-wrap">
                <div className="section__records-wrap-record"></div>
                <a href="#" className="section__records-wrap-title">
                  Full Names
                </a>
                <a href="#" className="section__records-wrap-text">
                  Your name goes here
                </a>
              </div>
              <div className="section__records-wrap">
                <div className="section__records-wrap-record"></div>
                <a href="#" className="section__records-wrap-title">
                  Email Address
                </a>
                <a href="#" className="section__records-wrap-text">
                  Your email goes here
                </a>
              </div>
              <div className="section__records-wrap">
                <div className="section__records-wrap-record"></div>
                <a href="#" className="section__records-wrap-title">
                  Twitter
                </a>
                <a href="#" className="section__records-wrap-text">
                  Your email goes here
                </a>
              </div>
              <div className="section__records-wrap">
                <div className="section__records-wrap-record"></div>
                <a href="#" className="section__records-wrap-title">
                  phone
                </a>
                <a href="#" className="section__records-wrap-text">
                  Your name goes here
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer className="footer">
        <p className="footer__p">Раджапов Аллаяр</p>
      </footer>
    </div>
  );
}

export default App;
