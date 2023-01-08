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
    let data = +e.target.value;
    console.log(`Fitler: ${data}`);
    setFilter(data);
  };

  return (
    <div className="content">
      <input id="table-start" type="text" onKeyUp={handleStart} />
      <input id="table-end" type="text" onKeyUp={handleEnd} />
      <table>
        <tbody>
          <tr>
            <td className="tb-header id-column">ID</td>
            <td className="tb-header">
              {name}
              <input id="filter" type={"text"} onChange={handleFilter} />
            </td>
          </tr>
          {data
            .filter((d) => (start + 1 ? d.id >= start : d.id))
            .filter((d) => (end ? d.id <= end : d.id))
            .filter((d) => (filter ? d.value === filter : d.value))
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
