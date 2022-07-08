import React, { useLayoutEffect, useEffect } from "react";

import useGeoLocation from "../../Hooks/useGeoLocation";

const Hook = () => {
  const location = useGeoLocation();

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []); // Called before useEffect

  return (
    <div className="hook">
      <h1>Hook</h1>
      {location.loaded
        ? JSON.stringify(location)
        : "Location not yet available"}
    </div>
  );
};

export default Hook;
