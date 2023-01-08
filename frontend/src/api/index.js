import useAPI from "../hooks/useAPI";

export default function AllAPI({ start, limit }) {
  return useAPI({ url: "variables/all", start: start, limit: limit });
}

export function CountryAPI({ start, limit }) {
  return useAPI({ url: "variables/country", start: start, limit: limit });
}

export function EndYearAPI({ start, limit }) {
  return useAPI({
    url: "variables/end-year",
    start: start,
    limit: limit,
  });
}

export function ImpactAPI({ start, limit }) {
  return useAPI({
    url: "variables/impact",
    start: start,
    limit: limit,
  });
}

export function IntensityAPI({ start, limit }) {
  return useAPI({ url: "variables/intensity", start: start, limit: limit });
}

export function LikelihoodAPI({ start, limit }) {
  return useAPI({
    url: "variables/likelihood",
    start: start,
    limit: limit,
  });
}

export function RegionAPI({ start, limit }) {
  return useAPI({ url: "variables/region", start: start, limit: limit });
}

export function RelevanceAPI({ start, limit }) {
  return useAPI({
    url: "variables/relevance",
    start: start,
    limit: limit,
  });
}

export function StartYearAPI({ start, limit }) {
  return useAPI({
    url: "variables/start-year",
    start: start,
    limit: limit,
  });
}

export function TopicAPI({ start, limit }) {
  return useAPI({ url: "variables/topic", start: start, limit: limit });
}
