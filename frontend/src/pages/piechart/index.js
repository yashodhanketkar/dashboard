import React, { useState } from "react";
import {
  CountryPieChart,
  EndYearPieChart,
  StartYearPieChart,
  TopicPieChart,
  RegionPieChart,
} from "./charts";
import "../common/charts.css";

export default function Piechart() {
  const [limiterValue, setLimiterValue] = useState(5);
  const [chartType, setChartType] = useState("country");

  function optionHandler(e) {
    var data = e.target.value;
    setChartType(data);
  }

  function limiterValueHandler(e) {
    var data = +e.target.value || 1;
    setLimiterValue(data);
  }

  return (
    <div className="content">
      <div className="chart-area">
        <select value={chartType} onChange={optionHandler}>
          <option value="start_year">Start year</option>
          <option value="end_year">End year</option>
          <option value="country">Country</option>
          <option value="topic">Topic</option>
          <option value="region">Region</option>
        </select>
        {(() => {
          if (chartType === "start_year") {
            return <StartYearPieChart limiterValue={limiterValue} />;
          } else if (chartType === "end_year") {
            return <EndYearPieChart limiterValue={limiterValue} />;
          } else if (chartType === "country") {
            return <CountryPieChart limiterValue={limiterValue} />;
          } else if (chartType === "topic") {
            return <TopicPieChart limiterValue={limiterValue} />;
          } else if (chartType === "region") {
            return <RegionPieChart limiterValue={limiterValue} />;
          }
        })()}
        <input
          type={"text"}
          value={limiterValue}
          onChange={limiterValueHandler}
        />
      </div>
    </div>
  );
}
