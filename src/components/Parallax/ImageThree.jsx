// parallax scroll using react-parallax package

import React from "react";
import { Parallax } from "react-parallax";

const ImageThree = () => {
  return (
    <Parallax bgImage="/parallax-images/spaceStation.jpg" strength={800}>
      <div className="content">
        <span className="img-txt">A trip to space</span>
      </div>
    </Parallax>
  );
};

export default ImageThree;
