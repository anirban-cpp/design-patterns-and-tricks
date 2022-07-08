import React, { useState, useEffect, useRef } from "react";

import { MdArrowDropDown, MdArrowDropUp, MdClear } from "react-icons/md";

import { top100Films } from "./Data";

const AutoComplete = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(top100Films);

  const focusRef = useRef();
  const queryRef = useRef();

  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (focusRef && event.target !== focusRef.current) {
        if (event.target?.id === "show") {
          setData([...top100Films]);
          setQuery("");
        } else {
          // setData([]);
          setShow(false);
        }
      } else {
        setShow(true);
        if (query && query.length > 0) {
          setData(
            top100Films.filter((item) =>
              item.label.toLowerCase().includes(query.trim().toLowerCase())
            )
          );
        }
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [focusRef, query]);

  const handleChange = (e) => {
    const word = e.target.value;
    if (word.length > 0) {
      setData(
        top100Films.filter((item) =>
          item.label.toLowerCase().includes(word.trim().toLowerCase())
        )
      );
      setShow(true);
    } else {
      // setData([]);
    }
    setQuery(e.target.value);
  };

  return (
    <div className="auto-complete">
      <h1>Auto Complete</h1>
      <div className="auto-complete-input">
        <input
          type="text"
          placeholder=""
          ref={focusRef}
          value={query}
          onChange={handleChange}
          id="suggestions"
        />
        {query && query.length > 0 && (
          <MdClear
            size={20}
            onClick={() => {
              setQuery("");
              setData([...top100Films]);
            }}
          />
        )}
        <label
          style={
            query && query.length > 0
              ? {
                  top: "-1.2rem",
                  fontWeight: "bold",
                  fontSize: "small",
                  backgroundColor: "white",
                }
              : {}
          }
        >
          Movie
        </label>
        {show ? (
          <MdArrowDropUp size={24} onClick={() => setShow(false)} />
        ) : (
          <MdArrowDropDown
            size={24}
            onClick={() => {
              focusRef.current.focus();
              setShow(true);
            }}
            id="show"
          />
        )}
      </div>
      {show && (
        <div className="suggestions">
          {data.length > 0 ? (
            data.map((film, i) => (
              <span
                className="film"
                key={i}
                onClick={() => {
                  setQuery(film.label);
                  setData([]);
                }}
                id="suggestions"
              >
                <p ref={queryRef} id="suggestions">
                  {film.label}
                </p>
              </span>
            ))
          ) : (
            <span className="film" id="suggestions">
              <p ref={queryRef} id="suggestions" style={{ cursor: "text" }}>
                No results found 😓
              </p>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
