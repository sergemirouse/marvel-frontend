import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import "./style.css";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState("");
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9v668jgjwvk4.code.run/comics?apiKey=&title=${title}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [title, skip]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <div className="research-section">
        <div className="research-container">
          <FontAwesomeIcon
            className="magnifying-glass"
            icon={"magnifying-glass"}
          />
          <input
            value={title}
            type="text"
            placeholder="Recherecher"
            className="research-bar"
            autoComplete="on"
            onChange={(event) => {
              setTitle(event.target.value);
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
          max="474"
          value={skip}
          placeholder="Page"
          onChange={(event) => setSkip(event.target.value)}
        />
      </div>
      <div className="comics-images-block">
        {data.results.map((comic) => {
          return (
            <article key={comic._id} className="comics-images-section">
              <h2>{comic.title}</h2>
              <button
                className="favorite-comic"
                onClick={() => {
                  const comicsTab = [...tab];
                  comicsTab.push(comic._id);
                  setTab(comicsTab);
                  Cookies.set(`faveCom${comic._id}`, [comicsTab], {
                    expires: 365,
                  });
                }}
              >
                <FontAwesomeIcon icon="heart" />
              </button>
              <div className="image-container">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="comic"
                  className="comics-images"
                />
              </div>
              {comic.description !== null && (
                <div className="comics-description">{comic.description}</div>
              )}
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
          max="474"
          value={skip}
          placeholder="Page"
          onChange={(event) => setSkip(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Comics;
