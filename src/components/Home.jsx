import React from "react";

import loremIpsum from "react-lorem-ipsum";
import { List, AutoSizer, ScrollSync } from "react-virtualized";

const Home = () => {
  const rowCount = 1000;
  const rowHeight = 50;

  const renderColumn = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <div>{list[index].id}</div>
        </div>
      </div>
    );
  };

  const renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{list[index].name}</div>
          <div>{list[index].text}</div>
        </div>
      </div>
    );
  };

  const list = Array(rowCount)
    .fill()
    .map((_val, idx) => ({
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    }));

  return (
    <div className="text-center">
      <h1 className="text-3xl mt-4 font-bold">List Virtualization</h1>
      <ScrollSync>
        {({ onScroll, scrollTop, scrollLeft }) => (
          <div className="list">
            {/* <span>
              {scrollTop} - {scrollLeft}
            </span> */}
            <AutoSizer disableWidth>
              {({ height }) => {
                return (
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <List
                        className="leftSide"
                        width={50}
                        height={height}
                        rowHeight={rowHeight}
                        scrollTop={scrollTop}
                        rowRenderer={renderColumn}
                        rowCount={list.length}
                        overscanRowCount={3}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 50,
                      }}
                    >
                      <List
                        width={800}
                        height={height}
                        rowHeight={rowHeight}
                        onScroll={onScroll}
                        rowRenderer={renderRow}
                        rowCount={list.length}
                        overscanRowCount={3}
                      />
                    </div>
                  </div>
                );
              }}
            </AutoSizer>
          </div>
        )}
      </ScrollSync>
    </div>
  );
};

export default Home;
