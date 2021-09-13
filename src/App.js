import "./styles.css";
import React from "react";

import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";
import { useState } from "react";

const imgs = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

// 1 < 2 ? console.log("this is true") : console.log("this is falsey");

const App = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = (event) => {
    setCurrentImg((currentImg) => {
      return currentImg < imgs.length - 1 ? currentImg + 1 : 0;
    });
  };

  const handleImgLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <main>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br />
          by Ella Fielding
        </h2>
      </header>
      <figure>
        <Loading calculatedWidth={numLoaded / imgs.length / 100} />
        <figcaption>
          {currentImg + 1} / {imgs.length}
        </figcaption>
        {imgs.map((imageURL) => (
          <img
            src={imageURL}
            alt=""
            key={imageURL}
            onClick={handleClick}
            onLoad={handleImgLoad}
          />
        ))}
      </figure>
    </main>
  );
};

export default App;
