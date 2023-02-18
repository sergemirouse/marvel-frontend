import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/Character.css";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--9v668jgjwvk4.code.run/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="characters-images-block">
      {data.results.map((character) => {
        return (
          <article
            key={character._id}
            className="characters-images-section"
            onClick={() => {
              navigate(`/comics/${character._id}`);
            }}
          >
            <div className="characters-images-container">
              <h2>{character.name}</h2>
              <img
                src={
                  character.thumbnail.path +
                  "/standard_fantastic" +
                  "." +
                  character.thumbnail.extension
                }
                alt="character"
                className="characters-images"
              />
              <div className="red"></div>
              <p className="characters-description">{character.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
