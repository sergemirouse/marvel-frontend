import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./style.css";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [skip, setSkip] = useState("");
  const [tab, setTab] = useState([]);

  const navigate = useNavigate();

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
            <article key={character._id} className="characters-images-section">
              <div className="characters-images-container">
                <div>
                  <h2
                    onClick={() => {
                      navigate(`/comics/${character._id}`);
                    }}
                    className="character-name"
                  >
                    {character.name}
                  </h2>
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt="character"
                    className="characters-images"
                    onClick={() => {
                      navigate(`/comics/${character._id}`);
                    }}
                  />

                  <button
                    className="favorite"
                    key={character.id}
                    onClick={() => {
                      const charaTab = [...tab];
                      charaTab.push(character._id);
                      setTab(charaTab);

                      Cookies.set(`faveChar${character._id}`, [charaTab], {
                        expires: 365,
                      });
                    }}
                  >
                    {`faveChar${character._id}` ? (
                      <FontAwesomeIcon icon="heart" className="in-favorites" />
                    ) : (
                      <FontAwesomeIcon
                        icon="heart"
                        className="out-of-favorites"
                      />
                    )}
                  </button>
                </div>
                {character.description !== "" && (
                  <div className="characters-description-container">
                    <p className="characters-description">
                      {character.description}
                    </p>
                  </div>
                )}
              </div>
            </article>
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
