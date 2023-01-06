import React from "react";
import Likelihood from "./likelihood";

export default function index({ start, limit, height, width }) {
  return (
    <Likelihood start={start} limit={limit} height={height} width={width} />
  );
}
