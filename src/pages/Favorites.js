import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import Cookies from "js-cookie";

const Favorites = ({ token, characterCookie, setCharacterCookie }) => {
  console.log(characterCookie);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/characters`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [characterCookie]);

  return token ? (
    isLoading ? (
      <p>Loading ...</p>
    ) : (
      <div className="characters-images-block">
        {data.results.map((character) => {
          return (
            characterCookie.map(Cookies.get) === character._id && (
              <CharacterCard
                characterCookie={characterCookie}
                setCharacterCookie={setCharacterCookie}
                character={character}
                key={character._id}
              />
            )
          );
        })}
      </div>
    )
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Favorites;
