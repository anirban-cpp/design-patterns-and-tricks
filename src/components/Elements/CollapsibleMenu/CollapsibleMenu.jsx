import React, { useState } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";

import "./CollapsibleMenu.css";

const CollapsibleMenu = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cmenu">
      <div
        className={props.item?.icon ? "cmenu-subitem" : "cmenu-top"}
        onClick={() => setOpen(!open)}
      >
        {!props.item?.icon ? (
          <p>Build</p>
        ) : (
          <span>
            {props.item?.icon}
            <p>{props.item?.label}</p>
          </span>
        )}
        <MdKeyboardArrowUp
          size={24}
          color="white"
          className={open ? "down-icon" : "up-icon"}
        />
      </div>
      <div className={open ? "cmenu-bottom-show" : "cmenu-bottom"}>
        {props.children}
      </div>
    </div>
  );
};

export default CollapsibleMenu;
