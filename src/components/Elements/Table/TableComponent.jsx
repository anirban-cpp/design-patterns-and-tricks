import React from "react";
import { tableData } from "../Data";
import Table from "./Table";

const TableComponent = () => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5rem",
  };

  const tableHeading = [
    "Dessert (100g serving)",
    "Calories",
    "Fat (g)",
    "Carbs (g)",
    "Protein (g)",
  ];

  return (
    <div className="tablecomponent" style={styles}>
      <h1 style={{ fontSize: "3rem", fontFamily: "Poppins, sans-serif", marginBottom: '1rem' }}>
        Table Component
      </h1>
      <Table title="Nutrition" tableHeading={tableHeading} tableData={tableData} />
    </div>
  );
};

export default TableComponent;
