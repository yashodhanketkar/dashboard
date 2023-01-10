import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Comp() {
  return (
    <div className="sidebar">
      <NavLink to="">Home</NavLink>
      <NavLink to="barchart">Barchart</NavLink>
      <NavLink to="linechart">Linechart</NavLink>
      <NavLink to="piechart">Piechart</NavLink>
      <div className="nav-divider">Charts</div>
      <NavLink to="charts/intensity">Intensity</NavLink>
      <NavLink to="charts/likelihood">Likelihood</NavLink>
      <NavLink to="charts/relevance">Relevance</NavLink>
    </div>
  );
}
