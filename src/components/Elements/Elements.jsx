import React from "react";
import AppBar from "./AppBar/AppBar";
import AutoComplete from "./AutoComplete";
import Menu from "./CollapsibleMenu/Menu";
import Rating from "./Rating";
import Slider from "./Slider";
import Switch from "./Switch";
import TableComponent from "./Table/TableComponent";
import Text from "./TextField/Text";

const Elements = () => {
  return (
    <div className="elements">
      <Rating />
      <AutoComplete />
      <Slider />
      <Switch />
      <Menu />
      <TableComponent />
      <Text />
      <AppBar/>
    </div>
  );
};

export default Elements;
