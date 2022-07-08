import React from "react";
import { Heading } from "../TextField/Text";

import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { MdMail, MdNotifications } from "react-icons/md";

import "./AppBar.css";
import { useState } from "react";

const Appbarsearch = () => {
  return (
    <div className="appbar-search">
      <FaSearch size={17} color="white" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const AppBarRight = ({ setOpen }) => {
  return (
    <>
      <span>
        <MdMail size={20} color="white" />
        <span className="notification">12</span>
      </span>
      <span>
        <MdNotifications size={20} color="white" />
        <span className="notification">10</span>
      </span>
      <span onClick={() => setOpen((prev) => !prev)}>
        <span className="user-sphere">
          <FaUser size={15} />
        </span>
      </span>
    </>
  );
};

const AppBar = () => {

  return (
    <>
      <Heading>AppBar</Heading>
      <div className="appbar">
        <div className="appbar-left">
          <FaBars size={20} color="white" />
          <p>L O G O</p>
          <Appbarsearch />
        </div>
        <div className="appbar-right">
          <AppBarRight/>
        </div>
      </div>
    </>
  );
};

export default AppBar;
