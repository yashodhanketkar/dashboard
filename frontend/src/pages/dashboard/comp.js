import React from "react";
import "./style.css";

export default function Comp({ data }) {
  console.log(data);
  return (
    <div className="spage">
      <table>
        <tr className="row">
          <th>ID</th>
          <th>Intensity</th>
          <th>Likelihood</th>
          <th>Relevance</th>
          <th>Start Year</th>
          <th>End Year</th>
          <th>Country</th>
          <th>Topic</th>
          <th>Region</th>
        </tr>
        {data.map((d) => (
          <tr className="row">
            <td>{d.id}</td>
            <td>{d.intensity}</td>
            <td>{d.likelihood}</td>
            <td>{d.relevance}</td>
            <td>{d.start_year}</td>
            <td>{d.end_year}</td>
            <td>{d.country}</td>
            <td>{d.topic}</td>
            <td>{d.region}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
