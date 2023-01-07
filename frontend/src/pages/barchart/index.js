import { useState } from "react";
import { IntensityAPI, LikelihoodAPI } from "../../api";
import BarChart from "../../components/BarChart";
import "./style.css";

function IntensityBarChart({ start, limit }) {
  const data = IntensityAPI({ start: start, limit: limit });
  return <BarChart data={data} field="Intensity" width={500} height={500} />;
}

function LikelihoodBarChart({ start, limit }) {
  const data = LikelihoodAPI({ start: start, limit: limit });
  return <BarChart data={data} field="Likelihood" width={500} height={500} />;
}

function selectChart(menu) {
  if (menu.value === "1") {
    console.log("option 1");
  } else if (menu.value === "2") {
    console.log("option 2");
  }
}

export default function Barchart() {
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [chartType, setChartType] = useState("Orange");

  let startHandler = (e) => {
    var data = e.target.value;
    setStart(data);
  };

  let limitHandler = (e) => {
    var data = e.target.value;
    setLimit(data);
  };

  let optionHandler = (e) => {
    var data = e.target.value;
    setChartType(data);
  };

  const Intensitychart = IntensityBarChart({ start, limit });
  const Likelihoodchart = LikelihoodBarChart({ start, limit });

  return (
    <>
      <div className="content">
        <select value={chartType} onChange={optionHandler}>
          <option value="Intensity">Intensity</option>
          <option value="Likelihood">Likelihood</option>
        </select>
        {(() => {
          if (chartType === "Intensity") {
            return Intensitychart;
          } else if (chartType === "Likelihood") {
            return Likelihoodchart;
          }
        })()}
        {/* {Likelihoodchart} */}
        <form className="bar-chart-form">
          <div>
            Start
            <input
              className="bar-chart-input"
              type={"text"}
              id="start-barchart"
              onKeyUp={startHandler}
            />
          </div>
          <div>
            Limit
            <input
              className="bar-chart-input"
              type={"text"}
              id="limit-barchart"
              onKeyUp={limitHandler}
            />
          </div>
        </form>
      </div>
    </>
  );
}
