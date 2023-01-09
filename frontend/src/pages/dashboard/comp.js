import React, { useState } from "react";
import { sortBy } from "./sorters";
import {
  handleFilterEndYear,
  handleFilterTopics,
  handleFilterSector,
  handleFilterRegion,
  handleFilterPestle,
  handleFilterSource,
  handleFilterCountry,
} from "./handlers";

import "./style.css";
import "../common/table.css";
import "../common/common.css";

export default function Comp({ data }) {
  const [sortColumn, setSortColumn] = useState("id");
  const [reverseColumn, setReverseColumn] = useState(1);
  const [filterDict, setfilterDict] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    country: "",
  });

  function handleSort(e) {
    const data = e.target.textContent.toLowerCase();
    const columnOrder = -1 * reverseColumn;
    setReverseColumn(columnOrder);
    setSortColumn(data);
  }

  const filterDictDefault = [
    {
      label: "End Year",
      name: "end_year",
      handler: handleFilterEndYear,
    },
    {
      label: "Topic",
      name: "topic",
      handler: handleFilterTopics,
    },
    {
      label: "Sector",
      name: "sector",
      handler: handleFilterSector,
    },
    {
      label: "Region",
      name: "region",
      handler: handleFilterRegion,
    },
    {
      label: "Pestle",
      name: "pestle",
      handler: handleFilterPestle,
    },
    {
      label: "Source",
      name: "source",
      handler: handleFilterSource,
    },
    {
      label: "Country",
      name: "country",
      handler: handleFilterCountry,
    },
  ];

  return (
    <div className="content">
      <div className="filter-wrapper">
        <button className="toggle-filter">
          <label>Filter</label>
        </button>
        <div className="filter-controls">
          {filterDictDefault.map((d) => (
            <div className="filter" key={d.name}>
              <label>{d.label}</label>
              <input
                className="filter-text"
                type="text"
                name={d.name}
                onKeyUp={(e) => d.handler(e, setfilterDict)}
              />
            </div>
          ))}
        </div>
      </div>

      <table>
        <tbody>
          <tr className="row">
            <th
              className="tb-header id-column"
              id="sort-id"
              onClick={handleSort}
            >
              ID
            </th>
            <th className="tb-header" id="sort-intensity" onClick={handleSort}>
              <a href="/intensity">Intensity</a>
            </th>
            <th className="tb-header" id="sort-likelihood" onClick={handleSort}>
              <a href="/likelihood">Likelihood</a>
            </th>
            <th className="tb-header" id="sort-relevance" onClick={handleSort}>
              <a href="/relevance">Relevance</a>
            </th>
            <th className="tb-header" id="sort-startYear" onClick={handleSort}>
              <a href="/start-year">Start year</a>
            </th>
            <th className="tb-header" id="sort-endYear" onClick={handleSort}>
              <a href="/end-year">End year</a>
            </th>
            <th className="tb-header" id="sort-country" onClick={handleSort}>
              <a href="/country">Country</a>
            </th>
            <th className="tb-header" id="sort-topic" onClick={handleSort}>
              <a href="/topic">Topic</a>
            </th>
            <th className="tb-header" id="sort-region" onClick={handleSort}>
              <a href="/region">Region</a>
            </th>
          </tr>
          {data
            .sort((a, b) => sortBy(a, b, sortColumn, reverseColumn))
            .filter((d) =>
              d.end_year
                .toLowerCase()
                .includes(filterDict.end_year.toLowerCase())
            )
            .filter((d) =>
              d.topic.toLowerCase().includes(filterDict.topic.toLowerCase())
            )
            .filter((d) =>
              d.sector.toLowerCase().includes(filterDict.sector.toLowerCase())
            )
            .filter((d) =>
              d.region.toLowerCase().includes(filterDict.region.toLowerCase())
            )
            .filter((d) =>
              d.pestle.toLowerCase().includes(filterDict.pestle.toLowerCase())
            )
            .filter((d) =>
              d.source.toLowerCase().includes(filterDict.source.toLowerCase())
            )
            .filter((d) =>
              d.country.toLowerCase().includes(filterDict.country.toLowerCase())
            )
            .map((d) => (
              <tr key={d.id} className="row">
                <td key={d.id}>
                  <a href={"item/" + d.id}>{d.id}</a>
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
