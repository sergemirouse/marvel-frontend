import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <button
        className="first-menu"
        onClick={() => {
          navigate("/");
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
