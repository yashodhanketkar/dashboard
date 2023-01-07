import React from "react";
import Searchbox from "../searchbox";
import "./style.css";

export default function Comp() {
  return (
    <header>
      <div className="app-name">Dashboard App</div>
      <Searchbox />
    </header>
  );
}
