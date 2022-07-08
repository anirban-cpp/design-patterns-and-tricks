// parallax scroll using react-parallax package

import React from "react";
import { Parallax } from "react-parallax";

const ImageOne = () => {
  return (
    <Parallax bgImage="/parallax-images/nasa.jpg" strength={800}>
      <div className="content">
        <span className="img-txt">A trip to space</span>
      </div>
    </Parallax>
  );
};

export default ImageOne;
