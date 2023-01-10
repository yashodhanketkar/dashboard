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
  const [lastSortColumn, setLastSortColumn] = useState("id");
  const [reverseColumn, setReverseColumn] = useState(1);
  const [selectAriaHeight, setSelectAriaHeight] = useState("0px");
  const [filterDict, setfilterDict] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    country: "",
  });
  const [page, setPage] = useState(1);
  const [pageJump, setPageJump] = useState(25);
  const [sortAcitve, setSortActive] = useState(false);
  const [bntWrapper, setBntWrapper] = useState("visible");

  function handlerNextPage() {
    if (page * pageJump < data.length) {
      setPage(page + 1);
    }
  }

  function handlerPreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handlePageJump(e) {
    setPageJump(e.target.value);
    setPage(1);
  }

  function handleSort(e) {
    let columnOrder;
    const data = e.target.textContent.toLowerCase();
    if (data === "id") {
      setReverseColumn(1);
      setSortActive(false);
      setPage(1);
      setBntWrapper("visible");
    } else {
      columnOrder =
        lastSortColumn === data ? -1 * reverseColumn : reverseColumn;
      setReverseColumn(columnOrder);
      setSortActive(true);
      setBntWrapper("hidden");
    }
    setLastSortColumn(data);
    setSortColumn(data);
  }

  function handleFilterArea() {
    if (selectAriaHeight === "fit-content") {
      setSelectAriaHeight("0px");
    } else if (selectAriaHeight === "0px") {
      setSelectAriaHeight("fit-content");
    }
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
        <button className="toggle-filter" onClick={handleFilterArea}>
          <label>Filter</label>
        </button>
        <div className="filter-controls" style={{ height: selectAriaHeight }}>
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

      <div className="table-button-wrapper" style={{ visibility: bntWrapper }}>
        <button
          id="first-page-button"
          className="page-button"
          onClick={() => setPage(1)}
        >
          First
        </button>
        <button
          id="dec-button"
          className="page-button"
          onClick={handlerPreviousPage}
        >
          Prev
        </button>
        <select
          value={pageJump}
          className="page-select"
          onChange={handlePageJump}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <button
          id="inc-button"
          className="page-button"
          name="Next Page"
          onClick={handlerNextPage}
        >
          Next{" "}
        </button>
        <button
          id="last-page-button"
          className="page-button"
          onClick={() => setPage(data.length / pageJump)}
        >
          Last
        </button>
      </div>

      <div className="content-table">
        <table>
          <tbody>
            <tr className="row">
              <th
                className="tb-header id-column numeric"
                id="sort-id"
                onClick={handleSort}
              >
                ID
              </th>
              <th
                className="tb-header numeric"
                id="sort-intensity"
                onClick={handleSort}
              >
                <a href="/intensity">Intensity</a>
              </th>
              <th
                className="tb-header numeric"
                id="sort-likelihood"
                onClick={handleSort}
              >
                <a href="/likelihood">Likelihood</a>
              </th>
              <th
                className="tb-header numeric"
                id="sort-relevance"
                onClick={handleSort}
              >
                <a href="/relevance">Relevance</a>
              </th>
              <th
                className="tb-header numeric"
                id="sort-startYear"
                onClick={handleSort}
              >
                <a href="/start-year">Start year</a>
              </th>
              <th
                className="tb-header numeric"
                id="sort-endYear"
                onClick={handleSort}
              >
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
                d.country
                  .toLowerCase()
                  .includes(filterDict.country.toLowerCase())
              )
              .filter(
                (d) =>
                  sortAcitve
                    ? d
                    : d.id < page * pageJump && d.id + 1 > (page - 1) * pageJump // to include 0th id item
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
    </div>
  );
}
