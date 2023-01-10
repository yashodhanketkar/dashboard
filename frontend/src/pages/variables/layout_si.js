import React, { useState, useEffect } from "react";

function titleCase(textString) {
  return textString.charAt(0).toUpperCase() + textString.slice(1);
}

function textStyler(k, d) {
  let kName = k;
  let dName = d;

  kName = kName.replace("_", " ");

  if (k === "url" || k === "id") {
    kName = kName.toUpperCase();
  }
  kName = titleCase(kName);
  if (typeof d === "string") {
    dName = titleCase(dName);
  }

  return (
    <>
      <td className="item-display-table" style={{ fontWeight: 800 }}>
        {kName}
      </td>
      {k === "url" ? (
        <td className="item-display-table">
          <a href={d}>{d}</a>
        </td>
      ) : (
        <td className="item-display-table">{dName}</td>
      )}
    </>
  );
}

export default function LayoutSI({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/variables/item/${id["id"]}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        {Object.keys(data).map((key, i) => (
          <tbody key={i}>
            <tr>{textStyler(key, data[key])}</tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
