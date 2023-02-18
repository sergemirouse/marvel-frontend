import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "http://i.annihil.us/u/prod/marvel/i/mg/9/10/53cd2c7612d2f.jpg",
  },
  {
    url: "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c.jpg",
  },
  {
    url: "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/55f6e3aa15402.jpg",
  },
];

const Home = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{
                width: "100%",
                maxHeight: "100vh",
                objectFit: "cover",
              }}
              src={fadeImage.url}
              alt="home"
              className="home-bcg"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Home;
