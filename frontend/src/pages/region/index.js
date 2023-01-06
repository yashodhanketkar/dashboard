import React from "react";
import Region from "./region";

export default function index({ start, limit, height, width }) {
  return <Region start={start} limit={limit} height={height} width={width} />;
}
