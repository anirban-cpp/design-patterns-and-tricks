import React, { useState } from "react";

import {
  MdHome,
  MdSettings,
  MdArrowRight,
  MdStarOutline,
} from "react-icons/md";

import "./Menu.css";
import CollapsibleMenu from "./CollapsibleMenu";
import { listData as items } from "../Data";

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="menu">
      <h1>Collapsible Menus</h1>
      <div className="menu-body">
        <div className="menu-top">
          <p>🔥 Firebash</p>
        </div>
        <div className="project-overview">
          <div className="overview-left">
            <MdHome size={20} color="#669df6" />
            <p>Project Overview</p>
          </div>
          <div className="overview-right">
            <MdSettings
              size={20}
              color="white"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            />
            {<MdArrowRight color={show ? "white" : "transparent"} size={20} />}
          </div>
        </div>
        <CollapsibleMenu>
          {items.map((item, i) =>
            item?.sub ? (
              <CollapsibleMenu key={i} item={item}>
                <span className="cmenu-subitem-item">
                  <MdStarOutline color="white" size={22} />
                  <p>Starred</p>
                </span>
              </CollapsibleMenu>
            ) : (
              <span className="cmenu-item" key={i}>
                {item.icon}
                <p>{item.label}</p>
              </span>
            )
          )}
        </CollapsibleMenu>
      </div>
    </div>
  );
};

export default Menu;
