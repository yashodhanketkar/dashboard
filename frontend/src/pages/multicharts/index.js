import React from "react";
import { Routes, Route } from "react-router-dom";

import IntensityCharts from "./intensitycharts";
import LikelihoodCharts from "./likelihoodcharts";
import RelevanceCharts from "./relevancecharts";

export default function Charts() {
  return (
    <Routes>
      <Route path="/intensity" element={<IntensityCharts />} />
      <Route path="/likelihood" element={<LikelihoodCharts />} />
      <Route path="/relevance" element={<RelevanceCharts />} />
    </Routes>
  );
}
