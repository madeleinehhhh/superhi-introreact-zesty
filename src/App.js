import "./styles.css";
import React, { useState } from "react";

import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
      /*if (currentImage < length) {
        return currentImage + 1;
      } else {
        return 0;
      }*/
    });
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
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <img src={images[currentImage]} onClick={handleClick} alt="" />
      </figure>
    </main>
  );
};

export default App;
