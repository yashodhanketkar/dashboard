import React from "react";
import Intensity from "./intensity";

export default function index({ start, limit, height, width }) {
  return (
    <Intensity start={start} limit={limit} height={height} width={width} />
  );
}
