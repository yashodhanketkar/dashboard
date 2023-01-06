import React from "react";
import Relevance from "./relevance";

export default function index({ start, limit, height, width }) {
  return (
    <Relevance start={start} limit={limit} height={height} width={width} />
  );
}
