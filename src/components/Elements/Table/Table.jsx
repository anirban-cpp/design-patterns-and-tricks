import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./Table.css";

const Row = ({ e }) => (
  <tr>
    {Object.keys(e).map((val, j) => {
      return j === 0 ? <th key={j}>{e[val]}</th> : <td key={j}>{e[val]}</td>;
    })}
  </tr>
);

const Table = ({ title, tableHeading, tableData }) => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState(tableData.slice(0, 5));

  const getData = () => {
    if (page === 1) {
      setData(tableData.slice(0, 5));
    } else {
      setData(
        tableData.slice(
          (page - 1) * 5,
          (page - 1) * 5 + Math.min(5, tableData.length - (page - 1) * 5)
        )
      );
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="table-container">
      <div className="table-top">
        <p>{title}</p>
      </div>
      <table>
        <thead>
          <tr>
            {tableHeading.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <React.Fragment key={i}>
              <Row e={e} key={i} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="table-legend">
        <span>Rows per page : 5</span>
        <span>
          {(page - 1) * 5 + 1} -{" "}
          {(page - 1) * 5 + Math.min(5, tableData.length - (page - 1) * 5)} of{" "}
          {tableData.length}
        </span>
        <span>
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            style={{ color: page === 1 ? "gray" : "#fff" }}
          >
            <MdArrowBackIosNew size={page > 1 ? 20 : 15} />
          </button>
          <button
            disabled={page === 3}
            onClick={() => setPage((prev) => prev + 1)}
            style={{ color: page === 3 ? "gray" : "#fff" }}
          >
            <MdArrowForwardIos size={page < 3 ? 20 : 15} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Table;
