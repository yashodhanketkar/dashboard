import React from "react";
import StartYear from "./start-year";

export default function index({ start, limit, height, width }) {
  return (
    <StartYear start={start} limit={limit} height={height} width={width} />
  );
}
