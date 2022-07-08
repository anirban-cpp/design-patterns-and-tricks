import React from "react";
import ImageOne from "./ImageOne";
import ImageThree from "./ImageThree";
import ImageTwo from "./ImageTwo";

import "./Parallax.css";
import TextBox from "./TextBox";

const Parallax = () => {
  return (
    <>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
    </>
  );
};

export default Parallax;
