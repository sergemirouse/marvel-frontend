import { useNavigate } from "react-router-dom";
import "../assets/css/Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <button
        className="first-menu"
        onClick={() => {
          navigate("/characters");
        }}
      >
        <div className="characters-select">CHARACTERS</div>
      </button>

      <button
        className="second-menu"
        onClick={() => {
          navigate("/comics");
        }}
      >
        <div className="comics-select">COMICS</div>
      </button>
    </div>
  );
};

export default Menu;
