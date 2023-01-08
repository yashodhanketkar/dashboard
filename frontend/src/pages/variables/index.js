// import React, { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  IntensityAPI,
  LikelihoodAPI,
  RelevanceAPI,
  StartYearAPI,
  EndYearAPI,
  CountryAPI,
  TopicAPI,
  RegionAPI,
} from "../../api";
import LayoutSV from "./layout_sv";

export function Intensity({ start, limit }) {
  const data = IntensityAPI({ start, limit });
  return <LayoutSV data={data} name="Intensity" />;
}

export function Likelihood({ start, limit }) {
  const data = LikelihoodAPI({ start, limit });
  return <LayoutSV data={data} name="Likelihood" />;
}

export function Relevance({ start, limit }) {
  const data = RelevanceAPI({ start, limit });
  return <LayoutSV data={data} name="Relevance" />;
}

export function StartYear({ start, limit }) {
  const data = StartYearAPI({ start, limit });
  return <LayoutSV data={data} name="StarYear" />;
}

export function EndYear({ start, limit }) {
  const data = EndYearAPI({ start, limit });
  return <LayoutSV data={data} name="End year" />;
}

export function Country({ start, limit }) {
  const data = CountryAPI({ start, limit });
  return <LayoutSV data={data} name="Country" />;
}

export function Topic({ start, limit }) {
  const data = TopicAPI({ start, limit });
  return <LayoutSV data={data} name="Topic" />;
}

export function Region({ start, limit }) {
  const data = RegionAPI({ start, limit });
  return <LayoutSV data={data} name="Region" />;
}

export default function Variables() {
  return (
    <Routes>
      <Route path="/intensity" element={<Intensity />} />
      <Route path="/likelihood" element={<Likelihood />} />
      <Route path="/relevance" element={<Relevance />} />
      <Route path="/start-year" element={<StartYear />} />
      <Route path="/end-year" element={<EndYear />} />
      <Route path="/country" element={<Country />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/region" element={<Region />} />
      {/* <Route path="/region" element={<Region start={start} limit={limit} />} /> */}
    </Routes>
  );
}
