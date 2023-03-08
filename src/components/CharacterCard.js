import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const CharacterCard = ({ character, characterCookie, setCharacterCookie }) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // index de character._id --> characterCookie alors index est différent de -1
    const index = characterCookie.indexOf(character._id);
    // si index est différent de -1 alors setIsFavorite est true puisque character._id existe
    if (index !== -1) {
      setIsFavorite(true);
      // sinon, index === -1 donc setIsFavorite est false puisque character._id n'existe pas
    } else {
      setIsFavorite(false);
    }
  }, [characterCookie, character._id]);

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
            src={character.thumbnail.path + "." + character.thumbnail.extension}
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
              const charaTab = [...characterCookie];
              console.log(charaTab);
              const index = charaTab.indexOf(character._id);
              //   au clic, si l'id d'un perso existe dans le tableau de Cookies, on le supprime
              if (index !== -1) {
                charaTab.splice(index, 1);
                // sinon, s'il n'existe pas, on rajoute l'id du perso
              } else {
                charaTab.push(character._id);
              }
              setCharacterCookie(charaTab);
              Cookies.set(`faveCharCookie`, JSON.stringify(charaTab), {
                expires: 365,
              });
            }}
          >
            <FontAwesomeIcon icon="heart" /*className="in-favorites"*/ />
          </button>
        </div>
        {character.description !== "" && (
          <div className="characters-description-container">
            <p className="characters-description">{character.description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default CharacterCard;
