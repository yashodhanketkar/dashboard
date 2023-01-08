import { useState } from "react";
import {
  IntensityLineChart,
  LikelihoodLineChart,
  RelevanceLineChart,
} from "./charts";
import "../common/charts.css";

export default function Linechart() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [chartType, setChartType] = useState("Intensity");

  let startHandler = (e) => {
    var data = +e.target.value || 0;
    setStart(data);
  };

  let limitHandler = (e) => {
    var data = +e.target.value || 10;
    setLimit(data);
  };

  let optionHandler = (e) => {
    var data = e.target.value;
    setChartType(data);
  };

  const Intensitychart = IntensityLineChart({ start, limit });
  const Likelihoodchart = LikelihoodLineChart({ start, limit });
  const Relevancechart = RelevanceLineChart({ start, limit });

  return (
    <>
      <div className="content">
        <div className="chart-area">
          <select value={chartType} onChange={optionHandler}>
            <option value="Intensity">Intensity</option>
            <option value="Likelihood">Likelihood</option>
            <option value="Relevance">Relevance</option>
          </select>
          {(() => {
            if (chartType === "Intensity") {
              return Intensitychart;
            } else if (chartType === "Likelihood") {
              return Likelihoodchart;
            } else if (chartType === "Relevance") {
              return Relevancechart;
            }
          })()}
          <form className="chart-form">
            <div>
              <label className="chart-input">Start</label>
              <input
                className="chart-input"
                type={"text"}
                id="start-linechart"
                onKeyUp={startHandler}
              />
            </div>
            <div>
              <label className="chart-input">Limit</label>
              <input
                className="chart-input"
                type={"text"}
                id="limit-linechart"
                onKeyUp={limitHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
