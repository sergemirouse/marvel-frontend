import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import wallpaper_1 from "./img/wallpaper_1.jpg";
import wallpaper_2 from "./img/wallpaper_2.jpg";
import wallpaper_3 from "./img/wallpaper_3.jpg";

const fadeImages = [
  {
    url: wallpaper_1,
  },
  {
    url: wallpaper_2,
  },
  {
    url: wallpaper_3,
  },
];

const Home = () => {
  return (
    <Fade className="slide-container">
      {fadeImages.map((fadeImage, index) => (
        <div key={index}>
          <img src={fadeImage.url} alt="home" className="home-bcg" />
        </div>
      ))}
    </Fade>
  );
};

export default Home;
