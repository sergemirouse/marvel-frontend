import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/css/Comics.css";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--9v668jgjwvk4.code.run/comics"
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
    <div className="comics-images-block">
      {data.results.map((comic) => {
        return (
          <article key={comic._id} className="comics-images-section">
            <h2>{comic.title}</h2>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="comic"
              className="comics-images"
            />
            <div className="comics-description">{comic.description}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Comics;
