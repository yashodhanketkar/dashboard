import React from "react";
import AllAPI from "../../api";
import Comp from "./comp";

function GetImportant({ start, limit }) {
  const data = AllAPI({ start, limit });
  return <Comp data={data} />;
}

export default function Dashboard() {
  return <GetImportant />;
}
