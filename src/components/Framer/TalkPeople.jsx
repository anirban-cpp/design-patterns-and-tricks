import React from "react";

const profession = {
  name: "Jailany Mohamed",
  spec: "Microfronteneds",
};

const TalkPeople = () => {
  return (
    <div className="talkPeople">
      {[...Array(7)].map((_e, i) => (
        <img
          src={`/testimonials/person${i + 1}.webp`}
          key={i}
          alt={`person${i + 1}`}
          className={`talkPeople-img talkPeople-img-${i + 1}`}
        />
      ))}
    </div>
  );
};

export default TalkPeople;
