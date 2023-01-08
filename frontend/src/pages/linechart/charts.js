import { IntensityAPI, LikelihoodAPI, RelevanceAPI } from "../../api";
import LineChart from "../../components/LineChart";

export function IntensityLineChart({ start, limit }) {
  const data = IntensityAPI({ start: start, limit: limit });
  return <LineChart data={data} field="Intensity" width={500} height={500} />;
}

export function LikelihoodLineChart({ start, limit }) {
  const data = LikelihoodAPI({ start: start, limit: limit });
  return <LineChart data={data} field="Likelihood" width={500} height={500} />;
}

export function RelevanceLineChart({ start, limit }) {
  const data = RelevanceAPI({ start: start, limit: limit });
  return <LineChart data={data} field="Relevance" width={500} height={500} />;
}
