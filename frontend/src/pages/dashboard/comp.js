import React, { useState } from "react";
import "./style.css";
import "../common/table.css";
import "../common/common.css";

function sortBy(a, b, sortByField, reverseField) {
  let itemA;
  let itemB;

  if (sortByField === "id") {
    itemA = a.id;
    itemB = b.id;
  } else if (sortByField === "intensity") {
    itemA = a.intensity;
    itemB = b.intensity;
  } else if (sortByField === "likelihood") {
    itemA = a.likelihood;
    itemB = b.likelihood;
  } else if (sortByField === "relevance") {
    itemA = a.relevance;
    itemB = b.relevance;
  } else if (sortByField === "start year") {
    itemA = a.start_year;
    itemB = b.start_year;
  } else if (sortByField === "end year") {
    itemA = a.end_year;
    itemB = b.end_year;
  } else if (sortByField === "country") {
    itemA = a.country;
    itemB = b.country;
  } else if (sortByField === "topic") {
    itemA = a.topic;
    itemB = b.topic;
  } else if (sortByField === "region") {
    itemA = a.region;
    itemB = b.region;
  }

  if (itemA > itemB) {
    return 1 * reverseField;
  } else {
    return -1 * reverseField;
  }
}

export default function Comp({ data }) {
  const [sortColumn, setSortColumn] = useState("id");
  const [reverseColumn, setReverseColumn] = useState(1);

  let handleSort = (e) => {
    let data = e.target.textContent.toLowerCase();
    setReverseColumn(-1 * reverseColumn);
    setSortColumn(data);
  };

  console.log(data);

  return (
    <div className="content">
      <table>
        <tbody>
          <tr className="row">
            <td
              className="tb-header id-column"
              id="sort-id"
              onClick={handleSort}
            >
              ID
            </td>
            <td className="tb-header" id="sort-intensity" onClick={handleSort}>
              <a href="/intensity">Intensity</a>
            </td>
            <td className="tb-header" id="sort-likelihood" onClick={handleSort}>
              <a href="/likelihood">Likelihood</a>
            </td>
            <td className="tb-header" id="sort-relevance" onClick={handleSort}>
              <a href="/relevance">Relevance</a>
            </td>
            <td className="tb-header" id="sort-startYear" onClick={handleSort}>
              <a href="/start-year">Start year</a>
            </td>
            <td className="tb-header" id="sort-endYear" onClick={handleSort}>
              <a href="/end-year">End year</a>
            </td>
            <td className="tb-header" id="sort-country" onClick={handleSort}>
              <a href="/country">Country</a>
            </td>
            <td className="tb-header" id="sort-topic" onClick={handleSort}>
              <a href="/topic">Topic</a>
            </td>
            <td className="tb-header" id="sort-region" onClick={handleSort}>
              <a href="/region">Region</a>
            </td>
          </tr>
          {data
            .sort((a, b) => sortBy(a, b, sortColumn, reverseColumn))
            .map((d) => (
              <tr key={d.id} className="row">
                <td key={d.id}>
                  <a href={d.id}>{d.id}</a>
                </td>
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
