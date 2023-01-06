import React from "react";
import Topic from "./topic";

export default function index({ start, limit, height, width }) {
  return <Topic start={start} limit={limit} height={height} width={width} />;
}
