import PieChart from "../../components/PieChart";

import {
  CountryAPI,
  EndYearAPI,
  RegionAPI,
  StartYearAPI,
  TopicAPI,
} from "../../api";

function counter({ data, defaultValue }) {
  const itemName = data
    .map((d) => d.value)
    .filter((d) => d !== defaultValue)
    .filter((cp, i, d) => d.indexOf(cp) === i);

  const count = itemName
    .map((d) => ({
      id: d !== "None" ? d : "Unknown",
      value: data.filter((i) => i.value === d).length,
    }))
    .sort((a, b) => (a.value > b.value ? -1 : 1));

  return count;
}

function limiter(data, limiter) {
  return data.slice(0, limiter);
}

export function StartYearPieChart({ start, limit, limiterValue }) {
  const result = counter({
    data: StartYearAPI({ start, limit }),
    defaultValue: "0000",
  });

  return (
    <PieChart
      data={limiter(result, limiterValue)}
      start={0}
      limit={limiterValue * 25}
      field="Start year"
      width={500}
      height={500}
    />
  );
}

export function EndYearPieChart({ start, limit, limiterValue }) {
  const result = counter({
    data: EndYearAPI({ start, limit }),
    defaultValue: "9999",
  });

  return (
    <PieChart
      data={limiter(result, limiterValue)}
      start={0}
      limit={limiterValue * 25}
      field="End year"
      width={500}
      height={500}
    />
  );
}

export function CountryPieChart({ start, limit, limiterValue }) {
  const result = counter({
    data: CountryAPI({ start, limit }),
    defaultValue: "None",
  });

  return (
    <PieChart
      data={limiter(result, limiterValue)}
      start={0}
      limit={limiterValue * 25}
      field="Country"
      width={500}
      height={500}
    />
  );
}

export function TopicPieChart({ start, limit, limiterValue }) {
  const result = counter({
    data: TopicAPI({ start, limit }),
    defaultValue: "None",
  });

  return (
    <PieChart
      data={limiter(result, limiterValue)}
      start={0}
      limit={limiterValue * 25}
      field="Topics"
      width={500}
      height={500}
    />
  );
}

export function RegionPieChart({ start, limit, limiterValue }) {
  const result = counter({
    data: RegionAPI({ start, limit }),
    defaultValue: "None",
  });

  return (
    <PieChart
      data={limiter(result, limiterValue)}
      start={0}
      limit={limiterValue * 25}
      field="Region"
      width={500}
      height={500}
    />
  );
}
