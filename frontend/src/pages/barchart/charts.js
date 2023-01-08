import { IntensityAPI, LikelihoodAPI, RelevanceAPI } from "../../api";
import BarChart from "../../components/BarChart";

export function IntensityBarChart({ start, limit }) {
  const data = IntensityAPI({ start: start, limit: limit });
  return <BarChart data={data} field="Intensity" width={500} height={500} />;
}

export function LikelihoodBarChart({ start, limit }) {
  const data = LikelihoodAPI({ start: start, limit: limit });
  return <BarChart data={data} field="Likelihood" width={500} height={500} />;
}

export function RelevanceBarChart({ start, limit }) {
  const data = RelevanceAPI({ start: start, limit: limit });
  return <BarChart data={data} field="Relevance" width={500} height={500} />;
}
