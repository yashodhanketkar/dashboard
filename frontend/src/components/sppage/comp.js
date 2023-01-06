import React from "react";
import "./style.css";

export default function Comp({ props }) {
  return (
    <div className="spage">
      <div className="row">
        <div className="id index-item">ID</div>
        <div className="value index-item">Value</div>
      </div>
      {props.map((d) => (
        <div className="row">
          <div className="id">{d.id}</div>
          <div className="value">{d.value}</div>
        </div>
      ))}
    </div>
  );
}
