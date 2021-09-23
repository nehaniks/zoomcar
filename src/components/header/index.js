import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://www.zoomcar.com/build/img/logo.f0c7a9744cfeb3fb5c90eafda61dd2ce.svg"
        alt="Zoomcar-Logo"
        width="105px"
        height="27px"
      />
      <div className="header-links">
        <div className="links">
          <ul className="links-list">
            <li>OFFERS</li>
            <li>
              SUBSCRIPTION
              <div className="link-description">
                <span className="logo subs-logo" />
                <p>
                  Hassle-free way of getting your personal car for flexible long
                  term duration. You also have an option to share your car with
                  other Zoomcar customers &amp; save up to 70% of the monthly
                  subscription fee.
                </p>
                <div className="description-button">KNOW MORE</div>
              </div>
            </li>
            <li>
              AMIGO
              <div className="link-description amigo-desc">
                <span className="logo amigo-logo" />
                <p>
                  A unique Community Vehicle Pooling program that allows you to
                  share your car with your community and friends while the car
                  not in use and earn money.
                </p>
                <div className="description-button">KNOW MORE</div>
              </div>
            </li>
            <li>
              ZMS
              <div className="link-description zms-desc">
                <span className="logo zms-logo" />
                <p>
                  Connected technology offerings and shared mobility solutions
                  for businesses worldwide.
                </p>
                <div className="description-button">KNOW MORE</div>
              </div>
            </li>
            <li>
              MOBILE APP
              <div className="app-link">
                <a href="/#" className="app-logo google-play">
                  <span>Google Play</span>
                </a>

                <a href="/#" className="app-logo app-store">
                  <span>App Store</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="user-panel">
          <ul className="user-panel-list">
            <li>SIGNUP</li>
            <li>LOGIN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
