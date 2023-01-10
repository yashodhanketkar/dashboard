import React, { useState, useEffect } from "react";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";

function getLineChart(data) {
  return <LineChart data={data} field="Likelihood" width={500} height={500} />;
}

function getBarChart(data) {
  return <BarChart data={data} field="Likelihood" width={500} height={500} />;
}

export default function LikelihoodCharts() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/variables/likelihood")
      .then((res) => res.json())
      .then((json) => json.results.splice(start, limit))
      .then((data) => setData(data));
  }, [start, limit]);

  const barchart = getBarChart(data);
  const linechart = getLineChart(data);

  let startHandler = (e) => {
    var data = +e.target.value || 0;
    setStart(data);
  };

  let limitHandler = (e) => {
    var data = +e.target.value || 10;
    setLimit(data);
  };

  return (
    <div className="content">
      <div className="content-chart">
        <div className="chart-area">
          <div className="chart-title">Likelihood</div>
          <div className="chart-draw-area">
            <div className="multi-chart">
              <div className="sub-chart">
                {barchart}
                <label>Bar Chart</label>
              </div>
              <div className="sub-chart">
                {linechart}
                <label>Line Chart</label>
              </div>
            </div>
            <form className="chart-form">
              <div>
                <label className="chart-input">Start</label>
                <input
                  className="chart-input"
                  type={"text"}
                  id="start-barchart"
                  defaultValue={start}
                  onKeyUp={startHandler}
                />
              </div>
              <div>
                <label className="chart-input">Limit</label>
                <input
                  className="chart-input"
                  type={"text"}
                  id="limit-barchart"
                  defaultValue={limit}
                  onKeyUp={limitHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
