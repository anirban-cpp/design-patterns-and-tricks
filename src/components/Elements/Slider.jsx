import React, { useState, useEffect } from "react";

import { MdVolumeUp, MdVolumeDown } from "react-icons/md";

export default function Slider() {
  const [value, onChange] = useState(1);
  //   function rangeValFunc(rangeVal) {
  //     onChange(rangeVal);
  //     var rangeWidth = (document.getElementById("tooltiptext").textContent =
  //       rangeVal + "cm");
  //     document.getElementById("tooltiptext").style.left =
  //       "calc(" + rangeVal + "% - 50px)";
  //   }
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
    document.getElementById("range").oninput = function () {
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
    };
  }, []);
  return (
    <div className="slider-parent">
      <h1>Slider</h1>
      <div className="volume-control">
        <MdVolumeDown size={24} />
        <input
          type="range"
          min="1"
          max="500"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }}
          id="range"
        />
        <MdVolumeUp size={30} />
      </div>
      <div className="buble">{value}</div>
    </div>
    // <div class="container">
    //   <div class="tooltip">
    //     <span class="tooltiptext" id="tooltiptext">
    //       0
    //     </span>
    //     <input
    //       type="range"
    //       min="0"
    //       max="100"
    //       value={value}
    //       class="slider"
    //       id="myRange"
    //       onChange={({ target: { value: radius } }) => rangeValFunc(radius)}
    //     />
    //   </div>
    // </div>
  );
}
