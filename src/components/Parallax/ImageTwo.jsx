// parallax scroll using react-parallax package

import React from "react";
import { Parallax } from "react-parallax";

const ImageTwo = () => {
  return (
    <Parallax bgImage="/parallax-images/satellite.jpg" strength={600}>
      <div className="content">
        <span className="img-txt">A trip to space</span>
      </div>
    </Parallax>
  );
};

export default ImageTwo;
