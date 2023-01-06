import React from "react";
import Draw from "./Draw";

export default function PieChart({ data, start, limit, field, width, height }) {
  return (
    <Draw
      data={data}
      start={start}
      limit={limit}
      field={field}
      width={width}
      height={height}
    />
  );
}
