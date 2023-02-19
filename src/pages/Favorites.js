import { Navigate } from "react-router-dom";
import okay from "../assets/img/15Wr.gif";

const Favorites = ({ token }) => {
  return token ? (
    <div className="RIP-favorites">
      <h1>Ci-gissent les favoris</h1>
      <img src={okay} alt="okay" />
    </div>
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Favorites;
