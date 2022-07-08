import React, { useRef } from "react";

import { motion } from "framer-motion";

const text =
  "Working here at Recro gives you the power to expand your potential. You can completely focus on your career. Recro gives you the opportunity to work with diverse industries and clients.";

const Experiences = ({ name, active, curr }) => {
  const activeRef = useRef();

  return (
    <motion.div
      className={`experiences ${
        curr === active
          ? "active"
          : curr === (active + 1) % 5 || curr === (active + 2) % 5
          ? "partially-active"
          : "not-active"
      }`}
      ref={activeRef}
      style={{
        opacity: `${
          active === curr
            ? "1"
            : curr === (active + 1) % 5 || curr === (active + 2) % 5
            ? "0.5"
            : "0"
        }`,
      }}
    >
      <div className="experience-left">
        <div className="avatar">
          <img src={`/testimonials/${name}.webp`} alt="person" />
        </div>
      </div>
      <div className="experience-right">
        <p className="experience-name">{name}</p>
        <p className="experience-testimonial">{text}</p>
      </div>
    </motion.div>
  );
};

export default Experiences;
