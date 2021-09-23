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
            <li>SUBSCRIPTION</li>
            <li>AMIGO</li>
            <li>ZMS</li>
            <li>MOBILE APP</li>
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
