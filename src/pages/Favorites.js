import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

const Favorites = ({ token, characterCookie, setCharacterCookie }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/user/favorites`
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
        {data.characterCookie.map((faveCharacter) => {
          return (
            <div>
              {faveCharacter && (
                <CharacterCard
                  characterCookie={characterCookie}
                  setCharacterCookie={setCharacterCookie}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Favorites;
