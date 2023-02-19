import logo from "../assets/img/MarvelLogo.png";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = ({ token, handleToken }) => {
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
              <div className="buttons-container">
                <Link to="/user/favorites">
                  <button className="favorites">FAVORITES</button>
                </Link>
                {token ? (
                  <button
                    className="logout"
                    onClick={() => {
                      // Cookies.remove("token-vinted");
                      handleToken(null);
                    }}
                  >
                    LOGOUT
                  </button>
                ) : (
                  <div className="signup-login-container">
                    <button
                      className="signup"
                      onClick={() => {
                        navigate("/user/signup");
                      }}
                    >
                      SIGN UP
                    </button>
                    <span style={{ color: "#fff" }}>|</span>
                    <button
                      className="login"
                      onClick={() => {
                        navigate("/user/login");
                      }}
                    >
                      LOGIN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
