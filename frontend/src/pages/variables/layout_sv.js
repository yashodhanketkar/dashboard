import React, { useState } from "react";

export default function LayoutSV({ data, name }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [filter, setFilter] = useState();
  const [selectAriaHeight, setSelectAriaHeight] = useState("0px");

  function handleFilterArea() {
    if (selectAriaHeight === "fit-content") {
      setSelectAriaHeight("0px");
    } else if (selectAriaHeight === "0px") {
      setSelectAriaHeight("fit-content");
    }
  }

  let handleStart = (e) => {
    let data = +e.target.value;
    setStart(data);
  };

  let handleEnd = (e) => {
    let data = +e.target.value;
    setEnd(data);
  };

  let handleFilter = (e) => {
    let data = e.target.value;
    setFilter(data);
  };

  return (
    <div className="content">
      <div className="filter-wrapper">
        <button className="toggle-filter" onClick={handleFilterArea}>
          <label className="toggle-filter">Filter</label>
        </button>
        <div className="filter-controls" style={{ height: selectAriaHeight }}>
          <div className="filter">
            <label>Start</label>
            <input
              className="filter-text"
              id="table-start"
              type="text"
              onKeyUp={handleStart}
            />
          </div>
          <div className="filter">
            <label>End</label>
            <input
              className="filter-text"
              id="table-end"
              type="text"
              onKeyUp={handleEnd}
            />
          </div>
          <div className="filter">
            <label>Filter</label>
            <input
              className="filter-text"
              id="filter"
              type="text"
              onKeyUp={handleFilter}
            />
          </div>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>{name}</th>
          </tr>
          {data
            .filter((d) => (start + 1 ? d.id >= start : d.id))
            .filter((d) => (end ? d.id <= end : d.id + 1)) // added 1 to include 0th id item
            .filter((d) => (filter ? d.value.toString() === filter : d.value))
            .map((d) => (
              <tr key={d.id}>
                <td className="item-display-table" style={{ fontWeight: 800 }}>
                  <a href={`item/${d.id}`}>{d.id}</a>
                </td>
                <td className="item-display-table">{d.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
