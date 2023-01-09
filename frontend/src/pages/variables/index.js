import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import {
  IntensityAPI,
  LikelihoodAPI,
  RelevanceAPI,
  StartYearAPI,
  EndYearAPI,
  CountryAPI,
  TopicAPI,
  RegionAPI,
  ImpactAPI,
} from "../../api";
import LayoutSI from "./layout_si";
import LayoutSV from "./layout_sv";

function Intensity({ start, limit }) {
  const data = IntensityAPI({ start, limit });
  return <LayoutSV data={data} name="Intensity" />;
}

function Likelihood({ start, limit }) {
  const data = LikelihoodAPI({ start, limit });
  return <LayoutSV data={data} name="Likelihood" />;
}

function Relevance({ start, limit }) {
  const data = RelevanceAPI({ start, limit });
  return <LayoutSV data={data} name="Relevance" />;
}

function StartYear({ start, limit }) {
  const data = StartYearAPI({ start, limit });
  return <LayoutSV data={data} name="StarYear" />;
}

function EndYear({ start, limit }) {
  const data = EndYearAPI({ start, limit });
  return <LayoutSV data={data} name="End year" />;
}

function Country({ start, limit }) {
  const data = CountryAPI({ start, limit });
  return <LayoutSV data={data} name="Country" />;
}

function Topic({ start, limit }) {
  const data = TopicAPI({ start, limit });
  return <LayoutSV data={data} name="Topic" />;
}

function Region({ start, limit }) {
  const data = RegionAPI({ start, limit });
  return <LayoutSV data={data} name="Region" />;
}

function Impact({ start, limit }) {
  const data = ImpactAPI({ start, limit });
  return <LayoutSV data={data} name="Impact" />;
}

export function Item() {
  const id = useParams();
  return <LayoutSI id={id} />;
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
      <Route path="/impact" element={<Impact />} />
      <Route path="item/:id" element={<Item />} />
    </Routes>
  );
}
