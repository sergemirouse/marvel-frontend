import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faHeart,
  faRightFromBracket,
  faUserPlus,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import Cookies from "js-cookie";

import "./App.css";
import Header from "./components/Header/index";
import Menu from "./components/Menu/index";
import Home from "./pages/Home-Page/index";
import Characters from "./pages/Characters/index";
import Comics from "./pages/Comics/index";
import CharacterComics from "./pages/Character_Comics/index";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
import Favorite from "./pages/Favorites";
import Footer from "./components/Footer/index";

library.add(
  faMagnifyingGlass,
  faHeart,
  faRightFromBracket,
  faUserPlus,
  faArrowRightToBracket
);

function App() {
  const [token, setToken] = useState(Cookies.get("token-marvel") || null);
  const [characterCookie, setCharacterCookie] = useState(
    Cookies.get("faveCharCookie")
      ? JSON.parse(Cookies.get("faveCharCookie"))
      : []
  );

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token-marvel", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("token-marvel");
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              characterCookie={characterCookie}
              setCharacterCookie={setCharacterCookie}
            />
          }
        />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/comics" element={<Comics />} />
        <Route
          path="/user/signup"
          element={<Signup handleToken={handleToken} />}
        />
        <Route
          path="/user/login"
          element={<Login handleToken={handleToken} />}
        />
        <Route
          path="/user/favorites"
          element={
            <Favorite
              token={token}
              characterCookie={characterCookie}
              setCharacterCookie={setCharacterCookie}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
