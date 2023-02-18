import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/Character_Comics";
import Footer from "./components/Footer";

library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
