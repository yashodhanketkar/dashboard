import React, { useState, useEffect } from "react";

export default function LayoutSI({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/variables/${id["id"]}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <td className="tb-header">Name</td>
            <td className="tb-header">Value</td>
          </tr>
        </thead>
        {Object.keys(data).map((key, i) => (
          <tr key={i}>
            <td>{key}</td>
            <td>{data[key]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
