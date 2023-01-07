import React from "react";
import "./style.css";

export default function Comp() {
  return (
    <div className="sidebar">
      <a href="/">Home</a>
      <a href="/intensity">Intensity</a>
      <a href="/likelihood">Likelihood</a>
      <a href="/relevance">Relevance</a>
      <a href="/start-year">Start year</a>
      <a href="/end-year">End year</a>
      <a href="/country">Country</a>
      <a href="/topic">Topic</a>
      <a href="/region">Region</a>
    </div>
  );
}
