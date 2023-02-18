import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/Character_Comics";

library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics/:characterId" element={<CharacterComics />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
