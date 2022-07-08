import React, { useLayoutEffect, useEffect } from "react";

const Hook = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);   // Called before useEffect

  return <div className="hook"><h1>Hook</h1></div>;
};

export default Hook;
