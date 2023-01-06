import React, { useState, useEffect } from "react";
import "./intensity.css";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

const Intensity = ({ start, limit, height, width }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "variables/intensity";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const json_splice = json.results.splice(start, limit);
        setData(json_splice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [start, limit]);
  return (
    <>
      <h1>App</h1>
      <div className="chart">
        {/* <PieChart
          data={data}
          start={start}
          limit={limit}
          field="Intensity"
          width={width}
          height={height}
        /> */}
        {/* <BarChart data={data} field="Intensity" width={width} height={height} /> */}
        <LineChart
          data={data}
          field="Intensity"
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Intensity;
