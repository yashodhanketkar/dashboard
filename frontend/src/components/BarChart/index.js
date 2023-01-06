import React from "react";
import Draw from "./Draw";

export default function BarChart({ data, field, width, height }) {
  const chart = Draw({ data, field, width, height });

  return (
    <svg
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: chart.innerHTML }}
    />
  );
}
