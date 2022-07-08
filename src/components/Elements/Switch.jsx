import React from "react";
import { useState } from "react";

import { MdLocationPin, MdEdit } from "react-icons/md";

import "./Switch.css";

const Switch = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="switch">
      <h1>Switch</h1>
      <div className="box">
        <div className="box-top">
          <div className="box-top-left">
            <img src="/testimonials/person2.webp" alt="person" />
            <div className="person-details">
              <p>Michael Scott</p>
              <span>
                <MdLocationPin color="#9e9e9e" size={20} />
                <p>Scranton, PA</p>
              </span>
            </div>
          </div>
          <div className="box-top-right">
            <MdEdit color="white" size={15} />
          </div>
        </div>
        <div className="box-bottom">
          <span
            className="account"
            style={{ backgroundColor: active ? "#34cd4e" : "#423e3e" }}
          >
            {active ? "Active account" : "Inactive account"}
          </span>
          <span className="switch-body" onClick={() => setActive(!active)} style={{ backgroundColor: active ? "#3476bc" : "#423e3e" }}>
            <span
              className="switch-btn"
              style={{ left: active ? 25 : 0, backgroundColor: active ? "#90caf9" : "#999" }}
              onClick={() => setActive(!active)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Switch;
