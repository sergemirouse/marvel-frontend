import logo from "./img/MarvelLogo.png";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();
  return (
    <header>
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
          <FontAwesomeIcon
            icon={"heart"}
            className="favorites-icon"
            onClick={() => {
              navigate("/user/favorites");
            }}
          />
          <Link to="/user/favorites">
            <button className="favorites">FAVORITES</button>
          </Link>
          {token ? (
            <>
              <FontAwesomeIcon
                icon={"right-from-bracket"}
                className="logout-icon"
                onClick={() => {
                  handleToken(null);
                }}
              />
              <button
                className="logout"
                onClick={() => {
                  handleToken(null); //au clic sur LOGOUT, le cookie est supprimé du navigateur, l'utilisateur est donc déconnecté
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <div className="signup-login-container">
              <FontAwesomeIcon
                icon={"user-plus"}
                className="signup-icon"
                onClick={() => {
                  navigate("/user/signup");
                }}
              />
              <button
                className="signup"
                onClick={() => {
                  navigate("/user/signup");
                }}
              >
                SIGN UP
              </button>
              <span style={{ color: "#fff" }}>|</span>
              <FontAwesomeIcon
                icon={"arrow-right-to-bracket"}
                className="login-icon"
                onClick={() => {
                  navigate("/user/login");
                }}
              />
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
    </header>
  );
};

export default Header;
