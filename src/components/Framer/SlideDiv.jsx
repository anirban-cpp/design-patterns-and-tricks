import React from "react";

import { motion } from "framer-motion";

const SlideDiv = ({ heading, text, image, dir }) => {
  if (dir) {
    return (
      <motion.div
        className="challenge"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: ["-50vw", "0vw"] }}
        transition={{ delay: 1, duration: 1}}
        viewport={{ once: true }}
      >
        <div className="motion-right">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
        <div className="motion-left">
          <img src={image} alt="challenge" />
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="challenge"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: ["50vw", "0vw"] }}
        transition={{ delay: 2, duration: 1}}
        viewport={{ once: true }}
      >
        <div className="motion-left">
          <img src={image} alt="challenge" />
        </div>
        <div className="motion-right">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </motion.div>
    );
  }
};

export default SlideDiv;
