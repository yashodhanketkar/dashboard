import React, { useState } from "react";
import "./style.css";
import "../common/table.css";
import "../common/common.css";

export default function LayoutSV({ data, name }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [filter, setFilter] = useState();

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
      <div className="variable-limit-wrapper">
        <div className="variable-limit">
          <label>Start</label>
          <input
            className="variable-limit"
            id="table-start"
            type="text"
            onKeyUp={handleStart}
          />
        </div>
        <div className="variable-limit">
          <label>End</label>
          <input
            className="variable-limit"
            id="table-end"
            type="text"
            onKeyUp={handleEnd}
          />
        </div>
        <div className="variable-limit">
          <label>Filter</label>
          <input
            className="variable-limit"
            id="filter"
            type="text"
            onKeyUp={handleFilter}
          />
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="tb-header id-column">ID</td>
            <td className="tb-header">{name}</td>
          </tr>
          {data
            .filter((d) => (start + 1 ? d.id >= start : d.id))
            .filter((d) => (end ? d.id <= end : d.id + 1)) // added 1 to include 0th id item
            .filter((d) => (filter ? d.value.toString() === filter : d.value))
            .map((d) => (
              <tr key={d.id}>
                <td className="id-column">{d.id}</td>
                <td>{d.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
