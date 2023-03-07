import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const CharacterCard = ({ character, characterCookie, setCharacterCookie }) => {
  const navigate = useNavigate();

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
              charaTab.push(character._id);
              setCharacterCookie(charaTab);

              Cookies.set(`faveCharCookie`, JSON.stringify(charaTab), {
                expires: 365,
              });
            }}
          >
            <FontAwesomeIcon icon="heart" className="in-favorites" />
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
