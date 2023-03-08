import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";

import "./style.css";
import Cookies from "js-cookie";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [skip, setSkip] = useState("");
  const [characterCookie, setCharacterCookie] = useState(
    Cookies.get("faveCharCookie") || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/characters?apiKey&name=${name}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name, skip]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="characters-page">
      <div className="characters-research-section">
        <div className="characters-research-container">
          <FontAwesomeIcon
            className="characters-magnifying-glass"
            icon={"magnifying-glass"}
          />
          <input
            value={name}
            type="text"
            placeholder="Recherecher"
            className="characters-research-bar"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="skip-container">
        <p>Page :</p>
        <input
          className="skip-input"
          type="number"
          min="1"
          max="15"
          value={skip}
          placeholder="Page"
          onChange={(event) => setSkip(event.target.value)}
        />
      </div>
      <div className="characters-images-block">
        {data.results.map((character) => {
          return (
            <CharacterCard
              character={character}
              characterCookie={characterCookie}
              setCharacterCookie={setCharacterCookie}
              key={character._id}
            />
          );
        })}
      </div>
      <div className="skip-container">
        <p>Page :</p>
        <input
          className="skip-input"
          type="number"
          min="1"
          max="15"
          value={skip}
          placeholder="Page"
          onChange={(event) => setSkip(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Characters;
