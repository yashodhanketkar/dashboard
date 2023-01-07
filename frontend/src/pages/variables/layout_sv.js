import React from "react";
import "./style.css";
import "../common/table.css";
import "../common/common.css";

export default function LayoutSV({ data, name }) {
  return (
    <div className="content">
      <table>
        <tbody>
          <tr>
            <td className="tb-header id-column">ID</td>
            <td className="tb-header">{name}</td>
          </tr>
          {data.map((d) => (
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
