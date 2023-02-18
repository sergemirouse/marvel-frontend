import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CharacterComics = () => {
  const [characterComics, setCharacterComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //   const navigate = useNavigate();

  const { characterId } = useParams();

  console.log({ characterId });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/comics/${characterId}`
        );
        setCharacterComics(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <p>{characterComics.name}</p>
      {characterComics.comics.map((detail, index) => {
        const key = Object.keys(detail)[2];
        console.log(key);
        return (
          <div key={index}>
            <p>{detail[key]}</p>
            <img
              src={
                detail.thumbnail.path +
                "/portrait_fantastic" +
                "." +
                detail.thumbnail.extension
              }
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterComics;
