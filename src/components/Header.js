import logo from "../assets/img/MarvelLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header>
        <div className="first-header">
          <div className="first-division">
            <div className="header-container">
              <div>
                <img src={logo} alt="logo-marvel" className="logo-marvel" />
              </div>
              <div className="research-container">
                <FontAwesomeIcon
                  className="magnifying-glass"
                  icon={"magnifying-glass"}
                />
                <input
                  type="text"
                  placeholder="Recherecher"
                  className="research-bar"
                />
              </div>
              <div className="signup-login-container">
                <button className="signup">SIGN UP</button>
                <span style={{ color: "#fff" }}>|</span>
                <button className="login">LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
