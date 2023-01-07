import React from "react";
import "./style.css";

export default function LayoutSV({ data, name }) {
  return (
    <div className="spage">
      <table>
        <tr>
          <td className="tb-header">ID</td>
          <td className="tb-header">{name}</td>
        </tr>
        {data.map((d) => (
          <tr>
            <td>{d.id}</td>
            <td>{d.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
