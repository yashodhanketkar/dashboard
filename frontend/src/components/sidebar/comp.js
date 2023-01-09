import React from "react";
import "./style.css";

export default function Comp() {
  return (
    <div className="sidebar">
      <a href="/">Home</a>
      <a href="/barchart">Barchart</a>
      <a href="/linechart">Linechart</a>
      <a href="/piechart">PieChart</a>
    </div>
  );
}
