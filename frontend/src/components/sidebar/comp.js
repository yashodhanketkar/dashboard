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
    </div>
  );
}
