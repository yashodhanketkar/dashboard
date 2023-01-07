import React from "react";
import AllAPI from "../../api";
import Comp from "./comp";

export default function Dashboard() {
  const data = AllAPI({ start: 0, limit: 10 });
  return <Comp data={data} />;
}
