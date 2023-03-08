import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

const CharacterComics = () => {
  const [characterComics, setCharacterComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/comics/${characterId}`
        );
        setCharacterComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <h2>{characterComics.name}</h2>
      <div className="character-comics-page">
        <div className="character-comics-section">
          {characterComics.comics.map((detail, _id) => {
            const key = Object.keys(detail)[2];
            return (
              <div key={_id} className="comic-container">
                <p className="comic-name">{detail[key]}</p>
                <img
                  src={detail.thumbnail.path + "." + detail.thumbnail.extension}
                  alt="character-comic"
                  className="comic-image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterComics;
