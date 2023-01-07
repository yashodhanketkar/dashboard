import React from "react";
import "./style.css";
import "../common/table.css";
import "../common/common.css";

export default function Comp({ data }) {
  console.log(data);
  return (
    <div className="content">
      <table>
        <tbody>
          <tr className="row">
            <td className="tb-header id-column">ID</td>
            <td className="tb-header">
              <a href="/intensity">Intensity</a>
            </td>
            <td className="tb-header">
              <a href="/likelihood">Likelihood</a>
            </td>
            <td className="tb-header">
              <a href="/relevance">Relevance</a>
            </td>
            <td className="tb-header">
              <a href="/start-year">Start year</a>
            </td>
            <td className="tb-header">
              <a href="/end-year">End year</a>
            </td>
            <td className="tb-header">
              <a href="/country">Country</a>
            </td>
            <td className="tb-header">
              <a href="/topic">Topic</a>
            </td>
            <td className="tb-header">
              <a href="/region">Region</a>
            </td>
          </tr>
          {data
            // .filter(
            //   (d) =>
            //     d.country === "United States of America" && d.topic === "gas"
            // )
            .map((d) => (
              <tr key={d.id} className="row">
                <td key={d.id}>{d.id}</td>
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
        </tbody>
      </table>
    </div>
  );
}
