import React, { useEffect } from "react";
import { useState } from "react";

const Fibonacci = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [click, setClick] = useState(false);

  const worker = new Worker(new URL("./fib-worker.js", import.meta.url));

  const handleChange = () => {
    if (Number(input) <= 0) alert("Please enter a number > 0");
    else if (Math.floor(Number(input)) !== Math.ceil(Number(input)))
      alert("Please enter n as an integer");
    else {
      setNum(Number(input));
    }
  };

  useEffect(() => {
    if (num >= 1) {
      worker.postMessage({ num });
      worker.onerror = (err) => console.log(err);
      worker.onmessage = (e) => {
        const { time, fibNum } = e.data;
        console.log(e);
        setResult([
          ...result,
          {
            num,
            time,
            fibNum,
          },
        ]);
      };
    }
  }, [num]);

  return (
    <div
      className="fibonacci"
      style={{ backgroundColor: `${click ? "green" : "#fff"}` }}
    >
      <button className="fibonacci-button" onClick={() => setClick(!click)}>
        Change background
      </button>
      <div className="fibonacci-top">
        <p>Computing the nth Fibonaaci number</p>
      </div>
      <div className="fib-inputs">
        <input
          type="text"
          placeholder="Enter the value of n"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="fibonacci-button" onClick={handleChange}>
          Calculate
        </button>
      </div>
      {num > 0 &&
        result.length > 0 &&
        result.map((e, i) => (
          <div className="fib-result" key={i}>
            <p>
              Time: <strong>{e.time} ms</strong>
            </p>
            <p>
              {e.num}
              {Number(e.num) === 1
                ? "st"
                : Number(e.num) === 2
                ? "nd"
                : Number(e.num) === 3
                ? "rd"
                : "th"}{" "}
              fibonacci number: <strong>{e.fibNum}</strong>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Fibonacci;
