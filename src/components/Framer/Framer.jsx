import React from "react";

import { motion } from "framer-motion";
import SlideDiv from "./SlideDiv";
import Experiences from "./Experiences";
import { useState } from "react";
import { useEffect } from "react";
import { AcordianContainer, AcordianContent } from "./Acordian";
import TalkPeople from "./TalkPeople";

import { MdKeyboardArrowRight } from "react-icons/md";

const textStyles = {
  fontSize: "1.3rem",
  fontFamily: "Poppins",
  color: "gray",
  lineHeight: "1.8",
};

const items = [
  {
    name: "1. What is Recro?",
    content: (
      <div style={textStyles}>
        We are a platform that enables seamless access to high growth
        organizations for top talent. We open doors for candidates to work with
        seed to unicorn startups and companies, and gain experience over various
        technical domains and work cultures. We help individuals to accelerate
        their careers 10X by entering unfamiliar territories to create scalable
        code while maintaining top-notch quality.
      </div>
    ),
  },
  {
    name: "2. Why should I go with Recro rather than directly working with startups?",
    content: (
      <div style={textStyles}>
        When you work with Recro, we guarantee you: 1. Stability and Job
        Security: Startup always comes with the uncertainty of funding or a
        business model or has a rapidly changing environment. With Recro, you
        don’t need to worry about the market conditions and other uncertainties,
        you could just focus on what you do best! 2. Exposure: In today’s
        environment, skills are considered to be more important than the number
        of years of experience. We ensure you get the right exposure to upskill
        yourself by working in a high growth organisation with scale and solve
        real-time complex problems that make an impact. 3. Right Match: Recro
        gives you the chance to map your skills, competency and aspirations, and
        pick an opportunity that is optimal for you. Our effort will always be
        to steer you away from opportunities that have a mismatch between actual
        work and the job description. We ensure that you don't lose the
        invaluable prime time of your career.
      </div>
    ),
  },
  {
    name: "3. Is this a contract position?",
    content: (
      <div style={textStyles}>
        No, this is not a contract position, you are under direct employment
        with Recro. You will be given all benefits and perks as provided to
        employees of this company.
      </div>
    ),
  },
  {
    name: "4. Do I have an option to get absorbed at the Client’s company where I will be working?",
    content: (
      <div style={textStyles}>
        Yes. You always have this option available after completing one year of
        employment, but this needs to be mutually agreed upon by both parties.
      </div>
    ),
  },
  {
    name: "5. What benefits am I applicable for if I do join Recro?",
    content: (
      <div style={textStyles}>
        Health Insurance, Flexible Leave Policy, the option to Work from Home,
        Rewards and Recognition, Access to Exclusive Tech Community, Learning,
        Meetups/Webinars, 24x7 Support of Counsellors, Company outings, parties
        and much more.
      </div>
    ),
  },
];

const Framer = () => {
  const images = [
    "udaan.webp",
    "swiggy.webp",
    "curefit.webp",
    "dunzo.webp",
    "homelane.webp",
  ];

  const [active, setActive] = useState(0);
  const [isActive, setisActive] = useState("");
  const [hover, setHover] = useState(-1);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setActive((prev) => (prev + 1) % 5);
    }, 5000);

    return () => clearInterval(intervalTimer);
  }, []);

  const handleClick = (name) => {
    setisActive(name === isActive ? null : name);
  };

  return (
    <>
      <div className="framer">
        <h1>Trusted by</h1>
        <div className="framer-images">
          {images.map((e, i) => (
            <motion.img
              src={`/assets/${e}`}
              alt="placeholder"
              key={i}
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.75 }}
            />
          ))}
        </div>
        <SlideDiv
          image="/assets/challenge.svg"
          text="Work with high-velocity agile teams who are building the products of
            the future. You have the opportunity to push your limits and grow
            exponentially with projects that will help you polish your skills
            and pick up new ones."
          heading="A challenge is an opportunity"
          dir={true}
        />
        <SlideDiv
          image="/assets/cutting_edge.svg"
          text="One of the advantages of working with cutting-edge technology is that you are always aware of the changes in this fast-changing environment. We look out for digital disruptions from around the globe and identify the latest technical jargons, and leverage them effectively."
          heading="First to ride the new wave"
          dir={false}
        />
        <div className="FAQ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, damping: 0 }}
            viewport={{ once: true }}
          >
            <h1>FAQ</h1>
            <p>Having any questions?</p>
          </motion.div>
        </div>
        <img
          className="bg-effect-image-right"
          src="/assets/bg_effect_4.svg"
          alt="bg"
        />
        <img
          className="bg-effect-image"
          src="/assets/bg_effect_3.svg"
          alt="bg-effect-3"
        />
        <div className="testimonial">
          <div className="testimonial-left">
            <h1>Developer Experiences</h1>
            <p>Hear from our talents who found the right opportunity</p>
            <div>
              <img src="/assets/testimonial.webp" alt="testimonial" />
            </div>
          </div>
          <div className="testimonial-right">
            {[...Array(10)].map((_e, i) => (
              <Experiences
                name={`Person${i + 1 > 5 ? i - 4 : i + 1}`}
                active={active}
                key={i}
                curr={i}
              />
            ))}
          </div>
        </div>
        <div className="dropdowns">
          <img src="/assets/bg_effect_4.svg" alt="bcg" />
          <div
            style={{
              width: "70vw",
              display: "grid",
              placeItem: "center",
            }}
          >
            <AcordianContainer>
              {items.map((item, i) => (
                <AcordianContent
                  onClick={() => handleClick(item.name)}
                  itemName={item.name}
                  itemContent={item.content}
                  isActive={isActive === item.name}
                  key={i}
                />
              ))}
            </AcordianContainer>
          </div>
        </div>
        <button className="more-btn">View More</button>
      </div>
      <div className="talkSection">
        <div className="talkSectionLeft">
          <h1>We grow, </h1>
          <h1>when you grow</h1>
          <p>
            There’s something about human interaction that goes beyond just
            learning; it inspires you. That’s why we invite exceptional figures
            over for conversation that sparks the fire.
          </p>
          <input type="email" placeholder="Email ID" value={email} onChange={e => setEmail(e.target.value)}/>
          <button>Sign Up</button>
        </div>
        <TalkPeople />
      </div>
      <div className="join_us">
        <img src="/assets/join_us_3x.webp" alt="join_us" />
        <div className="join_us_desc">
          <h1>{`#include <You> `}</h1>
          <p>
            Maybe you like building from scratch or maybe you like to work with
            teams who bring out the next big thing. How about we find out what
            fits you best?
          </p>
        </div>
        <button className="join_us_btn">
          Code me in
          <span>
            <MdKeyboardArrowRight size={24} />
          </span>
        </button>
      </div>
      <div className="framer-end">
        <p onMouseOver={() => setHover(1)} onMouseOut={() => setHover(-1)}>
          <span className={hover === 1 ? "end-active" : "end-span"} />
          About Us
        </p>
        <span className={hover === 2 ? "end-active" : "end-span"} />
        <p onMouseOver={() => setHover(2)} onMouseOut={() => setHover(-1)}>
          About Us
        </p>
        <span className={hover === 3 ? "end-active" : "end-span"} />
        <p onMouseOver={() => setHover(3)} onMouseOut={() => setHover(-1)}>
          About Us
        </p>
        <span className={hover === 4 ? "end-active" : "end-span"} />
        <p onMouseOver={() => setHover(4)} onMouseOut={() => setHover(-1)}>
          About Us
        </p>
      </div>
    </>
  );
};

//onMouseOut={() => setHover(-1)}

export default Framer;
