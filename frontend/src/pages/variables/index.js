import React from "react";
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

export function Intensity() {
  const data = IntensityAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Intensity" />;
}

export function Likelihood() {
  const data = LikelihoodAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Likelihood" />;
}

export function Relevance() {
  const data = RelevanceAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Relevance" />;
}

export function StartYear() {
  const data = StartYearAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="StarYear" />;
}

export function EndYear() {
  const data = EndYearAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="End year" />;
}

export function Country() {
  const data = CountryAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Country" />;
}

export function Topic() {
  const data = TopicAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Topic" />;
}

export function Region() {
  const data = RegionAPI({ start: 0, limit: 10 });
  return <LayoutSV data={data} name="Region" />;
}

export default function Variables() {
  return <div>Variables</div>;
}
