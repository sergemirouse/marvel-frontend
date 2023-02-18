import logo from "../assets/img/MarvelLogo.png";
import { useNavigate } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="first-header">
          <div className="first-division">
            <div className="header-container">
              <div>
                <img
                  src={logo}
                  alt="logo-marvel"
                  className="logo-marvel"
                  onClick={() => {
                    navigate("/");
                  }}
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
